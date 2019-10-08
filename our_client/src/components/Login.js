import React from "react";
import { useInput } from './useInput';
import '../styles/formStyles.css';
import { ACCESS_TOKEN, LOGINDATA } from '../constants';
import {  navigate } from "hookrouter";

async function ourAuthenticateAttempt(one, two){
  localStorage.removeItem(ACCESS_TOKEN);

  const url = 'http://localhost:8080/authenticate';

  LOGINDATA['username'] = one;
  LOGINDATA['password'] = two;

  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(LOGINDATA), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(response.status === 200) {
      const json = await response.json();
      // console.log('Success:', JSON.stringify(json['token']));
      localStorage.setItem(ACCESS_TOKEN, JSON.stringify(json.token));
      navigate("/home");
    }
    } catch (error) {
      console.error('Error:', error);
      LOGINDATA['username'] = '';
      LOGINDATA['password'] = '';
    }
}



export default function Login(props) {

  const { value:userName, bind:bindUserName, reset:resetUserName } = useInput('');
  const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');

   const handleSubmit = (evt) => {
       evt.preventDefault();
       alert(`Submitting Username: ${userName} Password: ${password}`);

       ourAuthenticateAttempt(userName, password);
       resetUserName();
       resetPassword();
    }

  return (
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
         Password:{" "}
         <input type="text" {...bindPassword} />
       </label>
      </div>
      <div className="formField">
       <input type="submit" value="Submit" />
     </div>
   </form>
   </div>
 );
}
