<template>
   <div>
    <div v-if="state.isAuthenticated">
      Welcome, {{ state.user?.name }}
      <button @click="handleLogout">Log Out</button>
    </div>
    <div v-else>
      <button @click="handleLogin">Log In</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "./config/useAuth";
import { myMSALObj, state } from "./config/msalconfig";
import { onMounted } from "vue";

const { login, logout, handleRedirect } = useAuth();

const handleLogin = async () => {
  await login();
};

const handleLogout = () => {
  logout();
};

const initialize = async () => {
  try {
    await myMSALObj.initialize();
  } catch (error) {
    console.log("Initialization error", error);
  }
};

onMounted(async () => {
  await initialize();
  await handleRedirect();
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
