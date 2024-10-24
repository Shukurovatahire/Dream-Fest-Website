import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  
import { I18nextProvider } from "react-i18next";
import React, { Suspense } from "react";
import i18n from "./i18n";

// Bileşenleri dinamik olarak ithal edelim
const AllArtists = React.lazy(() => import("./Pages/AllArtists/AllArtists"));
const Concerts = React.lazy(() => import("./Pages/Concerts/Concerts"));
const ConcertDetails = React.lazy(() => import("./Pages/ConcertDetails/ConcertDetails"));
const ShoppingCart = React.lazy(() => import("./Pages/ShoppingCart/ShoppingCart"));
const Order = React.lazy(() => import("./Pages/Order/Order"));
const Payment = React.lazy(() => import("./Pages/Payment/Payment"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/allartists",
    element: <Suspense fallback={<div>Loading...</div>}><AllArtists /></Suspense>,
  },
  {
    path: "/concerts",
    element: <Suspense fallback={<div>Loading...</div>}><Concerts /></Suspense>,
  },
  {
    path: "/concertdetail/:id",
    element: <Suspense fallback={<div>Loading...</div>}><ConcertDetails /></Suspense>,
  },
  {
    path: "/cart",
    element: <Suspense fallback={<div>Loading...</div>}><ShoppingCart /></Suspense>,
  },
  {
    path: "/order/:id",
    element: <Suspense fallback={<div>Loading...</div>}><Order /></Suspense>,
  },
  {
    path: "/payment",
    element: <Suspense fallback={<div>Loading...</div>}><Payment /></Suspense>,
  },
  {
    path: "/contact",
    element: <Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>,
  },
  {
    path: "/login",
    element: <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>,
  },
  {
    path: "/profile/:id",
    element: <Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
    </I18nextProvider>
  </Provider>
);
