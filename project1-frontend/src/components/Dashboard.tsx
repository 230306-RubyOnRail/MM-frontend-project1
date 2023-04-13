import { Navigate } from "react-router-dom";
import { User } from "../models/user";
import {useContext} from "react";
import MyContext from './Context';

interface IDashboardProps {
    setCurrentUser: (user: any) => void
}

export default function Dashboard({setCurrentUser}: IDashboardProps) {
    const { user } = useContext(MyContext);
    return (
        user?
            <>
                Hello {user?.name} from Dashboard!
            </>
            :
            <>
                <Navigate to="/login" />
            </>
    );
}