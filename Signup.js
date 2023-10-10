import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './FirebaseConfig'

const Signup = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const[message,setMessage]=useState(false);
  const[error,setError]=useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredEmail+" "+enteredPassword);
    if(enteredEmail!=null || enteredPassword>=6){
      setError(false);
    }
    else{
      setError(true)
    }
    
   createUserWithEmailAndPassword(auth,enteredEmail,enteredPassword).then((response)=>{
    console.log(response);
   }).catch((error)=>{

     console.log('Error'+error.message);
     setError(error.message)
   }
   )
   setIsClicked(true);
   setMessage(true);
   setTimeout(() => {
     
    setIsClicked(false);
    setMessage(false);
    }, 2000);
  };

  return (
    <form className='form'  onSubmit={handleSubmit} method='post'>
      <Link to='/Login' className='Link'>
        GO BACK TO LOGIN PAGE
      </Link>
      <h4>SIGNUP HERE...</h4>
      <div className='form-group'>
        <label htmlFor='email'>Email</label><br />
        <input type='text' placeholder='Enter Your Mail Id' ref={emailInputRef} />
        <small id='emailHelp' className='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label><br />
        <input type='password' placeholder='Enter Your Password' ref={passwordInputRef} />
      </div>
      <div className='form-group'>
      {error && <div style={{fontWeight:'bold',fontStyle:'italic',marginTop:'20px',color:'red'}}>{error}</div>}
        {!isClicked && <button className='submitbutton' type='submit' >Submit</button>}
        {!error && isClicked && <div style={{ fontWeight: 'bold', fontStyle: 'italic' }}>SENDING REQUEST...</div>}
        {!error && message && <div style={{fontWeight:'bold',fontStyle:'italic',marginTop:'20px',color:'red'}}>SIGNUP SUCCESSFULL.PLEASE LOGIN</div>}
      </div>
    </form>
  );
};

export default Signup;
