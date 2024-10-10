import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  let obj = {
    name1 : "Ram",
    name2 : "Ratan", 
    name3 : "Raju",
    name4 : "Ravi"
  }
  return (
    <div className="App">
      <Header name="Raghav" phone="9988997788" go={obj}>
        <h1>Child Components</h1>
      </Header>
    </div>
  );
}

export default App;
