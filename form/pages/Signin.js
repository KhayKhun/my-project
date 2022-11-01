import React, { useState,useEffect,useRef } from 'react'
import {auth} from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {storage} from '../firebase'
import {ref} from 'firebase/storage'

export default function SignIn() {
    let navigate = useNavigate();

    const [loginEmail,setLoginEmail] = useState('');
    const [loginPassword,setLoginPassword] = useState('');
    const [error,setError] = useState('')

    const check = () => {
        if(loginEmail.length > 0 && loginPassword.length > 5){
            enable()
        }
        else{
            disable()
        }
    }
    
    const btnRef = useRef();
    useEffect(() => {
        check()
    })
    const loginUser = async () => {
        try{
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            setError('')
            console.log('login succeed')
            navigate(`/Profiles/:userName`)
        }
        catch{
            setError('Wrong email or password')
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
            <h1>Login</h1>
            <input required type="email" placeholder='Email...' onChange={(event) => {
                setLoginEmail(event.target.value)
            }}/>
            <input required placeholder='Password...' type='password' onChange={(event) => {
                setLoginPassword(event.target.value)
            }}/>
            <p>{error}</p>
            <button ref={btnRef} onClick={loginUser} type='submit'>Login</button>
            <a onClick={()=> {navigate('/Signup')}}>Don't have an account? Register...</a>
        </div>
    </div>
  )
}