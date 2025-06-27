<template>
  <div>
    <h1>Job Details Page</h1>
    <div>
      <h1>{{jobdetails.name}}</h1>
      <p >{{jobdetails.details}}</p>
    </div>
  </div>
</template>

<script>
export default {
//second method for usind params
props : ["id"],
data(){
    return{
      jobdetails : {} | null,
    }
},
created(){
this.fetchData();
},
// async mounted(){
//  await this.fetchData();
// },
methods :{
  async fetchData(){
    try {
      let res = await fetch("http://localhost:3000/jobs/"+this.id);
      res = await res.json();
      this.jobdetails = res;
    } catch (error) {
      console.log(error.message);
    }
  }
}
}
</script>

<style>

</style>