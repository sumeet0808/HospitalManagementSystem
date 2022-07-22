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
import Layout from "./components/Layout";
import HeaderAuth from "./components/HeaderComponents/HeaderAuth";
import LogoutHandler from "./components/authentication/logout";
import Header from "./components/HeaderComponents/Header";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {window.location.pathname !== "/" ? <Header /> : <HeaderAuth />}
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/" element={<Register />} />

          <Route path="/Doctor" element={<Doctor />} />
          <Route path="/Prescription" element={<Prescription />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Patient" element={<Patient />} />
          <Route path="/adminPanel" element={<Adminpanel />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
