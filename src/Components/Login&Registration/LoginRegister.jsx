import React, { useEffect, useState } from "react";
import "./LoginRegister.css";
import image1 from "./img/img1.svg";
import image2 from "./img/img2.svg";


export const LoginRegister = () => {
  const [isSignIn,setIsSignIn] = useState(false);
  
 const signupHandler = () =>{
  setIsSignIn((prevState)=>!prevState);
  console.log(isSignIn);
 }
  
 const handleSubmit = () => {
  
 }
  return (
    
      <div className={`container  ${isSignIn?"sign-up-mode" :'' }`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="text" placeholder="Password" />
              </div>
              
              <div className="input-field">
                <i className="fas fa-list"></i>
                {/* <select className="input-field">
                  <option value="0" selected disabled hidden>
                    Select Role
                  </option>
                  <option value="1">FOOD</option>
                  <option value="2">MEDICAL</option>
                  <option value="3">RESCUE</option>
                  <option value="4">INFRASTRUCTURE</option>
                  <option value="5">OTHERS</option>
                </select> */}
                <input type="text" placeholder="Select"/>
              </div>
              <input type="submit" class="btn" value="Sign up" />

            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Are you new here?</h3>
              <p>
                Twitter-based flood aid and rescue system enables people to tweet their location and assistance needs providing crucial help to rescue teams.
              </p>
              <button className={`btn transparent`} id="sign-up-btn" onClick={signupHandler} >
                Sign up
              </button>
            </div>
            <img src={image1} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Have you registered already?</h3>
              <p>
                Our Twitter-based flood aid system uses real-time mapping to aid rescue teams in reaching those in need during floods.
              </p>
              <button className={`btn transparent  `} id="sign-in-btn" onClick={signupHandler} >
                Sign in 
              </button>
            </div>
            <img src={image2} className="image" alt="" />
          </div>
        </div>
      </div>
    
  );
};
