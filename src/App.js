import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="grid-5" style={{ margin: "0 5rem" }}>
        <div>
          <Status />
          <Card />
          <Card />
        </div>
        <div>
          <Status />
          <Card />
        </div>
        <div>
          <Status />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Status />
          <Card />
        </div>
        <div>
          <Status />
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

export default App;
