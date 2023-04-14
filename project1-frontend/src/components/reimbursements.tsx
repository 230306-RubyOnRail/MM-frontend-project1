import { User } from "../models/user";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { getReimbursement, submitReimbursement } from "../remote/services/reimbursement-service";
import MyContext from './Context';
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

  // export function DeleteReimbursement(props: IReimbursementsProps) {
  //   const [id, setId] = useState(0);
  //   const { reimbursements } = useContext(MyContext);
  
  //   let updateId = (e: SyntheticEvent) => {
  //       setId(Number(e.target as HTMLInputElement).valueOf); 
  //   }

  //   const handleDelete = async () => {
  //     // Find the reimbursement from the current user's reimbursements
  //     const reimbursement = reimbursements.find(
  //       (reimbursement) => reimbursement.id === id
  //     );
  
  //     if (reimbursement) {
  //       // Delete the reimbursement
  //       await submitReimbursement(`http://localhost:3000/reimbursements/${id}/?user_id=${props.currentUser?.id}`);
  //     }
  //   };
  
  //   return (
  //       <>
  //           <p>Delete a reimbursement!</p>
  //           <div>
  //               <input type="number" id="delete-reimbursement" placeholder="Enter the id of the reimbursement you want to delete" onChange={updateId}/>
  //               <br /><br />
  //               <button onClick={handleDelete}>Delete Reimbursement</button>;             
  //           </div>
  //       </>
  //   );
  // }
