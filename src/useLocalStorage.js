//Impementing custom hooks to avoid the duplication of the code.
import {useState} from 'react';
export default function useLocalStorage(){
    useEffect(()=>
    {
        let email=localStorage.getItem("email");
        if(email)
        {
            setEmail(email);
        }
    },[]);
    useEffect(()=>
    {
        localStorage.setItem("email",email);

    },[email]);
    //only difference in custom hook is that we have to return something
    return{email,setEmail};
}