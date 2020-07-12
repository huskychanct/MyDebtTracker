import React from 'react';
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {PaymentsExpenses} from './Components/PaymentsExpenses'
import {PaymentsList} from './Components/PaymentsList'
import {AddPayment} from './Components/AddPayment'
import {GlobaProvider, GlobalProvider} from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <div className="container">
        {/* <Balance/> */}
        <PaymentsExpenses/>
        <PaymentsList/>
        <AddPayment/>
      </div>
    </GlobalProvider>
  );
}

export default App;