import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Doctor } from "./components/doctor";
import Prescription from "./components/doctor/Prescription";
import Search from "./components/doctor/Search";
import Contact from "./components/authentication/contact";
import About from "./components/authentication/about";
import { Patient } from "./components/patients";
import { Adminpanel } from "./components/admin";
import Login from "./components/authentication/login";
import Register from "./components/authentication/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Prescription" element={<Prescription />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/Adminpanel" element={<Adminpanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
