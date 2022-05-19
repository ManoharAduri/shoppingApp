import React,{useState,useRef} from 'react'
import classes from './Login.module.css'
import profile from '../images/profile.png'
import {useDispatch} from 'react-redux'
import {login} from '../redux/actions/authenticationActions'
import Error from '../containers/Error'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [email,setEmail] = useState('');
    const [error,setError] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const emailRef = useRef()
    
    const navigate = useNavigate()
    const submitHandler = (e) =>{
        e.preventDefault();
        if(email==='john@email.com' && password === 'John@123456'){
            dispatch(login(true));
            navigate('/products')
        }else{
            setError('Invalid Credentials')
            setEmail('')
            setPassword('')
            emailRef.current.focus();
        }

    }
    return (
        <div className={classes.login_container}>
            <form onSubmit={submitHandler}>
                <div className={classes.img_container}>
                    <img src={profile} alt="profile"/>
                </div>
                <div className={classes.container}>
                    <label>Email:</label>
                    <input type="email" value={email} ref={emailRef} onChange={(e)=>setEmail(e.target.value)}/>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                </div>
            </form>
            {error && <Error message={error}/>}
        </div>
    )
}

export default Login