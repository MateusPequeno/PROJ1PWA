import React, { Component } from 'react';
import './App.css';
//Importando os PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import './DataTableDemo.css';

function App() {
  return (
    <div id = "parent">
    <div className="App">
      <header className="App-header">
    <div className="title">
        <h4>MenuApp</h4>
        <p>Espaço do Cliente</p>
    </div>
        <span className="p-float-label">
    <InputText id="in" />
    <label htmlhtmlFor="in">User</label>
</span>
 <span className="p-float-label">
                <div className="card">
                    <Password />
                </div>
</span>
<br></br>
     <Button label="Login"  />
      </header>
    </div>
    </div>
  )
}
export default App;
 
