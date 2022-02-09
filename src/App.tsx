import React from 'react';
import "./styles/Header.css";
import "./styles/Menu.css";
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MenuList></MenuList>
    </div>
  );
}

export default App;
