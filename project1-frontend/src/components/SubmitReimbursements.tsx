import { User } from "../models/user";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { submitReimbursement } from "../remote/services/reimbursement-service";
import { Navigate } from "react-router-dom";

interface IReimbursementsProps {
    setCurrentUser: (user: User) => void;
    currentUser: User | undefined;
}

export default function SubmitReimbursements(props: IReimbursementsProps){
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState<Number>();
    const [status] = useState('pending');
    const user_id = props.currentUser?.user_id
    console.log('this is the current user ');
    console.log(props.currentUser?.user_id);
   
    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value); 
    }
    let updateAmount = (e: any) => {
        setAmount(Number(e.target.value)); 
    }

    const handleSubmit = async () => {
      // Create the reimbursement object
      const body = {
        description,
        status,
        amount,
        user_id
      };
      // Submit the reimbursement request
      await submitReimbursement(`http://localhost:3000/reimbursements`, body);
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
        <p>Submit a reimbursement!</p>
            <div>
                <input type="text" id="submit-description" placeholder="Enter the description" onChange={updateDescription}/>
                <br /><br />
                <input type="number" id="submit-amount" placeholder="Enter the amount" onChange={updateAmount}/>
                <br /><br />
                <button id="submit-button" onClick={handleSubmit}>Submit</button>                
            </div>
        </>
    );
  }
