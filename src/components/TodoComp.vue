<template>
    <div class="mb-2">
        <input 
            type="checkbox" 
            :checked="todoPs.checked"
            @change="toggleCheckbox">
        <span 
            class="m-3 flex-grow-1"
            :class="todoPs.checked ? 'text-muted' : ''"
            :style="todoPs.checked ? 'text-decoration:line-through' : ''">
            {{ todoPs.text }}
        </span>
        <button 
            class="btn btn-danger btn-sm"
            @click="clickDelete">Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        todoPs: {
            type: Object,
            require: true
        }
    },
    methods:{
        toggleCheckbox(e){
            /* vuex 사용으로 주석처리 */
            // this.$emit('toggle-checkbox',{
            //     id: this.todoPs.id,
            //     checked: e.target.checked
            // });

            /* mutations 호출 */
            // this.$store.commit('TOGGLE_TODO',{
            //    id: this.todoPs.id,
            //    checked: e.target.checked
            // });
            
            /* actions 호출 */
            this.$store.dispatch('todo/toggleTodo',{
                id: this.todoPs.id,
                checked: e.target.checked
            });
        },
        clickDelete(){
            // vuex 사용으로 주석처리
            // this.$emit('click-delete', this.todoPs.id);
            // this.$store.commit('DELETE_TODO', this.todoPs.id);
            this.$store.dispatch('todo/deleteTodo', this.todoPs.id);
        }
    }
}
</script>

<style>

</style>