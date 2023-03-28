import  {create}  from "zustand";

export const useUserStore = create((set)=>({
    token:'',
    setToken:(t)=>{
        localStorage.setItem('token',t);
        set({token:t})
    }
    
}))