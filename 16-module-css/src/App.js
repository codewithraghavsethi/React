import logo from './logo.svg';
import './App.css';
import btnModule from "./Button.module.css";

function App() {
  return (
    <div className="App">
       <button className={btnModule.error}>Error</button>
       <button className={btnModule.success}>Success</button>
       <button className={btnModule.warning}>Warning</button>
       <button className={btnModule.love}>Love</button>
       <button className={btnModule.danger}>Danger</button>
       <button className={btnModule.kiss}>Kiss</button>
       <button className={btnModule.papi}>Huge</button>
    </div>
  );
}

export default App;
