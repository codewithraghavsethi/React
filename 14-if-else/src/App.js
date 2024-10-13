import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let template = "";

  let [pshow, setPshow] = useState(false);

  if (pshow) {
    template = (
      <>
        <button
          className="text-lime-400 bg-black border-2 w-20 h-10 font-bold text-xl"
          onClick={() => setPshow(!pshow)}
        >
          Hide
        </button>
        <h1 className="text-3xl">
          Hello Raghav Sethi <br /> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Culpa labore aliquam a ducimus illo. Quos, eveniet
          alias aspernatur nobis voluptatibus maiores nihil architecto ab ad,
          deleniti error, a nam voluptatem. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Possimus officiis voluptates sit optio
          reprehenderit. Fugit itaque ipsum error voluptas, corporis blanditiis,
          beatae incidunt repudiandae provident laudantium neque voluptatem
          porro nisi?
        </h1>
      </>
    );
  } else {
    template = (
      <>
        <button
          className="text-rose-400 bg-black border-2 w-20 h-10 font-bold text-xl"
          onClick={() => setPshow(!pshow)}
        >
          Show
        </button>
        <Card/>
      </>
    );
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>{template}</div>
    </div>
  );
}

export default App;

let Card = () => {
  return (
    <div>
      <h1>Thank You For Coming!</h1>
    </div>
  );
};
