import  {create}  from "zustand";

export const useUserStore = create((set)=>({
    token:'',
    setToken:(t)=>{
        localStorage.setItem('token',t);
        console.log('cualquier vaina',t);
        set({token:t})
    }
    
}))