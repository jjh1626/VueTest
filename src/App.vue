<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo 
        @add-todo="addItem"></AddTodo>
    <hr>
    <TodoList 
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
      ></TodoList>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data(){
    return {
      todoText:'',
      // Vuex 사용으로 store 로 이동
      // todos: [
      //   {id:1, text:'buy a car', checked:false},
      //   {id:2, text:'play game', checked:false},
      // ]
    }
  },
  methods: {
    addItem(vaule){
      this.todos.push({
        id: Math.random(),
        text: vaule,
        checked: false
      });

    },
    toggleCheckbox({id, checked}){
      //console.log(id, checked);
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    deleteTodo(id){
      /* splice 사용한 방법
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos.splice(index,1); */
      // filter 사용한 방법
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

<style>

</style>
