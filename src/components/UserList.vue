<template>
    <div>
        >> User List
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
        <hr/>
        <div v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    created(){
        this.getUsers();
    },
    computed: {
        /* mapState 를 사용하여 state 값 가져오기 */
        ...mapState({
            users: state => state.user.users,
            todos: state => state.todo.todos
        })
        /* computed 에서 this.$store.state 에 접근하여 가져오기 */
        // users(){
        //     return this.$store.state.users;
        // },
        // todos(){
        //     return this.$store.state.todos;
        // }
    },
    methods: {
        /* mapActions 를 통해서 store 에 actions 접근 */
        ...mapActions('user',[
            'getUsers'
        ])
        /* store 에 actions 접근 */
        // getUsers(){
        //     this.$store.dispatch('getUsers');
        // }
    }
}
</script>