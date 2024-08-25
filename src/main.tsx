import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllArtists from "./Pages/AllArtists/AllArtists.tsx";
import Concerts from "./Pages/Concerts/Concerts.tsx";
import ConcertDetails from "./Pages/ConcertDetails/ConcertDetails.tsx";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart.tsx";
import Order from "./Pages/Order/Order.tsx";
import Payment from "./Pages/Payment/Payment.tsx";
import Contact from "./Pages/Contact/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/allartists",
    element: <AllArtists />,
  },
  {
    path: "/concerts",
    element: <Concerts />,
  },
  {
    path: "/concertdetail/:id",
    element: <ConcertDetails />,
  },
  {
    path: "cart",
    element: <ShoppingCart />,
  },
  {
    path: "order/:id",
    element: <Order />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
