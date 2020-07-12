import React from 'react';
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {PaymentsExpenses} from './Components/PaymentsExpenses'

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        {/* <Balance/> */}
        <PaymentsExpenses/>
      </div>
    </div>
  );
}

export default App;