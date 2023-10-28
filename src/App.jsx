import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Sell from "./pages/Sell";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/produk" element={<Product />} />
      <Route path="/jual" element={<Sell />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
