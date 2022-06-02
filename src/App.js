import React, { Suspense } from 'react';
import './App.css';
import { fetchData } from './Api';
import Fetch_api from './Fetch_api';
import Async from './Async';

const resource = fetchData();

function Name(){
  const name = resource.name.read();
  return <h2>{name}</h2>
}

function Address(){
  const address = resource.address.read();
  return <h2>{address}</h2>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<h2>Loading...</h2>}>
        <Name></Name>
        <Address></Address>
        <Async></Async>
        </Suspense>
      </header>  
    </div>
  );
}

export default App;
