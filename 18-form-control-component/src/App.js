import "./App.css";
import { useState } from "react";

function App() {
  let [uname, setUname] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(uname, password);
  };

  // let getUname = (event) => {      ------>>  use single line function arrow function
  //   setUname(event.target.value);  ------>>  onChange={(event)=>setUname(event.target.value)}
  // };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="text-start my-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={uname}
                  onChange={(event) => setUname(event.target.value)}
                />
              </div>

              <div className="text-start my-3">
                <label>Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={uname}
                  onChange={(event) => setUname(event.target.value)}
                />
              </div>

              <div className="text-start my-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={uname}
                  onChange={(event) => setUname(event.target.value)}
                />
              </div>

              <div className="text-start my-3">
                <label>Contact</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="text-start my-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="text-start my-3">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="text-start my-3">
                <label>State</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="text-start my-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="text-start my-3">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="text-start my-3 ">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
