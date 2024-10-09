import { Add, ThreeDotMenu, UrgentPriority } from "../utils/Svgs";

const Status = ({ status, imgSvg }) => {
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
          <img src={imgSvg} alt="" />
          <span style={{ fontWeight: "bolder" }}>{status}</span>
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
