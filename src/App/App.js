import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
