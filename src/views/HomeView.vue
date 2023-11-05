<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ViewBtn :title="titleMsg">
      <template v-slot:sHeader>
        <div><h3>v-slot header</h3></div>
      </template>
      <template #default="{ sTitle }">
        <div><h3>v-slot default area : {{ sTitle }}</h3></div>
      </template>
    </ViewBtn>
    {{ msg }}
    <button @click="updateMsg">변경</button>
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
  },
  data(){
    return {
      titleMsg:'This is home title message!!',
      msg:'this is message'
    }
  },
  methods:{
    updateMsg(){
      this.msg = 'changed message!!'
    }
  },
  beforeCreate(){
    console.log('beforeCreate', this.titleMsg);
  },
  created(){
    console.log('created', this.titleMsg);
  },
  beforeMount(){
    alert('beforeMount');
  },
  mounted(){
    alert('mounted');
  },
  beforeUpdate(){
    alert('beforeUpdate');
  },
  updated(){
    alert('updated');
  },
  beforeDestroy(){
    alert('beforeDestroy');
  },
  destroyed(){
    alert('destroyed');
  }
}
</script>
