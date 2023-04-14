import React, {createContext} from 'react';
import { User } from "../models/user";
import { Reimbursement } from "../models/reimbursement";

export interface AppContext{
    user: User;
    reimbursements: Array<Reimbursement>;
}

const MyContext = createContext({} as AppContext);
export default MyContext;

