<template>
  <div id="app">
    <div class="container">
      <UsersContainer />
    </div>
  </div>
</template>

<script>
import UsersContainer from '@/components/UsersContainer.vue';

export default {
  name: 'App',
  components: {
    UsersContainer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  overflow-y: scroll;
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
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>
