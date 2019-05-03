const userFullName = (user) => {
  return `${user.name} ${user.secondName}`;
};

const userFilterFn = (user, searchString) => {
  const username = userFullName(user).toLowerCase();
  const search = searchString.toLowerCase();
  return username.includes(search);
};

const getUserSortFn = (sortBy) => {
  return (user1, user2) => {
    const value1 = user1[sortBy];
    const value2 = user2[sortBy];
    return value2 - value1;
  };
};

export default {
  sortedAndFilteredData: (state) => {
    const filtered = state.data.filter(user => userFilterFn(user, state.searchString));
    if (!state.sortBy) {
      return filtered;
    }
    const userSortFn = getUserSortFn(state.sortBy);
    return filtered.sort(userSortFn);
  },
};
