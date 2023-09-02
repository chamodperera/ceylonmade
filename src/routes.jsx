import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Container from "./pages/Container";
import Feed from "./pages/Feed";
import Settings from "./pages/Settings";
import AboutItem from "./pages/about-item/AboutItem.jsx";
import BuyerProfile from "./pages/BuyerProfile";
import SellerProfile from "./pages/SellerProfile";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/about_item",
        element: <AboutItem />,
      },
      {
        path: "/buyer_profile",
        element: <BuyerProfile />,
      },
      {
        path: "/seller_profile",
        element: <SellerProfile />,
      },
    ],
  },
]);
