<template>
  <div class="user">
    <div class="id">{{ user.id }}</div>
    <div class="logo"></div>
    <div class="name">{{ user.name}}</div>
    <div class="surname">{{ user.secondName}}</div>
    <div class="rating">{{ user.rating }}</div>
  </div>
</template>


<script>
export default {
  props: ["user"]
};
</script>


<style scoped lang="scss">
.user {
  display: flex;
  align-items: center;
}

.user > div {
  margin-right: 10px;
  margin-top: 10px;
}

.logo {
  width: 30px;
  height: 30px;
  background: lightgreen;
  border-radius: 50%;
}
</style>