import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(createRoutesFromElements(routes));

export const routerProvider = <RouterProvider router={router} />;
