import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Priority from "./pages/Priority";

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

  const [priorityCounts, setPriorityCounts] = useState({
    urgent: 0,
    high: 0,
    medium: 0,
    low: 0,
    noPriority: 0,
  });

  const [groupedTicketsByPriority, setGroupedTicketsByPriority] = useState({
    urgent: [],
    high: [],
    medium: [],
    low: [],
    noPriority: [],
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

        const groupedPriority = {
          urgent: [],
          high: [],
          medium: [],
          low: [],
          noPriority: [],
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

          switch (ticket.priority) {
            case 4:
              priorityCounts.urgent++;
              groupedPriority.urgent.push(ticket);
              break;
            case 3:
              priorityCounts.high++;
              groupedPriority.high.push(ticket);
              break;
            case 2:
              priorityCounts.medium++;
              groupedPriority.medium.push(ticket);
              break;
            case 1:
              priorityCounts.low++;
              groupedPriority.low.push(ticket);
              break;
            case 0:
              priorityCounts.noPriority++;
              groupedPriority.noPriority.push(ticket);
              break;
            default:
              break;
          }
        });

        setStatusCounts(counts);
        setGroupedTickets(grouped);
        setPriorityCounts(priorityCounts);
        setGroupedTicketsByPriority(groupedPriority);

        console.log("Ticket counts:", counts);
        console.log("Grouped tickets:", grouped);
        console.log("Priority counts:", priorityCounts);
        console.log("Grouped tickets by priority:", groupedPriority);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();

    return () => {
      console.log("Unmounted");
    };
  }, [priorityCounts]);
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
          <Route
            path="/priority"
            element={
              <Priority
                priorityCounts={priorityCounts}
                groupedTicketsByPriority={groupedTicketsByPriority}
              />
            }
          />
          <Route path="/names" element={<Status />} />
          <Route path="/sort/priority" element={<Status />} />
          <Route path="/sort/title" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
