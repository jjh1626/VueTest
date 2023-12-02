<template>
  <div>
    <TodoComp 
        v-for="todo in todos" 
        :key="todo.id"
        :todoPs="todo"
    />
  </div>

</template>

<script>
import TodoComp from '@/components/TodoComp.vue';
export default {
    components: {
        TodoComp
    },
    computed: {
        todos(){
            return this.$store.state.todo.todos;
        }
    },
    methods:{
        // vuex 사용으로 주석처리
        // toggleCheckbox(value){
        //     this.$emit('toggle-checkbox',value);
        // },
        // deleteTodo(todoId){
        //     this.$emit('click-delete',todoId);
        // }
    }
}
</script>

<style>

</style>