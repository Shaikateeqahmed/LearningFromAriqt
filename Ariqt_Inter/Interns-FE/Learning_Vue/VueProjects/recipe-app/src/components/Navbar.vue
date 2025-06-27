<template>
  <nav class="navbar  fixed-top" style="background-color:#01cd9d">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style="color:white; font-weight: bold;">
    <img width="30" height="35" style="border-radius: 50%;"  src="data:image/jpeg;base64,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" alt="">
    Ariqt International Diet Specialist</a>
    <button v-if="state.isAuthenticated" style="background-color: #01cd9d; border: 2px solid #ff6f00; border-radius: 50%; height: 35px; width:35px;" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span id="FirstChar">{{ FirstChar }}</span>
    </button>
    <svg v-else @click="HandleLogin"  style="color: #ff6f00;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
    </svg>
    
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="static">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Your Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <span id="OffCanvasFC">{{ FirstChar }}</span>
        <h3 id="nameFC">{{ name }}</h3>
        <p id="emailFC">{{ state.user?.username }}</p>
      </div>
      <div id="footerOC" @click="HandleLogout">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
          <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
        </svg>
        <h4>Log Out</h4>
      </div>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
import { useAuth } from "../config/useAuth";
import {state} from "../config/msalConfig";


const { login, logout, handleRedirect} = useAuth()
const HandleLogin = ()=>{
      login();
      
}

let name = state.user?.name
let FirstChar = ""

if(name){
  FirstChar+=name[0];
      for(let i=0; i<name.length; i++){
        if(name[i]==" "){
          FirstChar+=name[i+1];
          break;
        }
      }
}

const HandleLogout = ()=> {
      logout();
}

</script>

<style>
#FirstChar{
  font-size: 18px;
  margin-left: -8px;
  color: #ff6f00 ;
}
#OffCanvasFC{
  color: #ff6f00 ;
  font-size: 25px;
  border-radius: 50%;
  border: 1px solid #ff6f00;
  padding: 15px;
}
#nameFC{
  margin-top: 15px;
  color: #01cd9d;
}
#emailFC{
  color: #01cd9d;
}
#footerOC{
height: 50px;
width: 40%;
margin: auto;
margin-bottom: 20px;
border-radius: 10px;
background-color: #01cd9d;
color: white;
display: flex;
justify-content: space-evenly;
align-items: center;
}
#footerOC>h4{
  margin-top: 10px;
}
#footerOC:hover{
  cursor: pointer;
}

@media all and (min-width:300px) and (max-width:450px){
  .navbar-brand{
    font-size: 15px;
}
}
</style>