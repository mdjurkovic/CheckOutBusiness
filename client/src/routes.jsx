import { Route } from "react-router-dom";
import { Discounts, Error, Login } from "./components";
import "./App.css";

export const routes = (
  <Route errorElement={<Error />}>
    <Route path="/" element={<Login />} />
    <Route path="discounts" element={<Discounts />} />
  </Route>
);
