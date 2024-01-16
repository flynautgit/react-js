import { Axios } from "./Axios";

// All of the APIS will be declared over here within a function that return promise.
const triggerBackgroundAuthentication = (token:string)=>{

    return new Promise((resolve,reject)=>{

        Axios.post(`/api/v1/background-authentication`,{},{
            headers:{
              Authorization:token
            }
          })
          .then(result=>{

            resolve("");
            
          })
          .catch(err=>{
            reject(err);
          })
    });
    
}


export {
    triggerBackgroundAuthentication
};