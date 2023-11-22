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
            this.$emit('toggle-checkbox',{
                id: this.todoPs.id,
                checked: e.target.checked
            })
        },
        clickDelete(){
            this.$emit('click-delete', this.todoPs.id);
        }
    }
}
</script>

<style>

</style>