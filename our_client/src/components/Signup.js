import React, {useState } from "react";
// import Header from './Header';
import { useInput } from './useInput';
import '../styles/formStyles.css';
import { CONFIRMSIGNUPDATA, LOGINDATA } from '../constants';
import {  navigate, A } from "hookrouter";
import Header from './Header';

export default function Signup(props) {

  const { value:userName, bind:bindUserName, reset:resetUserName } = useInput('');
  const { value:confirmUserName, bind:bindConfirmUserName, reset:resetConfirmUserName } = useInput('');
  const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
  const { value:confirmPassword, bind:bindConfirmPassword, reset:resetConfirmPassword } = useInput('');
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  async function ourSignUpAttempt(one, two, three, four){
    console.log("Method getting called? ");

    const url = 'http://localhost:8080/register';

    LOGINDATA['username'] = one;
    LOGINDATA['password'] = two;

    CONFIRMSIGNUPDATA['username'] = three;
    CONFIRMSIGNUPDATA['password'] = four;


    if((LOGINDATA.username.length > 3) && (LOGINDATA.password.length > 3) && (LOGINDATA.username === CONFIRMSIGNUPDATA.username) && (LOGINDATA.password === CONFIRMSIGNUPDATA.password)) {
      try {
        const response = await fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(LOGINDATA), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if(response.status === 200) {
          // const json = await response.json();
          navigate("/login");
        }
        } catch (error) {
          console.error('Error:', error);
          LOGINDATA['username'] = '';
          LOGINDATA['password'] = '';
          CONFIRMSIGNUPDATA['username'] = '';
          CONFIRMSIGNUPDATA['password'] = '';
          setSignupErrorMessage('Something went wrong. Maybe the server is down? Maybe your username is already taken?');
        }
    } else {
      console.log("Strings dont match...");
      LOGINDATA['username'] = '';
      LOGINDATA['password'] = '';
      CONFIRMSIGNUPDATA['username'] = '';
      CONFIRMSIGNUPDATA['password'] = '';
      setSignupErrorMessage('It looks like something went wrong. Maybe your usernames and passwords didnt match? Please try again.');
    }

  }

   const handleSubmit = (evt) => {
      setSignupErrorMessage('');
       evt.preventDefault();
       // alert(`Submitting Username: ${userName} Password: ${password} confirmUserName: ${confirmUserName} confirmPassword: ${confirmPassword}`);

       ourSignUpAttempt(userName, password, confirmUserName, confirmPassword);

       resetUserName();
       resetPassword();
       resetConfirmUserName();
       resetConfirmPassword();
  }

  return (

    <div>
      <Header />
      <div className="subHeader">
        <h1>Sign Up or <A href="/login">Login</A></h1>
      </div>
    <div className="centerStuff">
   <form onSubmit={handleSubmit}>
   <div className="formField">
       <label>
         Username:{" "}
         <input type="text" {...bindUserName} />
       </label>
     </div>
     <div className="formField">
       <label>
         Confirm Username:{" "}
         <input type="text" {...bindConfirmUserName} />
       </label>
     </div>
     <div className="formField">
       <label>
         Password:{" "}
         <input type="password" {...bindPassword} />
       </label>
      </div>
      <div className="formField">
        <label>
          Confirm Password:{" "}
          <input type="password" {...bindConfirmPassword} />
        </label>
       </div>
       <div className="formField">
         <div className="submitButton">
           <input type="submit" value="Submit" />
        </div>
      </div>
      <div className="errorField">
        {signupErrorMessage}
      </div>
   </form>
   </div>
  </div>
 );
}
