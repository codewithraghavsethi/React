import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

function App() {
  let headerInfo = {name : "Raghav",
    name2: "Ram",
    name3: "Raju",
    name4: "Radhika",
    name5: "Radha",
    name6: "Rani"}
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header email="raghavsethi@gmail.com" phone="+91 9897969594" Pinfo = {headerInfo}/>
    </div>
  );
}

export default App;
