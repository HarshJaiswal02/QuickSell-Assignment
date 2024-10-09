import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );

      const data = await res.json();
      console.log(data);
      const { tickets, users } = data;
      console.log(tickets);
      console.log(users);
    };
    getData();

    return () => {
      console.log("Unmounted");
    };
  }, []);
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/priority" element={<Status />} />
          <Route path="/names" element={<Status />} />
          <Route path="/sort/priority" element={<Status />} />
          <Route path="/sort/title" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
