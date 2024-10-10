import "./Card.css";
import ThreeDotMenu from "../assets/icons_FEtask/Img - High Priority.svg";
const Card = ({ data, userName, status }) => {
  console.log("data", data);

  return (
    <>
      <div className="card">
        <div className="card-left">
          <div className="card-title">
            <h3 className="card-cam">{data?.id}</h3>
          </div>
          <div className="card-top">
            <p className="card-description">
              {status === "status" ? (
                <img src={ThreeDotMenu} alt="Menu icon" className="menu-icon" />
              ) : null}

              {/* {" Status"} */}
              {data?.title}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div className="card-network-icon">
              <img src={ThreeDotMenu} alt="Menu icon" className="menu-icon" />
            </div>
            <div className="feature-request">
              <img src={ThreeDotMenu} alt="Menu icon" className="menu-icon" />
              Feature Request
            </div>
          </div>
        </div>
        <div className="card-right">
          {userName !== "userName" ? (
            <>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                style={{ width: "30px", height: "30px" }}
                className="card-cam-avatar"
                alt=""
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Card;
