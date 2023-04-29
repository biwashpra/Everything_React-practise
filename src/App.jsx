import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./route-pages/Home";
import { About } from "./route-pages/About";
import { Contact } from "./route-pages/Contact";
import Navbar from "./route-pages/Navbar";

export const AppContext = createContext();

const Routing = () => {
  const [username, setUsername] = useState("Muskan");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          {/* <nav>
            NAVBAR
            <br />
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
          </nav> */}
          <Routes>
            {/* <Route path="/" element={<Home username={username} />} /> */}
            <Route path="/" element={<Home />} />
            {/* <Route
              path="/menu"
              element={<About username={username} setUsername={setUsername} />}
            /> */}
            <Route path="/menu" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default Routing;
// time: 3:32 hour
