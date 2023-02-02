import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import Register from '../Register/Register';
import Link from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/orderslice';
import loadingimg from '../images/loading.gif'



const Login = (props) => {


    const [loading, setLoading] = useState(false);

    const [userRole, setRole] = useState("");
    const [allDataUser, SetallDataUser] = useState("");

    const [userContact, setuserContact] = useState("");

    const [userAddress, setuserAddress] = useState("");

    const [userMarket, setuserMarket] = useState("");
    const [userArea, setuserArea] = useState("");

    const [accountStatus, setAccountStatus] = useState("");
    const dispatch = useDispatch();
    const [data, setData] = useState({

        email: "",
        password: ""

    });


    const getrole = async () => {



        const res3 = await fetch(`https://ahmed8364.herokuapp.com/api/postbyemailsignup/${data.email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });



        const role = await res3.json();
        SetallDataUser(role)



        setRole(role[0]?.role);

        setuserContact(role[0]?.contact);
        setuserAddress(role[0]?.address);

        setuserArea(role[0]?.area);
        setuserMarket(role[0]?.marketname);
        setAccountStatus(role[0]?.accountsstatus)
    }
    const history = useHistory()

    const loginc = () => {
        console.log(data,"data")
        setLoading(true)
        getrole()
        if (!data.email.trim()) {
            alert("Enter Email");
        }
        else if (!data.password.trim()) {
            alert("Enter password");
        }
     else {

            const headers = { "Content-Type": "application/json" };
            axios.post(`https://ahmed8364.herokuapp.com/api/signin`, {
                email: data.email,
                password: data.password
            }, {
                headers,
            })

                .then((success) => {
                    console.log(success,"success")
                    localStorage.setItem('token', 'thisismytoken')
                    localStorage.setItem('user', data.email)
                    const roleua = localStorage.getItem('role')
                    const citem = localStorage.getItem('cartItems')


                    const roleua4 = localStorage.getItem('accountstatus');

                    if (localStorage.getItem('role') === 'Admin' && localStorage.getItem('accountstatus') === 'Enabled') {

                        history.push('/Welcome')
                    }

                    else if (roleua === 'Admin' && roleua4 === 'Disabled') {

                        history.push('/accountstatus')
                    }

                    else if (roleua === 'Super') {

                        history.push('/Welcome2')

                    }
                    else if (roleua === "User"){
          

                       alert("you are loging as user and you enjoy more on our app Note: Web is available onlly for sellers ")
                       window.location.href='https://play.google.com/store/apps?hl=en&gl=US';
                       //    history.push('/')
            
                    }
            



                    setLoading(false)




                })

                .catch((err) => {
                    setLoading(false)
                    if(err?.response?.data?.message === "Password Incorrect!" ) {
                        alert("Wrong Password")
                    }
                    else if (err?.response?.data?.message === "Email Not Found" ){
                    alert("Invalid Email")
                    }
                   

                })

        }

    }
    localStorage.setItem('accountstatus', accountStatus)
    localStorage.setItem('role', userRole)
    localStorage.setItem('contact', userContact)
    localStorage.setItem('address', userAddress)

    localStorage.setItem('area', userArea)
    localStorage.setItem('market', userMarket)








    /////get email with role






    ///// end    



    useEffect(() => {

        const getdata = localStorage.getItem('token');

        const roleua2 = localStorage.getItem('role');

        const roleua3 = localStorage.getItem('accountstatus');




        if (roleua2 === "User") {
            history.push('/')
        }

        else if (roleua2 === 'Admin' && roleua3 === 'Enabled' || roleua2 === 'User') {

            history.push('/Welcome')
        }

        else if (roleua2 === 'Admin' && roleua3 === 'Disabled') {

            history.push('/accountstatus')
        }

        else if (roleua2 === 'Super') {

            history.push('/Welcome2')

        }
        else if (userRole === "User"){
          

            history.push('/')

        }







    }, []);




    return (

        <>
            {loading ? <img src={loadingimg} />
                :

                <div className="l-form">
                    <form action="" className="form">
                        <h1 className="form__title">Log In</h1>

                        <div className="form__div">
                            <input type="text" className="form__input" onChange={e => setData({ ...data, email: e.target.value })} />
                            <label className="form__label">Email</label>
                        </div>

                        <div className="form__div">
                            <input type="password" className="form__input" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                            <label className="form__label">Password</label>
                        </div>

                        <input type="button" className="form__button" value="Log In" onClick={() => { loginc(); }} />

                        <br />

                        {/* <input type="button" className="form__button" value="Register" onClick={()=>{history.push('/register')}} /> */}

                        <br />

                        {/* <input type="button" className="form__button" value="Role" onClick={()=>{getrole(); }} /> */}
                        <h1>{data.email}</h1>
                        {/* <h1>{data.password}</h1> */}


                    </form>


                </div>
            }


        </>


    )
}

export default Login;

