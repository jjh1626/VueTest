<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ViewBtn/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ViewBtn from '@/components/ViewBtn.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ViewBtn
  }
}
</script>
