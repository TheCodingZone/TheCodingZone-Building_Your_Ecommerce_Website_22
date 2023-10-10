import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRef ,useState ,useContext} from 'react'
import { auth } from './FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import AuthContext from './auth-context'
const LoginPage = () => {
  const[error,setError]=useState(false);
  const navigate=useNavigate();
  const emailInputRef=useRef();
  const passwordInputRef=useRef();

const authCtx=useContext(AuthContext); //
const isLoggedIn=authCtx.isLoggedIn;
const submitHandler=(event)=>{
event.preventDefault();
const enteredEmail=emailInputRef.current.value;
const enteredPassword=passwordInputRef.current.value;
signInWithEmailAndPassword(auth,enteredEmail,enteredPassword).then((response)=>{
  
  // console.log(authCtx.login(response.idToken));
  // const idToken=response.idToken;
  authCtx.login(response._tokenResponse.idToken);
  
  console.log((response._tokenResponse.idToken));
  navigate('/Store');
}).catch((error)=>{
  setError(error.message);
  emailInputRef.current.value='';
  passwordInputRef.current.value=''
});
}
  return (
    // 
    <form className='form' onSubmit={submitHandler}>
<Link to='/Signup' className='Link'>GO BACK TO SIGNUP PAGE</Link>
        <h4>LOGIN HERE...</h4>
        <div className="form-group">
        <label htmlFor="email" >Email</label>
        </div>
            <div className="form-group">

    <input type="text" placeholder='Enter Your Mail Id' ref={emailInputRef}/>
    <small id="emailHelp" className="form-text text-muted">never share your email with anyone else.</small>
            </div>
       
    <div className="form-group">
    <label htmlFor="email">Password</label>
    </div>
    <div className="form-group">

    <input type="text" placeholder='Enter Your Password' ref={passwordInputRef}/>
    </div>
    
    <div className="form-group">
    {error && <div style={{fontWeight:'bold',fontStyle:'italic',marginTop:'20px',color:'red'}}>{error}</div>}
    <button className='submitbutton'>Submit</button>
   
    </div>
  </form>
  )
}

export default LoginPage
