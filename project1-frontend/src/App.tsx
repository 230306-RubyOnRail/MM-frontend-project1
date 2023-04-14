import { useState, useEffect, useContext } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { User } from './models/user';
import Nav from './components/Nav';
import Header from './components/Header';
import { Reimbursement } from "./models/reimbursement";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubmitReimbursements from './components/Reimbursements';

function App() {
  const [principal, setPrincipal] = useState<User>();

  // set up an effect on user to fetch reimbursements when user changes

  return (
    <>
    <Header />
      <BrowserRouter>
        <Nav />
      <Routes>
        <Route path="/" element={<Dashboard currentUser={principal} />} />
        <Route path="/login" element={<Login currentUser={principal} setCurrentUser={setPrincipal} />} />
        <Route path="/reimbursements" element={<SubmitReimbursements currentUser={principal} setCurrentUser={setPrincipal} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;