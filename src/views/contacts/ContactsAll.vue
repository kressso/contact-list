<template>
  <div class="contacts">
    <ClInputSearch @change="searchEmit" />

    <section class="section-1 base-wrap">
      <div class="grid-wrap">
        <ClCardContact add-new></ClCardContact>

        <template v-for="user in filteredContent">
          <ClCardContact
            :user="user"
            :key="user._id"
            @deleteuser="deleteUserCard"
          >
            {{ user.fullName }}
          </ClCardContact>
        </template>
      </div>
    </section>

    <ClModal
      v-show="$store.state.showModal"
      @close="cancelModalData"
      @remove-user="deleteUserModal"
    />
  </div>
</template>

<script>
export default {
  name: "ClContactsAll",
  data() {
    return {
      search: "",
      activeUser: ""
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
    },
    cancelModalData() {
      this.activeUser = "";
    },
    deleteUserCard(userId) {
      console.log("dosao emit", userId);
      this.activeUser = userId;
    },
    deleteUserModal() {
      this.$store.commit("deleteUser", this.activeUser);
      this.activeUser = "";
    }
  }
};
</script>

<style>
</style>