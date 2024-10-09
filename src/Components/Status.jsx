import Add from "../assets/icons_FEtask/add.svg";
import ThreeDotMenu from "../assets/icons_FEtask/3 dot menu.svg";
import Backlog from "../assets/icons_FEtask/Backlog.svg";
const Status = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 0.5rem",
          margin: "1rem",
          maxWidth: "19rem",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "0.7rem" }}>
          <img src={Backlog} alt="" />
          <span style={{ fontWeight: "bolder" }}> Todo</span>
          <span>3</span>
        </div>
        <div style={{ display: "flex", gap: "0.7rem" }}>
          <img src={Add} alt="" />
          <img src={ThreeDotMenu} alt="" />
        </div>
      </div>
    </>
  );
};

export default Status;
