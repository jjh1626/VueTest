<template>
    <div>
        <label for="name">Name</label>
        <input 
            type="text" id="name" name="name" 
            style="padding: 20px; border: 2px solid green;"
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            require: true
        }
    },
    // props: {
    //     pName: {
    //         type: String,
    //         require: true
    //     }
    // },
    // methods: {
    //     updateName(e){
    //         console.log(e.target.value);
    //         this.$emit('parNameUpdate', e.target.value);
    //     }
    // }
}
</script>

