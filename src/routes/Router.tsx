import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";
import { Success } from "../pages/Success";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
};
