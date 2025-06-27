<template>
  <div class="block" v-if="ShowBlock" @click="StopTimer">
    Click Me
  </div>
</template>

<script>
export default {
    props : ["delay"],
    data(){
        return {
            ShowBlock : false,
            timer : null,
            reactionTime : 0
        }
    },
    mounted(){
        setTimeout(()=>{
            this.ShowBlock = true;
            this.StartTimer();
        }, this.delay)
    },
    methods : {
        StartTimer(){
            this.timer = setInterval(()=>{
                this.reactionTime += 10;
            },10)
        },
        StopTimer(){
            clearInterval(this.timer);
            this.$emit("end",this.reactionTime);
            console.log(this.reactionTime);
        }
    }

}
</script>

<style scoped>
  .block{
    width: 400px;
    height: 200px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 50px;
    margin-top: 10px;
  }
</style>