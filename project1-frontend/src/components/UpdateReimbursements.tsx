import { User } from "../models/user";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { updateReimbursement } from "../remote/services/reimbursement-service";
import { Navigate } from "react-router-dom";

interface IReimbursementsProps {
    setCurrentUser: (user: User) => void;
    currentUser: User | undefined;
}

export default function UpdateReimbursement(props: IReimbursementsProps){
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState<Number>();
    const [id, setId] = useState<Number>();
    const [status] = useState('pending');
    const user_id = props.currentUser?.user_id
    console.log('this is the current user ');
    console.log(props.currentUser?.user_id);
   
    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value); 
    }
    let updateId = (e: any) => {
        setId(Number(e.target.value)); 
    }
    let updateAmount = (e: any) => {
        setAmount(Number(e.target.value)); 
    }
    
    const handleUpdate = async () => {
        const spaghetti_user_id='?id='+props.currentUser?.user_id
        const body = {
            description,
            status,
            amount,
            user_id
          };
      await updateReimbursement(id, spaghetti_user_id, body);
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
        <p>Update a reimbursement!</p>
            <div>
                <input type="number" id="update-id" placeholder="Enter the id" onChange={updateId}/>
                <br /><br />
                <input type="text" id="update-description" placeholder="Enter the description" onChange={updateDescription}/>
                <br /><br />
                <input type="number" id="update-amount" placeholder="Enter the amount" onChange={updateAmount}/>
                <br /><br />
                <button id="submit-button" onClick={handleUpdate}>Submit</button>                
            </div>
        </>
    );
  }
