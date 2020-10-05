import React from 'react';
import logo from './logo.svg';
import './App.css';
//Importando os PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <span className="p-float-label">
    <InputText id="in" />
    <label htmlhtmlFor="in">Usuário</label>
</span>

      <Button label="Login" />
      </header>
    </div>
  );
}

export default App;
