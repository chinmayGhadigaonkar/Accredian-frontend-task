import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navabr";
// import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

import Toast from "./components/common/Toast";
import Footer from "./components/common/Footer";

function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     toast.success("Welcome to the website")
  //   }, 1000)


  // },[])
  return (
    <div>
      <BrowserRouter>
       <Toast/>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
