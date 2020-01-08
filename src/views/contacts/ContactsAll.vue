<template>
  <div class="contacts">
    <ClInputSearch @change="searchEmit" />

    <section class="section-1 base-wrap">
      <div class="grid-wrap">
        <ClCardContact add-new></ClCardContact>

        <template v-for="user in filteredContent">
          <ClCardContact :user="user" :key="user._id">
            {{ user.fullName }}
          </ClCardContact>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ClContactsAll",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filteredContent() {
      let filtered = this.$store.state.users;
      if (this.search) {
        filtered = this.$store.state.users.filter(
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

<style>
</style>