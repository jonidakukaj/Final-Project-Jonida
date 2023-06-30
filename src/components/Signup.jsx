import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // get content from useContext UserAuth()
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      alert("You have been registered, now please login")
      navigate('/login')
    } catch(e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      console.log(errorCode, errorMessage);
    };
  };

  return (
    <div className=''>
      <div>
        <h1 className=''>Sign up for a free account</h1>
        <p className=''>
          Already have an account yet?{' '}
          <Link to='/login' className='underline'>
            Login.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inputfield'>
          <label className=''>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className=''
            type='email'
          />
        </div>
        <div className='inputfield'>
          <label className=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className=''
            type='password'
          />
        </div>
        <button className=''>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
