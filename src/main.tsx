import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import React, { lazy, Suspense } from "react";
import i18n from "./i18n";

// Lazy load for large components
const AllArtists = lazy(() => import("./Pages/AllArtists/AllArtists"));
const Concerts = lazy(() => import("./Pages/Concerts/Concerts"));
const ConcertDetails = lazy(() => import("./Pages/ConcertDetails/ConcertDetails"));
const ShoppingCart = lazy(() => import("./Pages/ShoppingCart/ShoppingCart"));
const Order = lazy(() => import("./Pages/Order/Order"));
const Payment = lazy(() => import("./Pages/Payment/Payment"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/allartists",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AllArtists />
      </Suspense>
    ),
  },
  {
    path: "/concerts",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Concerts />
      </Suspense>
    ),
  },
  {
    path: "/concertdetail/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ConcertDetails />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ShoppingCart />
      </Suspense>
    ),
  },
  {
    path: "/order/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Order />
      </Suspense>
    ),
  },
  {
    path: "/payment",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Payment />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/profile/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </Provider>
);
