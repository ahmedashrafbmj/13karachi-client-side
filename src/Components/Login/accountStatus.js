import { style } from "@mui/system";
import React from "react";
import {useHistory} from "react-router-dom";


function AccountStatus(){

    const history = useHistory()
    const logout=()=>{
       
            window.location.reload(true)
            alert("logout successfully")

        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('role')
        // localStorage.removeItem('hotel')

        localStorage.removeItem('price')
        localStorage.removeItem('userhotel')
        localStorage.removeItem('imageURL')
        localStorage.removeItem('hotelemail')
        localStorage.removeItem('accountstatus')

        localStorage.removeItem('contact')
        localStorage.removeItem('market')
        localStorage.removeItem('address')
        localStorage.removeItem('area')

    
        localStorage.removeItem('accountstatus')
        if('caches' in window){
            caches.keys().then((names) => {
                    // Delete all the cache files
                    names.forEach(name => {
                        caches.delete(name);
                    })
                });
        
                // Makes sure the page reloads. Changes are only visible after you refresh.
                // window.location.reload(true);
                history.push('/')
            }
    
       
    }
   
    
    return (
        <>
        <h1>This Account is Temporary Disabled, While Super Admin can see this and Approve your request with in 24 Hours..... Please Logout after 24 Hours and Login again Thank you</h1>

        <br />

        <input type="button" className="form__button" value="Logout" onClick={()=>{logout(); }} />
        </>
    )
}

export default AccountStatus;