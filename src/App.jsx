import MainPage from "./pages/MainPage/MainPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import About from "./pages/AboutPage/About.jsx";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage.jsx";
import AllProducts from "./pages/AllProductsPage/AllProducts.jsx";
import SharedLayout from "./pages/SharedLayout/SharedLayout.jsx";
import Cart from "./pages/Cart/Cart.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/AboutPage" element={<About />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route
            path="/SingleProductPage/:id"
            element={<SingleProductPage />}
          />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
