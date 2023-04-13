import { SyntheticEvent, useState } from "react";
import { User } from "../models/user";
import { Navigate } from "react-router-dom";
import {authenticate} from "../remote/services/session-service";
import React, { useContext } from "react";
import MyContext, { AppContext } from "./Context";


export default function Login(setCurrentUser: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // useState => [value, setter]; 
    const state: AppContext = useContext(MyContext);
    
    let updateEmail = (e: SyntheticEvent) => {
        setEmail((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
        // console.log(`email is: ${email}`);
    }
    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
    }

    let login = async () => {
        if(email && password){
            setErrorMessage('');
            try{
                let response = await authenticate({email, password});

                if(response.status === 201){
                    let data: User = response.data;
                    setCurrentUser({data});
                    sessionStorage.setItem('token', data.token);
                } else {
                    setErrorMessage('Credentials invalid.');
                }
            } catch (err){
               setErrorMessage('Unable to connect to the API');
            }
        } else {
           setErrorMessage('Invalid input for email/password.');
        }
    }

    return (
        <>
            <p>Login to the reimbursements app!</p>
            <div>
                <input type="text" id="login-email" placeholder="Enter your email" onChange={updateEmail}/>
                <br /><br />
                <input type="text" id="login-password" placeholder="Enter your password" onChange={(e) => {
                    //updatePassword(e.target.value);
                    }}/>
                <br /><br />
                <button id="login-button" onClick={login}>Login</button>                
            </div>
            <div>
                {errorMessage}
            </div>
        </>
    );
                }
