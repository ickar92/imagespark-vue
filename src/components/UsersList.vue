<template>
  <div class="users-list">
    <h2>Рейтинг участников</h2>
    <form action="">
      <input type="text" v-model="search" placeholder="Search title.."/>
      <select v-model="sort" @click="showSelected">
        <option disabled value="">Сортировать</option>
        <option>по возрасту</option>
        <option>по рейтингу</option>
      </select>
    </form>
     <User v-for="user in filteredList" :key="user.id" :user="user" />
  </div>
</template>

<script>
import User from "@/components/User.vue";
export default {
  data() {
    return {
      search: "",
      sort: ""
    };
  },
  components: {
    User
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    filteredList() {
      return this.$store.getters.users.filter(user => {
        return user.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    showSelected() {
      console.log(this.sort);
    }
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

form {
  display: flex;
}

select {
  margin-left: 10px;
}
</style>
