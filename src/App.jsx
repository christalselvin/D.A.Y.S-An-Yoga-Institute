import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Home/components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import JobApply from "./pages/Career/components/JobApply";
import Login from "./pages/UI/Login";
import Register from "./pages/UI/Register";
import Demo from "./pages/Demo";
import Chatbot from "./pages/Home/components/Chatbot";
import Form from "./pages/Home/components/Form";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/career"
          element={
            <>
              <Navbar />

             
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/job_apply"
          element={
            <>
              <Navbar />
              <JobApply />
            </>
          }
        />
        <Route
          path="/demo"
          element={
            <>
              <Navbar />
              <Demo />
            </>
          }
        />
        <Route
          path="/form"
          element={
            <>
              <Navbar />
              <Form />
            </>
          }
        />
        <Route
          path="/chat"
          element={
            <>
              <Navbar />
              <Chatbot />
            </>
          }
        />
      </Routes>
    </Router>
  );
}