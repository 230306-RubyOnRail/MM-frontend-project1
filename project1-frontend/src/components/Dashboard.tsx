import { Navigate } from "react-router-dom";
import { User } from "../models/user";

interface IDashboardProps {
    currentUser: User | undefined
}

export default function Dashboard(props: IDashboardProps) {
    return (
        <>
            <br></br>
            <h3>Hello and welcome to the reimbursement app!</h3>
        </>

    );
}