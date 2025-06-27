import Collections from "./components/Collections/Collections.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NewProducts from "./components/NewProducts/NewProducts.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <NewProducts />
      <Collections />
      <Footer />
    </div>
  );
}

export default App;
