import React, { useEffect, useRef, useState } from 'react'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

import {storage} from '../firebase'
import {ref,uploadBytes} from 'firebase/storage'
import Profiles from './Profiles'
import SignIn from './Signin'

export default function SignUp() {
    let navigate = useNavigate();


    const btnRef = useRef();
    useEffect(() => {
        disable()
    },[])

    const [userinput,setUserinput] = useState('');
    const [registerEmail,setRegisterEmail] = useState();
    const [registerPassword,setRegisterPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const [error,setError] = useState('');
    const [errorpw,setErrorpw] = useState('');
    let user = {
        name : userinput,
        email : registerEmail,
        password : confirmPassword
    }
    const userUpload = () => {
        const userRef = ref(storage, `users/${user.name}`);
        uploadBytes(userRef, user).then(()=>{
            alert('user uploaded')
        })
    }
    const createUser = async () => {
        if(userinput.length >= 6){
        try{
            await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                confirmPassword
                )
                userUpload()
                console.log(user)
                window.alert('Account created successfully please login :3')
                navigate('/Signin')
            }
        catch{
            setError('Invalid email')
        }}
        else{
            setError('Username must have at least 6 chars')
        }
    }
    const signUpProcess = (event) => {
        if(registerPassword === event){
            setErrorpw('')
            enable()
        }
        else{
            setErrorpw('Passsword does not match')
        }
    }

    const disable = () => {
        btnRef.current.disabled = true;
        btnRef.current.classList.remove('bg-blue-500')
        btnRef.current.classList.add('bg-gray-500')
    }
    const enable = () => {
        btnRef.current.disabled = false;
        btnRef.current.classList.remove('bg-gray-500')
        btnRef.current.classList.add('bg-blue-500')
    }
  return (
    <div className='account'>
        <div>
            <h1>Sign Up</h1>
            <input required placeholder='Username...' onChange={(event) => {
                setUserinput(event.target.value)
            }}/>
            <input required type="email" placeholder='Email...' onChange={(event) => {
                setRegisterEmail(event.target.value);
            }}/>
            <input required placeholder='Password...' type='password' onChange={(event) => {
                setRegisterPassword(event.target.value);
            }}/>
            <input required placeholder='Confirm password...' type='password' onChange={(event) => {
                setConfirmPassword(event.target.value);
                signUpProcess(event.target.value);
            }}/>
            <p>{error}</p>
            <p>{errorpw}</p>
            <button ref={btnRef} type=' submit' onClick={()=>{
                createUser();
            }}>Register</button>
        <a onClick={()=>{navigate('/Signin')}}>Already have account? Log in...</a>
        </div>
    </div>
  )
}
