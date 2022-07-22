import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Doctor } from "./components/doctor";
import Prescription from "./components/doctor/Prescription";
import Search from "./components/doctor/Search";
import Contact from "./components/authentication/contact";
import About from "./components/authentication/about";
import { Patient } from "./components/patients";
import { Adminpanel, Dashboard } from "./components/admin";
import Login from "./components/authentication/login";
import Register from "./components/authentication/register";
import PrivateRoute from "./privateRoute";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/HeaderComponents/Header";
import HeaderAuth from "./components/HeaderComponents/HeaderAuth";
import LogoutHandler from "./components/authentication/logout";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("token"));
  useEffect(() => {
    setAuth(localStorage.getItem("token"));
    console.log("...............", auth);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Prescription" element={<Prescription />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/Patient"
          element={
            <PrivateRoute user={auth}>
              <Patient />
            </PrivateRoute>
          }
        />
        <Route path="/adminPanel" element={<Adminpanel />}></Route>

        <Route path="/login" exact element={<Login />} />
      </Routes>
      <Layout>
        {window.location.pathname !== "/" ? <Header /> : <HeaderAuth />}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogoutHandler />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
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
