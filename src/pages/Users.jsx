import React from "react";
import Status from "../Components/Status";
import Card from "../Components/Card";
import { Backlog, Cancelled, Done, InProgress, Todo } from "../utils/Svgs";

const Users = ({ userTicketMap, usersCount }) => {
  console.log(usersCount);
  const arrayOfUsers = Array(usersCount).fill(null);

  return (
    <>
      <div className={`grid-${usersCount}`} style={{ margin: "0 5rem" }}>
        {arrayOfUsers.map((_, index) => (
          <div key={index}>
            Random
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
