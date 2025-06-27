<template>
  <div>
     <div v-if="state.isAuthenticated">
       Welcome, {{ state.user?.name }}
       <button @click="handleLogout">Log Out</button>
       <router-link :to="{name :'access'}">Access Page</router-link>
     </div>
     <div v-else>
       <button @click="handleLogin">Log In</button>
       <router-link :to="{name :'access'}">Access Page</router-link>
     </div>
   </div>
 </template>
 
 <script setup lang="ts">
 import { useAuth } from "../config/useAuth";
 import { myMSALObj, state } from "../config/msalConfig";
 import { onMounted } from "vue";
 
 const { login, logout, handleRedirect } = useAuth();
 
 const handleLogin = async () => {
   console.log("hi")
   await login();
 };
 console.log(state.isAuthenticated, state.user);
 
 const handleLogout = () => {
   logout();
 };
 
 
 
 
 </script>
 