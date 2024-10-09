import React from "react";
import Status from "../Components/Status";
import Card from "../Components/Card";
import { Backlog, Cancelled, Done, InProgress, Todo } from "../utils/Svgs";

const Home = ({ statusCounts }) => {
  console.log(statusCounts);
  const { todo, inprogress, backlog, done, cancelled } = statusCounts;
  return (
    <>
      <div className="grid-5" style={{ margin: "0 5rem" }}>
        <div>
          <Status status="Backlog" imgSvg={Backlog} count={backlog} />
          <Card />
          <Card />
        </div>
        <div>
          <Status status="Todo" imgSvg={Todo} count={todo} />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Status status="In Progress" imgSvg={InProgress} count={inprogress} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Status status="Done" imgSvg={Done} count={done} />
        </div>
        <div>
          <Status status="Cancelled" imgSvg={Cancelled} count={cancelled} />
        </div>
      </div>
    </>
  );
};

export default Home;
