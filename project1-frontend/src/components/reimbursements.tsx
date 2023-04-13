import { User } from "../models/user";
import { useEffect, useState } from "react";
import { getReimbursement } from "../remote/services/reimbursement-service";
import currentUser from "./Login"

interface IReimbursementProps {
    currentUser: User | undefined
}

export default function Reimbursements(props:IReimbursementProps){
const [reimbursements, setReimbursement] = useState();

useEffect(() => {
getReimbursements();    
return function () {

}
}, []);

let getReimbursements = async () => {
    if(props.currentUser) {
        let response = await getReimbursements(props.currentUser.id)
    }
    if (Response.status === 200){
        setReimbursement(Response.data);

    }
}

}


