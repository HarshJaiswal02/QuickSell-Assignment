import React from "react";
import Status from "../Components/Status";
import Card from "../Components/Card";
import { Backlog, Cancelled, Done, InProgress, Todo } from "../utils/Svgs";

const Home = () => {
  return (
    <>
      <div className="grid-5" style={{ margin: "0 5rem" }}>
        <div>
          <Status status="Backlog" imgSvg={Backlog} />
          <Card />
          <Card />
        </div>
        <div>
          <Status status="Todo" imgSvg={Todo} />
          <Card />
        </div>
        <div>
          <Status status="In Progress" imgSvg={InProgress} />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Status status="Done" imgSvg={Done} />
          <Card />
        </div>
        <div>
          <Status status="Cancelled" imgSvg={Cancelled} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
