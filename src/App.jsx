import React from 'react'
import Header from './components/Header.jsx';
import Balance from "./components/Balance.jsx";
import IncomeExpenses from './components/IncomeExpenses.jsx';
import TransactionList from './components/TransactionList.jsx';
import './App.css'
import AddTransation from './components/AddTransation.jsx';
import { globalProvider } from './context/GlobalState.jsx';

const App = () => {
  return <globalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransation />
      </div>
    </globalProvider>;
}

export default App
