import logo from "./logo.svg";
import "./App.css";

function App() {
  let obj = {
    name: "Raghav",
    lastName: "Sethi",
    fullName: "Raghav Sethi",
    age: 24,
    location: "Moradabad",
  };
  return (
    <div className="App">
      <div>{obj.fullName}</div>
      <div>{10 + 3}</div>
    </div>
  );
}

export default App;
