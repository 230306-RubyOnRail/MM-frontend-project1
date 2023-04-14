import { User } from "../models/user";
import React from 'react';
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { getReimbursement, getAllReimbursement } from "../remote/services/reimbursement-service";
import { Navigate } from "react-router-dom";
import { Reimbursement } from "../models/reimbursement";

interface IReimbursementsProps {
    setCurrentUser: (user: User) => void;
    currentUser: User | undefined;
}

export default function ShowReimbursement(props: IReimbursementsProps){
    console.log('this is the current user ');
    console.log(props.currentUser?.user_id);

    const handleGet = async () => {
    const spaghetti_user_id='?user_id='+props.currentUser?.user_id
      let display = await getReimbursement(props.currentUser?.user_id,spaghetti_user_id); 
      const data: Array<Reimbursement> = display.data; 
      console.log(data)
      document.body.innerHTML=JSON.stringify(data)
      
    }
    
    const handleGetManager = async () => {
        const spaghetti_user_id='?user_id='+props.currentUser?.user_id
          let display = await getAllReimbursement(spaghetti_user_id); 
          const data: Array<Reimbursement> = display.data; 
          console.log(data)
          document.body.innerHTML=JSON.stringify(data)
          
    }

    return (
      !props.currentUser ?
        <>
            { 
              <Navigate to="/login"/>
            }
        </>
        :
        props.currentUser?.user_id!=1 ?
        <> 
        { 
        <>
            <p>Display your reimbursements!</p>
            <div>
                <button id="submit-button" onClick={handleGet}>Show All Reimbursements</button>
            </div>
            </>
        }
        </>
        :
        <>
        { 
        <>
            <p>Display your reimbursements!</p><div>
                <button id="submit-button" onClick={handleGetManager}>Show Reimbursements</button>
            </div>
            </>
          }
        
        </>
    );
  }
