import { Add, ThreeDotMenu } from "../utils/Svgs";

const Status = ({ status, imgSvg, count, user }) => {
  console.log(count);
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
          {user === "user" ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              style={{ width: "30px", height: "30px" }}
              className="card-cam-avatar"
              alt=""
            />
          ) : (
            <img src={imgSvg} alt="" />
          )}
          <span style={{ fontWeight: "bolder" }}>{status}</span>
          <span>{count}</span>
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
