import React, { useState, useEffect } from "react";
import { ACCESS_TOKEN } from '../constants';
import {  navigate, A } from "hookrouter";
import { LOGINDATA, LOGGEDINUSERENDPOINT, CHECKLOGGEDINENDPOINT } from '../constants';
import Header from './Header';
import Login from './Login';

const useFetchLoggedInUsers = url => {
  const [items, setItems] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(url, {
        method: 'GET', // or 'PUT'
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
      });

      if(response.status === 200) {
        const json = await response.json();

        const listOfJson = json.map((username, index) =>
           // ourString = "/startchat/" + {userName.toString()};

          <li key={index}>
          <A href={"/startchat/" + username.toString()} username>{index} {username}</A>
          </li>
        );

        setItems(listOfJson);
      } else if (response.status === 401) {
        console.log("getLoggedInUsersForChat server call gave us 401");
      }

    } catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {fetchData()},[url]);
  console.log("items: " + items);
  return items;
};

const useFetchLogin = url => {
  const [loggedInUser, setLoggedInUser] = useState(false);

  async function fetchData() {
    try {

      const response = await fetch(url, {
        method: 'GET', // or 'PUT'
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
      });

      if(response.status === 200) {
          setLoggedInUser(true.toString());
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
          navigate("/login");
      }
  }

  useEffect(() => {fetchData()},[url]);
  return loggedInUser;
};

export default function Home() {

  const loggedInUser = useFetchLogin(CHECKLOGGEDINENDPOINT);
  const items = useFetchLoggedInUsers(LOGGEDINUSERENDPOINT);

  if(localStorage.getItem(ACCESS_TOKEN) == ""){
    return(
      <Login />
    );
  }

    return (
      <div>
        <Header />
        <h1>Home</h1>
        <h2>Valid JWT Status: {loggedInUser}</h2>
        <p>Users:</p>
        <ul>{items}</ul>
      </div>
    );
}
