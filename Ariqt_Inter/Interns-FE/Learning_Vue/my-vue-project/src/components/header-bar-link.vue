<template>
    <div>
        <button @click="SignIn">SignIn</button>
        <h1>Hello world</h1>
    </div>
</template>
<script>
import { PublicClientApplication } from '@azure/msal-browser';

export default {
  data() {
    return {
      account: undefined,
      github: 'https://github.com/cmatskas',
      twitter: 'https://twitter.com/christosmatskas',
      signin: 'https://microsoft.com',
    };
  },
  async created() {
    this.$msalInstance = new PublicClientApplication(
      this.$store.state.msalConfig,
    );
  },
  
  methods: {
    async SignIn() {
      await this.$msalInstance
        .loginPopup({})
        .then(() => {
          const myAccounts = this.$msalInstance.getAllAccounts();
          this.account = myAccounts[0];
          this.$emitter.emit('login', this.account);
        })
        .catch(error => {
          console.error(`error during authentication: ${error}`);
        });
    },
    async SignOut() {
      await this.$msalInstance
        .logout({})
        .then(() => {
          this.$emitter.emit('logout', 'logging out');
        })
        .catch(error => {
          console.error(error);
        });
    },
    async initialize(){
        try {
            await this.$msalInstance.initialize();
        } catch (error) {
            console.log("Initialization Error",error)
        }
    }
  },

  mounted() {
    this.initialize();
    const accounts = this.$msalInstance.getAllAccounts();
    if (accounts.length == 0) {
      return;
    }
    this.account = accounts[0];
    this.$emitter.emit('login', this.account);
    
    
  },
};
</script>