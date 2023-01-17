import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

import { auth } from '../firebase/clientApp';

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const route = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const returnUser = userCredential.user;
      console.log(returnUser)
      // ...
      route.push('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    })
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value 
      }
    })
  };

  return (
    <div className='w-full flex flex-1 justify-center items-center h-screen'>
      <div className='bg-white rounded-lg p-3 w-1/3 flex flex-col items-center'>
        <h2 className='text-center mb-10'>Sign In</h2>
        <form onSubmit={handleSubmit} className='flex flex-col w-4/5 items-start'>
          <label htmlFor="email" className='font-bold mb-2'>Email</label>
          <input className='input-01' value={user.email} onChange={handleChange} type="text" name="email" id="email" placeholder='Email'/>
          <label htmlFor="password" className='font-bold mb-2'>Password</label>
          <input className='input-01' value={user.password} onChange={handleChange} type="password" name="password" id="password" placeholder='Password'/>
          <button type='submit' className='w-full bg-blue-500 py-2 rounded mt-2 mb-5'>Sign Up</button>
        </form>
        <div className='w-4/5 flex justify-end mb-2'>
          <p>Dont have an account <a className='hover:cursor-pointer underline' href='#'>sign up?</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn;