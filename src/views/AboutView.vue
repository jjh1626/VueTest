<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ViewBtn title="This is About title"></ViewBtn>
  </div>
</template>

<script>
import ViewBtn from '@/components/ViewBtn.vue';

export default {
  components: {
    ViewBtn
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>