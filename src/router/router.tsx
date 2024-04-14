import { createBrowserRouter } from "react-router-dom";
import Login from "../App";
import { Header } from "../pages/header/header";
import { Favorites } from "../pages/favorites/favorites";
import { SeeAll } from "../pages/See all/seeAll";
import { Search } from "../pages/search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Header />,
    children: [
      {
        path: "seeAll",
        element: <SeeAll />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
