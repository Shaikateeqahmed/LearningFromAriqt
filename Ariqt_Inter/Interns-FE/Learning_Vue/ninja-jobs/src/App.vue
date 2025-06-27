<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="/about">about</a> |
      <router-link to="/jobs">Jobs</router-link> |
    </nav>
    <button @click="redirect">Redirect</button>
    <button @click="goback">Go Back</button>
    <button @click="forward">Forward</button>
    <router-view />
  </div>
</template>
<script>
export default {
  methods:{
 redirect(){},
  goback(){
    this.$router.go(-1)
  },
  forward(){
    this.$router.go(1)
  }
  }
 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button{
  margin: 0px 10px;
  padding: 10px 20px;
  border: 0px;
  color: white;
  background: #42b983;
  border-radius: 10px;
}
</style>
