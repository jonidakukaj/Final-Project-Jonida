// npm i react-router-dom
// npm i firebase

import React from "react";
// import react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import defined useContext content
import { AuthContextProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Login from "./components/Login";
import Signup from "./components/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import Qualification from "./components/Qualification";
import Search from "./components/Search";
import MemberTwoSub from "./components/MemberTwoSub";
import MemberTwoSub2 from "./components/MemberTwoSub2";

import "./App.css";

function App() {
  return (
    <div>
  
      {/* Provider of useContext hook */}
      <AuthContextProvider>
        <Router>
          {/* Navbar adaptive according login status */}
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/qualification" element={<Qualification />} />
              <Route path="/search" element={<Search />}>
                <Route path="membertwosub" element={<MemberTwoSub />} />
                <Route path="membertwosub2" element={<MemberTwoSub2 />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
