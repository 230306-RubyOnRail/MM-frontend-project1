import { useState, useEffect, useContext } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { User } from './models/user';
import Nav from './components/Nav';
import Header from './components/Header';
import { Reimbursement } from "./models/reimbursement";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubmitReimbursements from './components/SubmitReimbursements';
import DeleteReimbursements from './components/DeleteReimbursements';
import UpdateReimbursements from './components/UpdateReimbursements';
import ShowReimbursements from './components/ShowReimbursements';
import CreateUser from './components/CreateUser';

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
        <Route path="/createuser" element={<CreateUser currentUser={principal} setCurrentUser={setPrincipal} />} />
        <Route path="/show" element={<ShowReimbursements currentUser={principal} setCurrentUser={setPrincipal} />} />
        <Route path="/submit" element={<SubmitReimbursements currentUser={principal} setCurrentUser={setPrincipal} />} />
        <Route path="/update" element={<UpdateReimbursements currentUser={principal} setCurrentUser={setPrincipal} />} />
        <Route path="/delete" element={<DeleteReimbursements currentUser={principal} setCurrentUser={setPrincipal} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;