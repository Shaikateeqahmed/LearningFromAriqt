<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" />
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <p v-if="passwordError" class="error">{{passwordError}}</p>
    <label>Role:</label>
    <select v-model="role">
      <option hidden value="Select">Select</option>
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
    <label>Skills:</label>
    <input type="text" v-model="temSkills" @keyup.space="addSkill" />
    <div class="pill" v-for="skill in skills" :key="skill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" />
      <label>Agree terms & conditions</label>
    </div>
    <button>Create An Account</button>
    <!-- <div class="terms">
      <input type="checkbox" value="Shaik" v-model="names"/>
      <label>Shaik</label>
    </div>
    <div class="terms">
      <input type="checkbox" value="Ateeq" v-model="names"/>
      <label>Ateeq</label>
    </div>
    <div class="terms">
      <input type="checkbox" value="Ahmed" v-model="names"/>
      <label>Ahmed</label>
    </div> -->
    <!-- <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms : {{ terms }}</p> -->
    <!-- <p>Names:{{names}}</p> -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "Select",
      terms: false,
      // names : []
      temSkills: "",
      skills: [],
      passwordError : ""
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === " " && this.temSkills != "") {
        if (!this.skills.includes(this.temSkills)) {
          this.skills.push(this.temSkills);
        }
        this.temSkills = "";
      }
    },
    deleteSkill(skill){
      this.skills = this.skills.filter((item)=>{
        return skill != item
      })
    },
    handleSubmit(){
        this.passwordError = this.password.length > 5 ? "" : "Password Should Have atleast 6 Chars!";

        if(!this.passwordError){
          let obj = {
            Email : this.email,
            Password : this.password,
            Role : this.role,
            Skills : this.skills,
          }
          console.log(obj)
        }
    }
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button{
  color: white;
  background: teal;
  padding: 10px 20px;
  border: 0px;
  border-radius: 20px;
  margin-left: 150px;
  margin-top: 20px;
}
.error{
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>