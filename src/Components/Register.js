import { Alert } from "react-bootstrap";
import React, { useState } from 'react'
import  Login  from './Login';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    
  
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      if (!name || !email || !password) {
        setFlag(true);
      } else {
        setFlag(false);
        sessionStorage.setItem("Given Email", JSON.stringify(email));
        sessionStorage.setItem(
          "Given Password",
          JSON.stringify(password)
        );
        console.log("Saved in Session Storage");
  
        setLogin(!login);
      }
    }
  
    function handleClick() {
      setLogin(!login);
    }
  
    return (
      <>
   
          <div>
            {" "}
            {login ? (
              <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>
  
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
  
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
  
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
  
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Register
                </button>
                <p onClick={handleClick} className="forgot-password text-right">
                  Already registered{" "}log in?
                  
                </p>
                {flag && (
                  <Alert color="primary" variant="danger">
                    I got it you are in hurry! But every Field is important!
                  </Alert>
                )}
              </form>
            ) : (
              <Login />
            )}
          </div>
      
      </>
  )
}
