import './login.css';

import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';
import { Info } from '@material-ui/icons';

const AdminLogin = () => {


  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const body = {
        userName,
        password
      }

      const res = await axios.post(`/admin/auth/login`,body);

      localStorage.setItem('AUTH-TOKEN',res.data.acessToken);

      navigate('/admin/');
    } catch (error) {
      console.log(error);

      setErrorMessage('Invalid Credentials!');
    }

    setLoading(false);
  }

  return (
    <div className='al195Container'>
      <div className="al195Title">
        LOGIN
      </div>


      <form onSubmit={login}>
        <div className="al195InnerContainer">
          <div className="al195FormGroup">
            <label className='al195label' for='userName'>
              User Name
            </label>

            <input type='text' className='al195Input' id='userName' aria-label='User Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>

          <div className="al195FormGroup">
            <label for='password' className='al195label'>
              Password
            </label>
              
            <input type='password' className='al195Input' id='password' aria-label='Password'  value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {errorMessage && (<div className='al195Error'><Info fontSize='small' color='error' /><p>{errorMessage}</p></div>)}

          <button type='submit' className='al195Button'>
            {loading ? <CircularProgress size={20} color="inherit" /> : 'Login'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin;