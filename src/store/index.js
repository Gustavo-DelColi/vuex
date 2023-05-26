import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name: 'Han',
      last_name:'Solo',
      email: 'han@solo.com'
    },
    products: [],
    cart: []
  },
  mutations: {
    storeUser(state, data){
      state.user = data
      console.log('storeUser', data);
    }
  },
  actions: {
  },
  getters: {
  },

})
