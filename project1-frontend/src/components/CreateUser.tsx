import { User } from "../models/user";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { submitReimbursement } from "../remote/services/reimbursement-service";
import { createUser } from "../remote/services/session-service";
import { Navigate } from "react-router-dom";

interface IUserProps {
    setCurrentUser: (user: User) => void;
    currentUser: User | undefined;
}

export default function SubmitReimbursements(props: IUserProps){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role_id, setId] = useState<Number>();
    console.log('this is the current user ');
    console.log(props.currentUser?.user_id);
   
    let updateName = (e: SyntheticEvent) => {
        setName((e.target as HTMLInputElement).value); 
    }
    let updateEmail = (e: SyntheticEvent) => {
        setEmail((e.target as HTMLInputElement).value); 
    }
    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value); 
    }
    let updateId = (e: any) => {
        setId(Number(e.target.value)); 
    }

    const handleSubmit = async () => {
      // Create the reimbursement object
      const spaghetti_user_id='?user_id='+props.currentUser?.user_id
      const body = {
        name,
        email,
        password,
        role_id
      };
      // Submit the reimbursement request
      await createUser(spaghetti_user_id, body);
    }
    return (
      props.currentUser?.user_id!=1 ?
        <>
            { 
              <Navigate to="/login"/>
            }
        </>
        :
        <> 
        <p>Create a new user!</p>
            <div>
            <input type="text" id="new-user-name" placeholder="Enter the name" onChange={updateName}/>
                <br /><br />
                <input type="text" id="new-user-email" placeholder="Enter the email" onChange={updateEmail}/>
                <br /><br />
                <input type="text" id="new-user-password" placeholder="Enter the password" onChange={updatePassword}/>
                <br /><br />
                <input type="number" id="new-user-id" placeholder="Enter the id" onChange={updateId}/>
                <br /><br />
                <button id="submit-button" onClick={handleSubmit}>Submit</button>                
            </div>
        </>
    );
  }
