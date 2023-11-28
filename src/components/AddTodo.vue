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
            this.$emit('add-todo', e.target.value);
            this.todoText = '';
        }
    }
}
</script>

<style>

</style>