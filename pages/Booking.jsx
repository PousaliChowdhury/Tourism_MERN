import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './LoginSignup.css';
import Footer from '../components/Footer'

function Booking() {

    const [action] =useState("Booking");

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        tel: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, tel } = loginInfo;
        if (!email || !tel) {
            return handleError('email and phone no. are required')
        }
        try {
            const url = `https://deploy-mern-app-1-api.vercel.app/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

return (
    <div className='image1'>
        <div>
            <h1>Travel & Explore </h1>
            <h2>|| Plan Your Next Trip,With Our Assistance ||</h2>
          </div>
        <div className='container-logsign'>
        <div className='text'>{action}</div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='email'>Email ID*</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        autoFocus
                        placeholder='Enter your email'
                        value={loginInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Phone No*</label>
                    <input
                        onChange={handleChange}
                        type='tel'
                        name='tel'
                        autoFocus
                        placeholder='Enter your contact no.'
                        value={loginInfo.tel}
                    />
                </div>
                <button className='submit'>Confirm Booking</button>
                <span className='LogSign'>Already booked ?
                        <Link to="/home">Check Status</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    <Footer/>
    </div>
      )

}

export default Booking