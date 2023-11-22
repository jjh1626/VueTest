<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input 
      v-model="todoText"
      type="text" 
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addItem"
    >
    <hr>
    <TodoComp 
        v-for="todo in todos" 
        :key="todo.id"
        :todoPs="todo"
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoComp from '@/components/TodoComp.vue';

export default {
  components: {
    TodoComp
  },
  data(){
    return {
      todoText:'',
      todos: [
        {id:1, text:'buy a car', checked:false},
        {id:2, text:'play game', checked:false},
      ]
    }
  },
  methods: {
    addItem(e){
      console.log(e.target.value);
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      });
      this.todoText = '';
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
