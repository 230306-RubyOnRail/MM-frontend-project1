import { Navigate } from "react-router-dom";
import { User } from "../models/user";
import {useContext} from "react";
import MyContext from './Context';

interface IDashboardProps {
    currentUser: User | undefined
}

export default function Dashboard(props: IDashboardProps) {
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