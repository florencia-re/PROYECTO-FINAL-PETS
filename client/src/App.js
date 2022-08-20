import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage";
import UserDetail from "./components/Details/UserDetail";
import PetDetail from "./components/Details/PetDetail";
import Register from "./components/Register";
import PetRegister from "./components/PetRegister";
import UpdateUser from "./components/Update/UpdateDataUsers";
import Error404 from "./components/Error404/Error404";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/users/:id"} element={<UserDetail />} />
        <Route path={"/pet/:id"} element={<PetDetail />}/>
        <Route path={"/about"} element={<About />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/petregister"} element={<PetRegister />} />
        <Route path={"/updateuser"} element={<UpdateUser/>}/>
        <Route path={"*"} element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
