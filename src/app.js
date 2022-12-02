import React from 'react';
import './components/NavBar/NavBar.css';

import './components/NavBar/NavBar.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
    let greeting='Bienvenido'
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting={greeting} />
     </div>
    
  );
}

export default App;
