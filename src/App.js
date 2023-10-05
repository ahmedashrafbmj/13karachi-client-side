import React from 'react'
import Footer from './Components/Main/Footer'
import { Provider } from 'react-redux';
import Welcome from './Components/Welcome/Welcome';
import Add from './Components/Add'
import Login from './Components/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


import './Components/Main/Main.css'
import './Components/Welcome/Welcome.css'

import './Components/Login/Login.css'
import Router from './Components/Router';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/store';







function App(){

return(

<>
<FloatingWhatsApp chatMessage="welcome to 13karachi"   phoneNumber="03472709786" avatar="/img/logo.jpeg" accountName="13karachi" />



<br />
<img src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg" className="img-fluid"/>
{/* <Provider store={store}>
<BrowserRouter>


<Router />

    
    </BrowserRouter>

    </Provider> */}
    {/* <Footer /> */}
</>


)

}

export default App;