import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/header/Header'
import Registration from './components/registration/Registration'
import Login from './components/login/Login'
import AdminArea from './components/admin_area/AdminArea'
import ClientArea from './components/client_area/ClientArea'
import 'bootstrap/dist/css/bootstrap.min.css'

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    useEffect(()=>{
      axios.get('/checkAuth', {withCredentials: true})
      .then(resp =>{
        if(resp.data.id){
          setIsLoggedIn(true)
        }
      })
    }, [])
  
    const handleLoginState = (loggedIn, role)=>{
      setIsLoggedIn(loggedIn)
    }
  
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login state={handleLoginState} />} />
                <Route path="/registration" element={<Registration />} />
                {isLoggedIn && ( <Route path="/admin" element={<AdminArea />} />)}
                <Route path="/" element={<ClientArea />} />
            </Routes>
        </Router>
    )
}