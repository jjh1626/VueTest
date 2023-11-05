<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form>
      <!-- <InputFieldVue :pName="name" @parNameUpdate="nameUpdate"></InputFieldVue> -->
      <InputFieldVue v-model="name"></InputFieldVue>
      <br><button>Submit</button>
    </form>
    <br>{{ name }}
  </div>
</template>

<script>
import InputFieldVue from '@/components/InputField.vue'

export default {
  components: {
    InputFieldVue
  },
  data(){
    return {
      name: ''
    }
  },
  // methods: {
  //   nameUpdate(val){
  //     this.name = val;
  //   }
  // }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>