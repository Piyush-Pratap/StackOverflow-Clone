import React, {useState} from 'react'
import './Auth.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/stack-overflow.png'
import AboutAuth from './AboutAuth'
import { signup , login } from '../../actions/auth'

const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () =>{
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) =>{
          e.preventDefault()
          if(!email && !password){
             alert("Enter the email and password")
          }
          if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
             dispatch(signup({name, email, password}, navigate))
          }
          else{
            dispatch(login({email, password}, navigate))
          }
          console.log({name, email, password})
    }

    return(
       <section className='auth-section'>
         { isSignup && <AboutAuth/>}
         <div className='auth-container-2'>
          {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' width="90"/> }
          
             <form onSubmit={handleSubmit}>
             {
                isSignup &&(
                    <label html for="name">
                   <h4>Display Name</h4>
                    <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}}/>
                </label>  
                )
             }
                <label html for="email">
                   <h4>Email</h4>
                    <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
                </label>
                <label html for="password">
                   <div style={{display : "flex",justifyContent: "space-between"}}>
                      <h4>Password</h4>
                      { !isSignup && <p style={{color: "#007ac6", fontSize: "13px"}}>forgot password</p>}
                   </div>   
                    <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    { isSignup && <p  style={{color: "#666767", fontSize: "13px"}}>Password must contain at least eight<br/> character, including at least 1 letter and 1 <br/>number</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                           <input type='checkbox' id='check' style={{width: "12px",marginTop:"0px"}}/>
                           <p  style={{ fontSize: "13px", marginLeft:"12px"}}>Opt-in to receive occasional, <br/> product updates, user reserch invitaions, <br/> company announcements, and digests.</p>
                        </label>
                    )
                }
                <button type="Submit" className='auth-btn'>{isSignup ?  'Sign up' : 'Log in'}</button>
                {
                    isSignup && (
                        <p style={{color: "#666767", fontSize: "13px"}}>
                            By clicking "Sign up", you agree our <span style={{color : "#007ac6"}}>terms of</span><br/>services, <span style={{color: "#007ac6"}}>privacy policy</span> and <span style={{color: "#007ac6"}}>cookie policy</span>
                        </p>
                    )
                }
             </form>
             <p>
                {isSignup ? 'Already have an account?' : "Don't have an account?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
             </p>
             
          </div>
       </section>

    )
}

export default Auth