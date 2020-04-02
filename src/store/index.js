import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        changeTransactions: [],
        changeToReceive: 0
    },
    actions:{
        addChangeTransaction: ({state, commit}, t) => {
            state.changeTransactions.push(t);
            commit('addChange', - t.amount);
        },
        removeChangeTransaction: ({state, commit}, {id, amount}) => {
            state.changeTransactions = state.changeTransactions.filter(i => i.id != id);
            commit('addChange', amount);
        },
        
    },
    mutations: {
        addChange: (state, n) => state.changeToReceive = Math.round((state.changeToReceive + n) * 100) / 100
    }
})
