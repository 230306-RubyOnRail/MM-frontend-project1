import { User } from "../models/user";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { deleteReimbursement, getReimbursement, submitReimbursement } from "../remote/services/reimbursement-service";
import MyContext from './Context';
import { Navigate } from "react-router-dom";

interface IReimbursementsProps {
    setCurrentUser: (user: User) => void;
    currentUser: User | undefined;
}

  export default function DeleteReimbursements(props: IReimbursementsProps){
    const [id, setId] = useState<Number>();

    let updateId = (e: any) => {
      setId(Number(e.target.value));
  }

  const handleDelete = async() => {
    await deleteReimbursement(`http://localhost:3000/reimbursements/${id}`);
  }
  
  return (
    !props.currentUser ?
        <>
            { 
              <Navigate to="/login"/>
            }
        </>
        :
    <>
    
    <p> Delete a reimbursement!</p>
    <div>
      <input type = "number" id = "insert-id" placeholder = "Enter id" onChange={updateId}/>
      <br></br>
      <button id = "delete-button" onClick = {handleDelete}> Delete</button>
    </div>
    </>
  )
  }
  