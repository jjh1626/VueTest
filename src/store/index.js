import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {id:1, text:'buy a computedar', checked:false},
      {id:2, text:'play game', checked:false},
    ]
  },
  getters: {
  },
  mutations: {
    ADD_TODO(state, payload){
      state.todos.push({
        id: Math.random(),
        text: payload,
        checked: false
      });
    },
    TOGGLE_TODO(state, {id, checked}){
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId){
      const index = state.todos.findIndex(todo => {
        return todo.id === todoId;
      });
      state.todos.splice(index,1);
    }
  },
  actions: {
  },
  modules: {
  }
})
