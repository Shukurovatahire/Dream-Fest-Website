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
import AllArtists from "./Pages/AllArtists/AllArtists";
import Concerts from "./Pages/Concerts/Concerts";
import ConcertDetails from "./Pages/ConcertDetails/ConcertDetails";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Order from "./Pages/Order/Order";
import Payment from "./Pages/Payment/Payment";
import Contact from "./Pages/Contact/Contact";
import { I18nextProvider } from "react-i18next";
import React from "react";
import i18n from "./i18n";

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
    <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
    </I18nextProvider>
  </Provider>
);
