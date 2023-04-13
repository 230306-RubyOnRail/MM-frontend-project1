import React, {createContext} from 'react';
import { User } from "../models/user";

export interface Reimbursement{
    id: number,
    description: string,
    type: string,
    amount: number,
    status:string,
    created_at: Date,
    updated_at: Date
}

export interface AppContext{
    user: User;
    reimbursements: Array<Reimbursement>;
    last_fetch: Date;
}

const MyContext = createContext({} as AppContext);
export default MyContext;

