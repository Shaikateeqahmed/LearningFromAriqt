
<template>
    <div>    <h1>Not Authorized person please login!</h1>
        <button @click="handleLogin">Login</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuth } from "../config/useAuth";

  const { login, logout, handleRedirect } = useAuth();
 
 const handleLogin = async () => {
   console.log("hi")
   await login()
 };
  </script>
  
  <style>
  
  </style>