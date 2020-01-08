<template>
  <div class="contacts">
    <form class="form">
      <label class="label"
        ><ClSvgSearch />
        <input
          type="text"
          aria-label="Search"
          name="firstname"
          class="search"
          v-model="search"
        />
      </label>
    </form>
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
    // openSingleUser(id) {
    //   this.$router.push(`/user/${id}`);
    // }
  }
};
</script>

<style>
</style>