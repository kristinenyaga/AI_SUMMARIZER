
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/home";
import Pricing from "../components/pricing/pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/pricing",
    element:<Pricing />
  }
]);
