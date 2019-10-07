import React, { useState, useEffect } from "react";
// import Header from './Header';
import { useInput } from './useInput';
import '../styles/formStyles.css';

export default function Login(props) {

  const { value:userName, bind:bindUserName, reset:resetUserName } = useInput('');
  const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');

   const handleSubmit = (evt) => {
       evt.preventDefault();
       alert(`Submitting Username: ${userName} Password: ${password}`);
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
