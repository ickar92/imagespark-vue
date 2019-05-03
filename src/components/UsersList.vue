<template>
  <div class="users-list">
    <p v-if="nothingIsFound">Nothing is found</p>

    <template v-else>
      <UserCard
        v-for="user of users"
        :key="user.id"
        :user="user"
      />
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import UserCard from './UserCard.vue';

export default {
  components: {
    UserCard,
  },

  computed: {
    ...mapState({
      searchString: state => state.users.searchString,
    }),
    ...mapGetters({
      users: 'users/sortedAndFilteredData',
    }),
    nothingIsFound() {
      return this.searchString && !this.users.length;
    },
  },
};
</script>
