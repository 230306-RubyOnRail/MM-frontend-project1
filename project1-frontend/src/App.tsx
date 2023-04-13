import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
//import Child from './components/Child';
import MyContext,{AppContext} from './components/Context';
import { User } from './models/user';
import { Reimbursement } from "./models/reimbursement";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [principal, setPrincipal] = useState<User>();

  const[context ,setContext]=useState({} as AppContext);

  // set up an effect on user to fetch reimbursements when user changes
  useEffect(()=>{}, [context.user])

  const handleUserChange = (user:User) =>{
    setContext((ctx:AppContext) => {
      return {
        ...ctx,
        user: user
      };
    });
    console.log(user)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard currentUser={principal} />} />
        <Route path="/login" element={<Login currentUser={principal} setCurrentUser={setPrincipal} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;