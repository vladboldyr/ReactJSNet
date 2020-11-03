import { useCallback } from "react"
import M from 'materialize-css';

declare global {
  interface Window {
      M:M;
  }
}

export const useMessage = () => {
  return useCallback( text=>{
    if(window.M && text ) {
      window.M.toast({html:text});
    }
  },[]);
}