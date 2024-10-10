import "./Card.css";
import ThreeDotMenu from "../assets/icons_FEtask/Img - High Priority.svg";
import { getStatus } from "../utils/status";
import { Dot, InProgress, LowPriority } from "../utils/Svgs";
const Card = ({ data, userName, status }) => {
  console.log("data", data);

  console.log("status", status);

  return (
    <>
      <div className="card">
        <div className="card-left">
          <div className="card-title">
            <h3 className="card-cam">{data?.id}</h3>
          </div>
          <div className="card-top">
            <p className="card-description">
              {status && (
                <img src={getStatus()} alt="Menu icon" className="menu-icon" />
              )}{" "}
              {/* {" Status"} */}
              {data?.title}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div className="card-network-icon">
              <img src={LowPriority} alt="Menu icon" className="menu-icon" />
            </div>
            <div className="feature-request">
              <img src={Dot} alt="Menu icon" className="menu-icon" />
              Feature Request
            </div>
          </div>
        </div>
        <div className="card-right">
          {!status && (
            <>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                style={{ width: "30px", height: "30px" }}
                className="card-cam-avatar"
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
