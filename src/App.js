import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import ContactsPage from "./components/ContactsPage";
import MenuPage from "./components/MenuPage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="w-100 h-100" style={{ backgroundColor: "#F8FAFB" }}>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index path="home" element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="category" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
