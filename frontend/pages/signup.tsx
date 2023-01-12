import React, { useState } from 'react';

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('IT WORKED', user)
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: ''
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
        <h2 className='text-center mb-10'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='flex flex-col w-4/5 items-start'>
          <label htmlFor="firstName" className='font-bold mb-2'>First Name</label>
          <input className='input-01' value={user.firstName} onChange={handleChange} type="text" name="firstName" id="firstName" placeholder='First Name'/>
          <label htmlFor="lastName" className='font-bold mb-2'>Last Name</label>
          <input className='input-01' value={user.lastName} onChange={handleChange} type="text" name="lastName" id="lastName" placeholder='Last Name'/>
          <label htmlFor="email" className='font-bold mb-2'>Email</label>
          <input className='input-01' value={user.email} onChange={handleChange} type="text" name="email" id="email" placeholder='Email'/>
          <label htmlFor="userName" className='font-bold mb-2'>Username</label>
          <input className='input-01' value={user.userName} onChange={handleChange} type="text" name="userName" id="userName" placeholder='Username'/>
          <label htmlFor="password" className='font-bold mb-2'>Password</label>
          <input className='input-01' value={user.password} onChange={handleChange} type="password" name="password" id="password" placeholder='Password'/>
          <button type='submit' className='w-full bg-blue-500 py-2 rounded my-2'>Sign Up</button>
        </form>
        <div className='w-4/5 flex justify-end mb-2'>
          <p>Already registered <a className='hover:cursor-pointer underline' href='#'>sign in?</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp;