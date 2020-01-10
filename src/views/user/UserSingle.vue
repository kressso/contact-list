<template>
  <div class="user-single">
    <div class="img-desktop">
      <img
        v-if="singleUser.image"
        :src="singleUser.image"
        :alt="singleUser.fullName"
      />
    </div>
    <ClTopNavigation :user="singleUser" />
    <div class="user-single__header user-single__header--visibility">
      <div class="img-mobile">
        <img
          v-if="singleUser.image"
          :src="singleUser.image"
          :alt="singleUser.fullName"
        />
      </div>
      <div class="icons-left">
        <ClSvgArrowBack @click.native="redirectBack($event)" />
        <p class="name text--21-28 bold">{{ this.singleUser.fullName }}</p>
      </div>
      <div class="icons-right">
        <ClSvgHart
          @click.native="toggleFavorite($event)"
          :class="{ 'is-favorite': singleUser.isFavorite }"
        />
        <ClSvgEdit @click.native="editUser($event)" />
      </div>
    </div>
    <img src="" alt="" />
    <div class="user-single__data">
      <div class="data-wrap">
        <p class="label">
          <ClSvgMail />
          email
        </p>
        <p class="field">{{ this.singleUser.email }}</p>
      </div>
      <div class="data-wrap">
        <p class="label">
          <ClSvgPhone />
          numbers
        </p>
        <div class="field">
          <div
            class="field__single"
            v-for="item in this.singleUser.numbers"
            :key="item._id"
          >
            <p class="p small">{{ item.place }}</p>
            <p>{{ item.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClUserSingle",
  data() {
    return {
      singleUser: {}
    };
  },
  methods: {
    handleClick() {
      this.$emit("click", event);
    },
    toggleFavorite() {
      this.$store.commit("toggleFavorite", this.singleUser._id);
    },
    redirectBack() {
      this.$router.push(`/all`);
    },
    editUser() {
      this.$router.push(`/user/${this.singleUser._id}/edit`);
    }
  },
  created() {
    this.singleUser = this.$store.getters.getSingleUser(this.$route.params.id);
  }
};
</script>

<style>
</style>