import axios from "axios";
import { API_URL } from "./config";
import { store } from "./redux/store";
import { setAlreadySigned, setUnAuthorized } from "./redux/globalSlice";

// import this axios for API call.
export const Axios = axios.create({
    baseURL: API_URL
  });
  

  Axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  Axios.interceptors.response.use(
    function (response) {

      return response;
    },
    function (error) {

        if(error.response){
          if(error.response.status === 403){
            if(error.response.data && error.response.data.type === 2){
              store.dispatch( setAlreadySigned(true) );
            }
          }
          else if(error.response.status === 403 || error.response.status === 401){
            store.dispatch( setUnAuthorized(true) );
          }
        }
      
      return Promise.reject(error);
    }
  );