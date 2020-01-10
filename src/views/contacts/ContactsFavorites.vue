<template>
  <div class="contacts">
    <ClInputSearch @change="searchEmit" />
    <section class="section-1 base-wrap">
      <h2
        v-if="$store.getters.getFavUsers.length === 0"
        class="contacts--msg-no"
      >
        No favorite contacts
      </h2>
      <div v-else class="grid-wrap">
        <template v-for="user in filteredContent">
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
      search: ""
    };
  },
  computed: {
    filteredContent() {
      let filtered = this.$store.getters.getFavUsers;

      if (this.search) {
        filtered = this.$store.getters.getFavUsers.filter(
          x => x.fullName.toLowerCase().indexOf(this.search) > -1
        );
      }

      return filtered;
    }
  },
  methods: {
    searchEmit(val) {
      this.search = val;
    }
  }
};
</script>
