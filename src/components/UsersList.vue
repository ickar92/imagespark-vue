<template>
  <div class="users-list">
    <h2>Рейтинг участников</h2>

    <form>
      <input
        v-model="search"
        type="text"
        placeholder="Search"
      >

      <select
        v-model="sort"
      >
        <option value="" disabled>Сортировать</option>
        <option value="age">по возрасту</option>
        <option value="rating">по рейтингу</option>
      </select>
    </form>
    <div class="titles">
      <span />
      <span>Возраст</span>
      <span>Рейтинг</span>
    </div>
    <User
      v-for="user in users"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<script>
import User from '@/components/User.vue';

export default {
  components: {
    User,
  },

  data() {
    return {
      search: '',
      sort: '',
    };
  },
  computed: {
    fullName() {
      return user => `${user.name} ${user.secondName}`;
    },
    userFilterFn() {
      return user => this.fullName(user)
          .toLowerCase()
          .includes(this.search.toLowerCase());
    },
    userSortFn() {
      return (user1, user2) => {
        const value1 = user1[this.sort];
        const value2 = user2[this.sort];
        return value2 - value1;
      };
    },
    users() {
      const { users } = this.$store.getters;
      const filtered = users.filter(this.userFilterFn);
      if (!this.sort) {
        return filtered;
      }
      return filtered.sort(this.userSortFn);
    },
  },

  created() {
    this.$store.dispatch('fetchUsers');
  },
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

.titles {
  display: flex;
  justify-content: flex-end;
}

.titles span {
  font-size: 14px;
  font-weight: bold;
  color: darkgray;
  flex: 1;
  text-align: center;
}

.titles span:first-child {
  flex: 5;
}
</style>
