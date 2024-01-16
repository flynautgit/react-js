import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

type props = {
    children:React.ReactNode
}
const AuthenticatedLayout = ({children}:props)=>{

    const user = useSelector((state: RootState) => state.user.user );
    const navigator = useNavigate();

    const [allowView,setAllowView] = useState(false);

    useEffect(()=>{
        if(!user){
            navigator("/");
        }
        else{
            setAllowView(true);
        }
    },[user])

    return(
        <>
        {
            allowView &&
            <>
            {children}
            </>
        }
        </>
    )
}

export default AuthenticatedLayout;