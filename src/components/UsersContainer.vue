<template>
  <div class="users-list">
    <h2>Рейтинг участников</h2>

    <form>
      <input
        type="text"
        placeholder="Search"
        :value="searchString"
        @input="setSearchString($event.target.value)"
      >

      <select
        :value="sortBy"
        @change="setSortBy($event.target.value)"
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

    <UsersList />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import UsersList from './UsersList.vue';

export default {
  components: {
    UsersList,
  },

  data() {
    return {
      search: '',
      sort: '',
    };
  },
  computed: {
    ...mapState({
      searchString: state => state.users.searchString,
      sortBy: state => state.users.sortBy,
    }),
  },

  methods: {
    ...mapMutations({
      setSearchString: 'users/setSearchString',
      setSortBy: 'users/setSortBy',
    }),
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
