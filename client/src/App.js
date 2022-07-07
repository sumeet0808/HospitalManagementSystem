// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/admin";
import Authentication from "./components/authentication";
import Doctor from "./components/doctor";
import Patients from "./components/patients";

import GetData from "./components/admin/reduxdemo";
import Header from "./Header";
import Adminpanel from "./Adminpanel";
import Dashboard from "./components/admin/Dashboard";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path={"/"} element={<Header />} />

    //     <Route path="/authentication" element={<Authentication />} />
    //     <Route path="/doctor" element={<Doctor />} />
    //     <Route path="/patients" element={<Patients />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      {/* <Header /> */}
      <Adminpanel />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
