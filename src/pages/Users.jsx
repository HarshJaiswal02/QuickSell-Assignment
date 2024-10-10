import React from "react";
import Status from "../Components/Status";
import Card from "../Components/Card";
import { Backlog } from "../utils/Svgs";

const Users = ({ userTicketMap, usersCount }) => {
  console.log(usersCount);
  console.log(userTicketMap);

  return (
    <>
      <div className={`grid-5`} style={{ margin: "0 5rem" }}>
        {Object.entries(userTicketMap).map(([userId, tickets], index) => (
          <div key={index}>
            <Status
              status="Name"
              imgSvg={Backlog}
              count={tickets.length}
              user="user"
            />
            {tickets.map((ticket) => (
              <Card key={ticket.id} data={ticket} user="user" />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
