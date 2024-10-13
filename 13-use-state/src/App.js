import Button from "react-bootstrap/Button";
import "./App.css";
import { useState } from "react";

function App() {
   
    let [count, setCount] = useState(1);

    let plus = ()=> {
      setCount(count+1);
    }
    let min = () => {
      setCount(count-1);
    }

  return (
    <div className="App">
      <div>
        <Button className="m-2" variant="outline-success" onClick={()=>plus()}>
          Increase the number
        </Button>
      {count}
        <Button className="m-2" variant="outline-danger" onClick={()=>min()}>
          Decrease the number
        </Button>
      </div>
    </div>
  );
}

export default App;
