import { User } from "../models/user";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { getReimbursement } from "../remote/services/reimbursement-service";
import axios from 'axios';
import MyContext from './Context';

interface IReimbursementsProps {
    setCurrentUser: (user: any) => void;
}

export function SubmitReimbursements({setCurrentUser}: IReimbursementsProps){
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [status] = useState('pending');
    const { user } = useContext(MyContext);
  
    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value); 
    }
    let updateAmount = (e: SyntheticEvent) => {
        setAmount(Number(e.target as HTMLInputElement).valueOf); 
    }

    const handleSubmit = async () => {
      // Create the reimbursement object
      const reimbursement = {
        description,
        status,
        amount,
        user_id: user.id
      };
  
      // Submit the reimbursement request
      await axios.post('/reimbursements', reimbursement);
    };
  
    return (
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

  export default function DeleteReimbursement({setCurrentUser}: IReimbursementsProps) {
    const [id, setId] = useState(0);
    const { reimbursements } = useContext(MyContext);
    const { user } = useContext(MyContext);
  
    let updateId = (e: SyntheticEvent) => {
        setId(Number(e.target as HTMLInputElement).valueOf); 
    }

    const handleDelete = async () => {
      // Find the reimbursement from the current user's reimbursements
      const reimbursement = reimbursements.find(
        (reimbursement) => reimbursement.id === id
      );
  
      if (reimbursement) {
        // Delete the reimbursement
        await axios.delete(`/reimbursements/${id}/?user_id=${user.id}`);
      }
    };
  
    return (
        <>
            <p>Delete a reimbursement!</p>
            <div>
                <input type="number" id="delete-reimbursement" placeholder="Enter the id of the reimbursement you want to delete" onChange={updateId}/>
                <br /><br />
                <button onClick={handleDelete}>Delete Reimbursement</button>;             
            </div>
        </>
    );
  }
