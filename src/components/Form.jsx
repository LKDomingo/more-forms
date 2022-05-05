import React, { useState } from 'react';


const Form = (props) => {

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    let createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password} ;
        console.log("welcome", newUser)
    }

    return (

        <form>
            <div className='d-flex bg-light align-items-center justify-content-center p-2 rounded my-3'>
                <label htmlFor="firstName" className="">First Name:</label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } className='form-control'/>
                {
                    firstName.length == 1 ? <p className='text-danger'>First name must be at least 2 characters</p> : null
                }
            </div>
            <div className='d-flex bg-light align-items-center justify-content-center p-2 rounded my-3'>
                <label htmlFor="lastName" className="">Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } className='form-control'/>
                { 
                    lastName.length == 1 ? <p className='text-danger'>Last Name must be at least 2 characters</p> : null 
                }
            </div>
            <div className='d-flex bg-light align-items-center justify-content-center flex-between p-2 rounded my-3'>
                <label htmlFor="email" className="">Email:</label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } className='form-control'/>
                {
                    email.length > 0 && email.length < 5 ? <p className='text-danger'>Email must be at least 5 characters</p> : null
                }
            </div>
            <div className='d-flex bg-light align-items-center justify-content-center p-2 rounded my-3'>
                <label htmlFor="password" className="">Password:</label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } className='form-control'/>
                {
                    password.length > 0 && password.length < 8 ? <p className='text-danger'>Password must be at least 8 characters</p> : null
                }
            </div>
            <div className='d-flex bg-light align-items-center justify-content-center p-2 rounded my-3'>
                <label htmlFor="confirmPassword" className="">Confirm Password:</label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } className='form-control'/>
                {
                    confirmPassword.length > 7 && password !== confirmPassword ? <p className='text-danger'>Passwords do not match!</p> : null
                }
            </div>
                <input type="submit" value="Create User" />
            <hr />
            <h4>Your Form Data</h4>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
        </form>

    )

}
export default Form