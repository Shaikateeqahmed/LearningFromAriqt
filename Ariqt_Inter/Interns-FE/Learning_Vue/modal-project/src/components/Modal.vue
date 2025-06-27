<template>
    <div class="backdrop" @click.self="toggleModal">
        <div class="modal" :class="{sale : theme==='sale', purchase : theme==='purchase'}">
                    <p class="cancel" @click="toggleModal">X</p>
           <slot></slot>
           <slot name="name"></slot>
        </div>
    </div>
</template>

<script>


export default {
    props : [ "theme"],
    methods : {
        toggleModal(){
            this.$emit("close")
        }
    }
}
</script>


<style scoped>
.modal{
    width: 400px;
    padding: 20px;
    margin : 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.1 );
    width: 100%;
    height: 100%;
}
.sale{
    background-color: teal;
    color: white;
    border-radius: 10px;
}
.purchase{
    background-color: lightpink;
    color: white;
    border-radius: 10px;
}
.cancel{
    display: flex;
    align-items: flex-end;
}
</style>