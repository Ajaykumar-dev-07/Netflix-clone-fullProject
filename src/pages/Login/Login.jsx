import { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { signup, login } from '../../firebase';
import { toast } from 'react-toastify';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();

    if (signState === "Sign In") {
      try {
        await login(email, password);
      } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-")[0].join(" "));
      }
    } else {
      try {
        await signup(name, email, password);
      } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-")[0].join(" "));
      }
    }
  };

  return (
    <div className='login'>
      <img className='login-logo' src={logo} alt=""/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" &&
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder='Full Name' 
              name='name' 
              required 
            />
          }
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email Address' 
            name='email' 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password' 
            name='password' 
            required 
          />
          <button 
            onClick={user_auth} 
            type="button"  // Changed from "submit" to "button"
          >
            {signState}
          </button>
          <div className='form-help'>
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div> 
            <a href="">Need Help?</a>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ?
            <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up now.</span></p> :
            <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In now.</span></p>
          }
        </div>
        <div className="recaptcha">
          <p>This page is protected by Google reCAPTCHA to ensure you’re not a bot.<a href="#">Learn more</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
