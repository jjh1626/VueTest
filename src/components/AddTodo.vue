<template>
    <input 
      v-model="todoText"
      type="text" 
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addItem"
    >
</template>

<script>
export default {
    data(){
        return {
            todoText:''
        }
    },
    methods: {
        addItem(e){
            //this.$emit('add-todo', e.target.value);   //vuex 사용으로 주석처리
            this.$store.commit('ADD_TODO', e.target.value);
            this.todoText = '';
        }
    }
}
</script>

<style>

</style>