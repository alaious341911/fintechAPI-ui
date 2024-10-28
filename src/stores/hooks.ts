import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import axios from 'axios';
import menuAside from '../menuAside'


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default axios.create({
   // baseURL: 'http://127.0.0.1:8000'
   baseURL: 'http://fintechapi-98da.onrender.com:80'
    
});

export function decodeErrorStatus(err: number): string{
    let errorMsg = ''
    if (err === 200) {
        errorMsg = 'No Server Response';
    } else if (err === 400) {
       errorMsg = 'Missing required filed(s) - Bad request';
  } else if (err=== 401 || err === 403) {
       errorMsg = 'Unauthorized action';
    }
    else if (err=== 302){
     errorMsg = 'Duplicate action detected';
    } else {
      errorMsg = 'proccess failed. Try again';
   }

   return errorMsg
}

export function errorHandler(err) {
    let errMsg = ''
    if (!err || !err?.response) {
      errMsg = 'No Server Response';
    } 
    else  {
     errMsg =  err?.response.data.message;
       }

      return errMsg;
  }


  export function getUserMenu(currentUser) {
    
    return menuAside
  }

  export function showFeature(currentUser) {
    
    return true
  }

  export function dashboardClass(currentUser) {
    
    return 'lg:grid-cols-3'
  }





  

