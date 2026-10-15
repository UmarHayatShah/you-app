import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./About"
import Contant from "./Contant"
import User from "./User"
import Home from "./Home"
import "./App.css"
import { CiHome } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { FaUsers } from "react-icons/fa";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar
          navbar-expand-lg navbar-dark bg-primry">
          <div className="container-fluid d-flex-column align-item-start">
            <div className="vis fw-bold fs-3 text-warning mb-2
          ">Bright Vision</div>

            <Link to="/" >
              <CiHome size={30} /> Home

            </Link>
            <Link to="/About" >
              <FcAbout size={30} />
              About</Link>
            <Link to="/Contant" >
              <IoMdContact size={30} />
              Conatant</Link>
            <Link to="/User" >
              <FaUsers size={30} />
              User</Link>
            <button>Personal Logo</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contant" element={<Contant />} />
          <Route path="User" element={<User />} />

        </Routes>
      </BrowserRouter>

    </>
  )
} export default App
