import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Container from "./pages/Container";
import Feed from "./pages/Feed";
import Settings from "./pages/Settings";
import BuyerProfile from "./pages/BuyerProfile";

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
        path: "/buyer_profile",
        element: <BuyerProfile />,
      },
    ],
  },
]);
