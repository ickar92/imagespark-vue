<template>
  <div class="user-card">
    <div class="id">
      {{ user.id }}
    </div>
    <div class="logo">
      {{ user.name[0] }}
      {{ user.secondName[0] }}
    </div>
    <div class="name">
      {{ user.name }}
      {{ user.secondName }}
    </div>
    <div class="age">
      {{ user.age }}
    </div>
    <div class="rating">
      {{ user.rating }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.user-card {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.user-card > div {
  margin-right: 10px;
}

.logo {
  width: 50px;
  height: 50px;
  background: lightgreen;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.age,
.rating {
  flex: 1;
  text-align: center;
}

.name {
  flex: 5;
}

.name {
  font-weight: bold;
}
</style>
