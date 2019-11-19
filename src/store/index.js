import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'clicksign-ubook',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    addContact (state, payload) {
      state.contacts.push(payload)
    },
    updateContact (state, payload) {
      const contact = state.contacts.find(contact => contact.key === payload.key)
      Object.assign(contact, payload)
    }
  },
  actions: {
    addContactAction (context, payload) {
      context.commit('addContact', payload)
    },
    updateContactAction (context, payload) {
      context.commit('updateContact', payload)
    }
  },
  getters: {
    contacts (state) {
      return state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    }
  },
  plugins: [vuexPersist.plugin]
})
