import MainPage from "./components/MainPage/MainPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import About from "./components/AboutPage/About.jsx";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage.jsx";
import AllProducts from "./components/AllProductsPage/AllProducts.jsx";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import CategoryPage from "./components/CategoryPage/CategoryPage.jsx";
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
          <Route path="/CategoryPage/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
