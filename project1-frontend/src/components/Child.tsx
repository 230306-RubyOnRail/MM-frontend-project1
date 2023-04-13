import React, { useContext } from "react";
import MyContext, { AppContext } from "./Context";

function Child({setCurrentUser}){
    const state: AppContext = useContext(MyContext);
    return(
        <div>
            <button onClick = {() => setCurrentUser({name:'timmy'})}>Login</button>
        </div>
    );
}

export default Child;