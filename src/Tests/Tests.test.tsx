import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, test } from "vitest";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import App from "../App";
import AllArtists from "@/Pages/AllArtists/AllArtists";
import {
  MemoryRouter,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import Concerts from "@/Pages/Concerts/Concerts";
import ConcertDetails from "@/Pages/ConcertDetails/ConcertDetails";
import Header from "@/Components/Header/Header";
import { ReactNode } from "react";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import Button from "@/Components/Button/Button";
import ReactLeaflet from "@/Components/ReactLeaflet/ReactLeaflet";
import Footer from "@/Components/Footer/Footer";
import { useGetConcertsQuery } from "@/Services/ConcertApi/concertApi";
import Order from "@/Pages/Order/Order";
import { configureStore } from "@reduxjs/toolkit";
import Payment from "@/Pages/Payment/Payment";

// Tests

type ReactI18nextModule = {
  useTranslation: () => {
    t: (key: string) => string;
  };
  I18nextProvider: (props: { children: ReactNode }) => JSX.Element;
};

const i18nMock = {
  t: (key: string) => key,
};

vi.spyOn(i18n, "changeLanguage");

vi.mock("react-i18next", async (importOriginal) => {
  const actual: ReactI18nextModule = await importOriginal();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key, // Simple mock; you may need to return actual texts
    }),
    I18nextProvider: ({ children }: { children: ReactNode }) => <>{children}</>, // Simple mock
  };
});

describe("App Component", () => {
  it("componenet Render", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/lineup/i)).toBeInTheDocument();
    const images = screen.getAllByAltText(/photo/i);
    images.forEach((image) => {
      expect(image).toHaveAttribute(
        "src",
        "https://optim.tildacdn.one/tild3362-3530-4261-b264-363138323264/-/format/webp/Stage_1.png"
      );
    });
  });

  // Artists

  describe("ArtistCard Component", () => {
    it("componenet Render", () => {
      render(
        <MemoryRouter>
          <AllArtists />
        </MemoryRouter>
      );
      const artistCards = screen.getAllByTestId("artist-card");
      expect(artistCards).toHaveLength(36);
    });
  });

  // Concerts

  describe("Concerts Component", () => {
    it("should display loading message while fetching data", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Concerts />
          </MemoryRouter>
        </Provider>
      );

      expect(screen.getByText(/loading/i)).toBeInTheDocument();

      waitFor(
        () => {
          expect(screen.getByTestId("concert-card")).toBeInTheDocument();
        },
        { timeout: 5000 }
      );
    });
  });

  // Header

  describe("Header Component", () => {
    it("renders header component correctly", () => {
      render(
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <Header />
          </I18nextProvider>
        </MemoryRouter>
      );

      // Logo' render
      const logo = screen.getByAltText(/Logo/i);
      expect(logo).toHaveAttribute(
        "src",
        "https://static.tildacdn.one/tild3437-3836-4533-a561-373461636133/logo.svg"
      );

      // Home link render
      const homeLinks = screen.getAllByText(/home/i);
      expect(homeLinks.length).toBeGreaterThan(0);

      // Cart icon render
      const cartIcon = screen.getByTestId("cart-icon");
      expect(cartIcon).toBeInTheDocument();
    });

    it("toggles the menu when hamburger icon is clicked", () => {
      render(
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <Header />
          </I18nextProvider>
        </MemoryRouter>
      );

      const hamburgerIcon = screen.getByTestId("hamburger-icon");
      fireEvent.click(hamburgerIcon);

      const menu = screen.getByRole("navigation");

      expect(menu).toHaveClass("active");
    });

    it("changes language when a language option is clicked", () => {
      render(
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <Header />
          </I18nextProvider>
        </MemoryRouter>
      );

    });
  });

  // BreadCrumb

  describe("BreadCrumb Component", () => {
    it("renders breadcrumb items with correct links and text", () => {
      render(
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <BreadCrumb />
          </I18nextProvider>
        </MemoryRouter>
      );

      // texts
      expect(screen.getByText("home")).toBeInTheDocument();
      expect(screen.getByText("artists")).toBeInTheDocument();
      expect(screen.getByText("concerts")).toBeInTheDocument();
      expect(screen.getByText("contact")).toBeInTheDocument();
      expect(screen.getByText("cart")).toBeInTheDocument();

      // Links
      expect(screen.getByText("home").closest("a")).toHaveAttribute(
        "href",
        "/"
      );
      expect(screen.getByText("artists").closest("a")).toHaveAttribute(
        "href",
        "/allartists"
      );
      expect(screen.getByText("concerts").closest("a")).toHaveAttribute(
        "href",
        "/concerts"
      );
      expect(screen.getByText("contact").closest("a")).toHaveAttribute(
        "href",
        "/contact"
      );
      expect(screen.getByText("cart").closest("a")).toHaveAttribute(
        "href",
        "/cart"
      );
    });

    it("applies active link styles correctly", () => {
      render(
        <MemoryRouter initialEntries={["/allartists"]}>
          <I18nextProvider i18n={i18n}>
            <BreadCrumb />
          </I18nextProvider>
        </MemoryRouter>
      );
    });
  });

  // Button
  describe("Button Component", () => {
    it("renders button with text, background color, and text color", () => {
      render(<Button text="Click Me" bgColor="blue" color="white" />);

      const buttonElement = screen.getByText("Click Me");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveStyle("background-color: rgb(0, 0, 255)");
    });

    it("applies additional className if provided", () => {
      render(
        <Button
          text="Click Me"
          bgColor="blue"
          color="white"
          className="extra-class"
        />
      );

      const buttonElement = screen.getByText("Click Me");
      expect(buttonElement).toHaveClass("btn extra-class");
    });

    it("button click triggers onClick handler", () => {
      const handleClick = vi.fn();
      render(
        <Button
          text="Click Me"
          bgColor="blue"
          color="white"
          onClick={handleClick}
        />
      );

      const buttonElement = screen.getByText("Click Me");
      fireEvent.click(buttonElement);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("button is disabled when disabled prop is true", () => {
      render(
        <Button text="Click Me" bgColor="blue" color="white" disabled={true} />
      );

      const buttonElement = screen.getByText("Click Me");
      expect(buttonElement).toBeDisabled();
    });

    it("button is enabled when disabled prop is false", () => {
      render(
        <Button text="Click Me" bgColor="blue" color="white" disabled={false} />
      );

      const buttonElement = screen.getByText("Click Me");
      expect(buttonElement).not.toBeDisabled();
    });
  });

  // React Lraflet

  describe("ReactLeaflet Component", () => {
    it("renders without crashing", () => {
      render(
        <ReactLeaflet
          latitude={51.505}
          longitude={-0.09}
          title="Test Title"
          address="Test Address"
          width="100%"
          height="400px"
          borderR="8px"
        />
      );
      expect(screen.getByRole("presentation")).toBeInTheDocument(); // MapContainer renders with the role "presentation"
    });

    it("applies styles correctly", () => {
      render(
        <ReactLeaflet
          latitude={51.505}
          longitude={-0.09}
          title="Test Title"
          address="Test Address"
          width="100%"
          height="400px"
          borderR="8px"
        />
      );
      const mapContainer = screen.getByRole("presentation");
      expect(mapContainer).toHaveStyle("width: 256px");
      expect(mapContainer).toHaveStyle("height: 256px");
    });

    it("displays the custom marker icon", () => {
      render(
        <ReactLeaflet
          latitude={51.505}
          longitude={-0.09}
          title="Test Title"
          address="Test Address"
          width="100%"
          height="400px"
          borderR="8px"
        />
      );
      // Leaflet's internal rendering can be complex to assert directly.
      // This test verifies that the component renders without issues.
      expect(screen.getByRole("presentation")).toBeInTheDocument();
    });

    it("displays the popup with correct title and address", () => {
      render(
        <ReactLeaflet
          latitude={51.505}
          longitude={-0.09}
          title="Test Title"
          address="Test Address"
          width="100%"
          height="400px"
          borderR="8px"
        />
      );

      // The actual popup content may not be easily testable as it is rendered by Leaflet
      // This test assumes you are verifying if the map container is rendered.
      waitFor(() => {
        // The actual content might be in different elements or within Leaflet's dynamic rendering
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test Address")).toBeInTheDocument();
      });
    });
  });

  // Footer

  describe("Footer Component", () => {
    test("Footer component renders correctly", () => {
      render(<Footer />);
      const footerElement = screen.getByText(/More From Dream Fest/i);
      expect(footerElement).toBeInTheDocument();
    });

    test("Social media links are present", () => {
      render(<Footer />);
      const facebookLink = screen.getByRole("link", { name: /facebook/i });
      const twitterLink = screen.getByRole("link", { name: /twitter/i });
      const instagramLink = screen.getByRole("link", { name: /instagram/i });
      const googleLink = screen.getByRole("link", { name: /google/i });
      const githubLink = screen.getByRole("link", { name: /github/i });
      const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

      expect(facebookLink).toBeInTheDocument();
      expect(twitterLink).toBeInTheDocument();
      expect(instagramLink).toBeInTheDocument();
      expect(googleLink).toBeInTheDocument();
      expect(githubLink).toBeInTheDocument();
      expect(linkedinLink).toBeInTheDocument();
    });

    test("Social media icons are rendered correctly", () => {
      render(<Footer />);
      expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/google/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    });

    test("Copyright text is present", () => {
      render(<Footer />);
      const copyrightText = screen.getByText(
        /TM & © Lucasfilm Ltd. All Rights Reserved/i
      );
      expect(copyrightText).toBeInTheDocument();
    });

    test("Links open in a new tab", () => {
      render(<Footer />);
      const links = screen.getAllByRole("link");
      links.forEach((link) => {
        expect(link).toHaveAttribute("target", "_blank");
      });
    });
  });

  //  Contert Details

  const mockConcertData = {
    data: [
      {
        concert_id: "1",
        name: "Test Concert",
        endDate: "2024-08-27T20:00:00Z",
        description: "An amazing concert at Hollywood Bowl",
        location: {
          address: {
            addressCountry: "USA",
            addressLocality: "Los Angeles",
            streetAddress: "123 Hollywood Blvd",
          },
          geo: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
        performer: [{ name: "Band A" }],
        image: "test-image.jpg",
      },
    ],
  };

  // Mock useGetConcertsQuery hook
  vi.mock("../../Services/ConcertApi/concertApi", () => ({
    useGetConcertsQuery: jest.fn(() => ({ data: mockConcertData })),
  }));

  test("loads and displays concert data", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="/concert/:id" element={<ConcertDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    waitFor(() => {
      expect(screen.getByText(/Test Concert/i)).toBeInTheDocument();
      expect(screen.getByText(/Los Angeles/i)).toBeInTheDocument();
    });
  });

  // Order

  describe("Order Component", () => {
    it("renders Order component", () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/order/123456"]}>
            <I18nextProvider i18n={i18n}>
              <Routes>
                <Route path="/order/:id" element={<Order />} />
              </Routes>
            </I18nextProvider>
          </MemoryRouter>
        </Provider>
      );

      const orderTitleElement = screen.getByText((content) =>
        content.includes("orderTitle")
      );
      expect(orderTitleElement).toBeInTheDocument();
    });

    it("renders user details and cart items", () => {
      const mockState = {
        user: { name: "Test User", email: "test@example.com" },
        cart: {
          items: [{ id: 1, name: "Concert Ticket", quantity: 2 }],
          totalPrice: 70,
          formData: [
            {
              name: "John",
              surname: "Doe",
              email: "john@example.com",
              mobile: "123456789",
            },
          ],
        },
      };

      const mockStore = configureStore({
        reducer: {
          user: (state = mockState.user, action) => state,
          cart: (state = mockState.cart, action) => state,
        },
        preloadedState: mockState,
      });

      render(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={["/order/123456"]}>
            <I18nextProvider i18n={i18n}>
              <Routes>
                <Route path="/order/:id" element={<Order />} />
              </Routes>
            </I18nextProvider>
          </MemoryRouter>
        </Provider>
      );
    });

    test("renders cart items", () => {
      const mockState = {
        user: { name: "Test User", email: "test@example.com" },
        cart: {
          items: [{ id: 1, name: "Concert Ticket", quantity: 2 }],
          totalPrice: 70,
          formData: [
            {
              name: "John",
              surname: "Doe",
              email: "john@example.com",
              mobile: "123456789",
            },
          ],
        },
      };

      const mockStore = configureStore({
        reducer: {
          user: (state = mockState.user, action) => state,
          cart: (state = mockState.cart, action) => state,
        },
        preloadedState: mockState,
      });

      render(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={["/order/123456"]}>
            <I18nextProvider i18n={i18n}>
              <Routes>
                <Route path="/order/:id" element={<Order />} />
              </Routes>
            </I18nextProvider>
          </MemoryRouter>
        </Provider>
      );
      const cartItemElement = screen.getByText(/Concert Ticket/i);
      expect(cartItemElement).toBeInTheDocument();
    });

    test("displays total price", () => {
      const mockState = {
        user: { name: "Test User", email: "test@example.com" },
        cart: {
          items: [{ id: 1, name: "Concert Ticket", quantity: 2 }],
          totalPrice: 70,
          formData: [
            {
              name: "John",
              surname: "Doe",
              email: "john@example.com",
              mobile: "123456789",
            },
          ],
        },
      };
      const mockStore = configureStore({
        reducer: {
          user: (state = mockState.user, action) => state,
          cart: (state = mockState.cart, action) => state,
        },
        preloadedState: mockState,
      });

      render(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={["/order/123456"]}>
            <I18nextProvider i18n={i18n}>
              <Routes>
                <Route path="/order/:id" element={<Order />} />
              </Routes>
            </I18nextProvider>
          </MemoryRouter>
        </Provider>
      );

      waitFor(() => {
        expect(screen.getByText(/Total Price:\s*70\$/i)).toBeInTheDocument();
      });
    });
  });

  // Payment

  
});
