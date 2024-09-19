import React from 'react';
import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {

  return (
    <div className="App">
      <Item name="Mac Book" price="1,00,000"/>
      <Item name="Asus Tuff F15" price="53,000"/>
      <Item name="I Phone" price="60,000"/>
      <Item name="Samsung a04e" price="50,000"/>
      <Cart />
    </div>
  );
}

export default App;
