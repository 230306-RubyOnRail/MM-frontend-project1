import { User } from "../models/user";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { deleteReimbursement} from "../remote/services/reimbursement-service";
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
    console.log("this is the id "+ id)
    const user_id = '/?user_id='+props.currentUser?.user_id
    await deleteReimbursement(id,user_id);
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
  