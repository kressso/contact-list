<template>
  <div class="contacts">
    <form class="form">
      <input
        type="text"
        aria-label="Search"
        name="firstname"
        placeholder="ICON"
        class="search"
      />
      <!-- <input
        type="search"
        aria-label="Search"
        name="firstname"
        placeholder="ICON"
        class="search"
      /> -->
    </form>
    <section class="section-1 base-wrap">
      <div class="grid-wrap">
        <ClCardContact add-new @click="addNewRoute"></ClCardContact>

        <template v-for="user in $store.state.users">
          <ClCardContact :user="user" :key="user.id">
            {{ user.fullName }}
          </ClCardContact>
        </template>

        <!-- <ClCardContact v-for="contact in allUsers" :key="contact.id">
          {{ contact.fullName }}
        </ClCardContact> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ClContactsAll",
  data() {
    return {
      allUsers: this.$store.state.users
    };
  },
  methods: {
    addNewRoute() {
      console.log("eo me cliked");
      this.$router.push("/add-new");
    }
  },
  created() {
    console.log("daaaj ", this.allUsers);
  }
};
</script>

<style>
</style>