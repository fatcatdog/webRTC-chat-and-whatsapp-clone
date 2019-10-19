import React from "react";
import {  navigate, A } from "hookrouter";
import Login from './Login';
import { ACCESS_TOKEN } from '../constants';

export default function Logout() {

  localStorage.setItem(ACCESS_TOKEN, "");

  return (
      <Login />
  );
}
