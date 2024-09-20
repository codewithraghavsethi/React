import React from 'react';
import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {

  return (
    <div className="App">
      <Item name="Mac Book" price={100000}/>
      <Item name="Asus Tuff F15" price={53000}/>
      <Item name="I Phone" price={60000}/>
      <Item name="Samsung a04e" price={10000}/>
      <Cart />
    </div>
  );
}

export default App;
