import React, {createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ModalBox from "../components/modal";
import { Axios } from "../Axios";
import { login, logout } from "../redux/userSlice";
import { setUnAuthorized } from "../redux/globalSlice";
import { triggerBackgroundAuthentication } from "../Api";
import { UserType } from "../@types/user";

export const globalData = createContext<null>(null);

type contextProp={
    children:React.ReactNode
}

export const GlobalContext = (props:contextProp)=>{

  const unauthorized = useSelector((state: RootState) => state.global.unauthorized );
  const dispatch = useDispatch();
  const [allow,setAllow] = useState(false);


  // auto sets the user if user is not logged out last time
  useEffect(()=>{

    const usr = localStorage.getItem("user") || sessionStorage.getItem("user");

    if(usr){
      const usr2:UserType = JSON.parse(usr);

      triggerBackgroundAuthentication(usr2!.token)
      .then(result=>{

        dispatch( login(JSON.parse(usr)) );
        setAllow(true);
        
      })
      .catch(err=>{
     
      })
      
    }
    else{

      setAllow(true);

    }

  },[]);

    
    return (
      <globalData.Provider value={null}>
        {
          allow &&
          <>
          {props.children}
          </>
        }

        <ModalBox
        open={unauthorized}
        onClose={()=> {} }
        header="Restricted !"
        message={"Login session expired. Please Login again !"} 
        onOk={()=>{
          dispatch( logout() );
          dispatch(setUnAuthorized(false) );
          setAllow(true);
        }}
        />
        
      </globalData.Provider>
    );
}
