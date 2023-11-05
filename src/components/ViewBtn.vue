<template>
    <div>
        <h1>{{ title }}</h1>
        <slot name="sHeader"></slot>
        <p>{{ name }}</p>
        <slot :sTitle="slotMsg"></slot>
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
            name: 'hello world',
            slotMsg: 'this is slot message'
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