import { createBrowserRouter } from "react-router-dom";
import Article from "../pages/Article";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/article/:articleId",
    element: <Article />,
  },
]);