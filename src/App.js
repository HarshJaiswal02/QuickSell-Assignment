import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

const App = () => {
  const [statusCounts, setStatusCounts] = useState({
    todo: 0,
    inprogress: 0,
    backlog: 0,
    done: 0,
    cancelled: 0,
  });

  const [groupedTickets, setGroupedTickets] = useState({
    todo: [],
    inprogress: [],
    backlog: [],
    done: [],
    cancelled: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await res.json();
        const { tickets } = data;

        const counts = {
          todo: 0,
          inprogress: 0,
          backlog: 0,
          done: 0,
          cancelled: 0,
        };

        const grouped = {
          todo: [],
          inprogress: [],
          backlog: [],
          done: [],
          cancelled: [],
        };

        tickets.forEach((ticket) => {
          const normalizedStatus =
            ticket.status === "In progress"
              ? "inprogress"
              : ticket.status.toLowerCase();

          if (counts.hasOwnProperty(normalizedStatus)) {
            counts[normalizedStatus]++;
            grouped[normalizedStatus].push(ticket);
          }
        });

        setStatusCounts(counts);
        setGroupedTickets(grouped);

        console.log("Ticket counts:", counts);
        console.log("Grouped tickets:", grouped);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
          <Route
            path="/"
            element={
              <Home
                statusCounts={statusCounts}
                groupedTickets={groupedTickets}
              />
            }
          />
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
