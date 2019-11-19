import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import uniqid from 'uniqid'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'clicksign-ubook',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    contacts: [],
    filterText: ''
  },
  mutations: {
    addContact (state, payload) {
      payload.key = uniqid()
      state.contacts.push(payload)
    },
    updateContact (state, payload) {
      const contact = state.contacts.find(
        contact => contact.key === payload.key
      )
      Object.assign(contact, payload)
    },
    deleteContact (state, payload) {
      let key = null

      // find contact key
      for (let i = 0; i < state.contacts.length; i++) {
        if (state.contacts[i].key === payload.key) {
          key = i
        }
      }

      state.contacts.splice(key, 1)
    },
    updateFilter (state, payload) {
      state.filterText = payload
    }
  },
  actions: {
    addContactAction (context, payload) {
      context.commit('addContact', payload)
    },
    updateContactAction (context, payload) {
      context.commit('updateContact', payload)
    },
    deleteContactAction (context, payload) {
      context.commit('deleteContact', payload)
    },
    updateFilterTextAction (context, payload) {
      context.commit('updateFilter', payload)
    }
  },
  getters: {
    contacts (state) {
      return state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    },
    filterText (state) {
      return state.filterText
    }
  },
  plugins: [vuexPersist.plugin]
})
