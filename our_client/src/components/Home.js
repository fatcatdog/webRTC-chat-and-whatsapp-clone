import React, { useState } from "react";
import { ACCESS_TOKEN } from '../constants';
import {  navigate } from "hookrouter";
import { LOGINDATA } from '../constants';

export default function Home() {

 async function ourHelloMethod(){
   const url = 'http://localhost:8080/hello';
   // console.log('Authorization: Bearer' + localStorage.getItem(ACCESS_TOKEN));
   try {

       const response = await fetch(url, {
         method: 'GET', // or 'PUT'
         headers: {
           'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
         }
       });

       if(response.status === 200) {
           // alert("200 on ourHelloMethod");
           // const json = await response.json();
           // console.log("Thing: " + json.token);
           // console.log("Response json: " + json);
           // console.log("json token: " + json.token);

           // localStorage.setItem(ACCESS_TOKEN, json.token);

           setLoggedInUser(true);

       } else if (response.status === 401) {
           // alert("401 on ourHelloMethod");
           LOGINDATA['username'] = '';
           LOGINDATA['password'] = '';
           navigate("/login");
       }
   } catch (error) {
         console.log('Error jacob:', error);
         LOGINDATA['username'] = '';
         LOGINDATA['password'] = '';
     }
 }

 async function getLoggedInUsersForChat(){

   // if(loggedInUser === false) {
   //   navigate("/login");
   // }

   const url = 'http://localhost:8080/loggedInUsers';
   // console.log('Authorization: Bearer' + localStorage.getItem(ACCESS_TOKEN));
   try {

       const response = await fetch(url, {
         method: 'GET', // or 'PUT'
         headers: {
           'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
         }
       });

       if(response.status === 200) {

         const json = await response.json();

         console.log(json);
         //
         // setItems([
         //   ...items,
         //   {
         //     id: items.length,
         //     value: Math.random() * 100
         //   }
         // ]);

       } else if (response.status === 401) {
           console.log("getLoggedInUsersForChat server call gave us 401");
       }
   } catch (error) {
         console.log('Error:', error);

     }
   }

 const [loggedInUser, setLoggedInUser] = useState(false);
 const [items, setItems] = useState([]);

  ourHelloMethod();
  getLoggedInUsersForChat();

  return (
    <div>
      <h1>Home</h1>
      <h2>Valid JWT Status: {loggedInUser.toString()}</h2>
      <p>User: {items}</p>
    </div>
  );
}
