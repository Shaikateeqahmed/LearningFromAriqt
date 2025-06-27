import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      msalConfig: {
        auth: {
          clientId: '0c050124-cfe6-43b1-b68e-dda8e06ab36f',
          authority:
            'https://login.microsoftonline.com/8f6bd982-92c3-4de0-985d-0e287c55e379',
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      },
      accessToken: ''
    };
  },
  mutations :{
    setAccessToken(state, token){
      state.accessToken = token;
    }
  }
});

export default store;