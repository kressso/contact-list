<template>
  <div class="contacts">
    <section class="section-1 base-wrap">
      <h2 v-if="favoriteUsers.length === 0">No favorite users</h2>
      <div v-else class="grid-wrap">
        <template v-for="user in favoriteUsers">
          <ClCardContact :user="user" :key="user.id">
            {{ user.fullName }}
          </ClCardContact>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ClContactFavorites",
  data() {
    return {
      // favoriteUsers: []
    };
  },
  computed: {
    favoriteUsers() {
      return this.$store.state.users.filter(user => user.isFavorite);
    }
  },
  created() {}
};
</script>
