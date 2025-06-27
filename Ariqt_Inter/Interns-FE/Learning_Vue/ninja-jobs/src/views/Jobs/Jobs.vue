<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{name : 'JobDetails', params: { id: job.id }}" >
        <h1>{{job.name}}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        jobs :[],
        endPoint : "http://localhost:3000/jobs"
    }
},
mounted(){
  //fetch(this.endPoint).then(res => res.json()).then(data => this.jobs = data).catch(err => console.log(err));
  this.fetchData();
},
methods :{
  async fetchData(){
    try {
      let res = await fetch(this.endPoint);
      res = await res.json();
      this.jobs = res;
    } catch (error) {
      console.log(error,message);
    }
  }
}
}
</script>

<style>

</style>