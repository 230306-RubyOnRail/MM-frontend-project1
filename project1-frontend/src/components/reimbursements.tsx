import { User } from "../models/user";
import { useEffect, useState } from "react";
import { getReimbursement } from "../remote/services/reimbursement-service";
import currentUser from "./Login"

interface IReimbursementsProps {
    currentUser: User | undefined
}

export default function Reimbursements(props:IReimbursementsProps){
const [reimbursements, setReimbursement] = useState();

useEffect(() => {   
return function () {

}
}, []);

}


