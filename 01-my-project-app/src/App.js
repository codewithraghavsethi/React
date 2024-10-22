import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

let name = "Hello Raghav";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"></TextForm>
      </div>
      <About></About>
      <h1> Hi this is raghav sethi {name} </h1>
    </>
  );
}

export default App;
