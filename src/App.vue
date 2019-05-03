<template>
  <div id="app">
    <div class="container">
      <UsersList />
    </div>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue';

export default {
  name: 'app',
  components: {
    UsersList,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  max-width: 600px;
  width: 100%;
  // padding: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>
