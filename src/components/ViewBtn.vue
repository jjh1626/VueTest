<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>    
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "welcom to props"
        }
    },
    data(){
        return {
            name: 'hello world'
        }
    },
    methods: {
        updateName(){
            this.name = 'hello world Updated!!'
        }
    }
}
</script>

<style scoped>
p {
    color: red;
}
</style>