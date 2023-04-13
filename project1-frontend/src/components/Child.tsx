import React, { useContext } from "react";
import MyContext from "./Context";
export interface;

function Child({setCurrentUser}){
    const state = useContext(MyContext);
    return(
        <div>
            <button onClick=>setCurrentUser({name:'timmy'})Login</button>
        </div>
    )
}

export defualt Child;