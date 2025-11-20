import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import PlantDetails from "./pages/PlantDetails";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="min-h-screen bg-green-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:id" element={<PlantDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
