<template>
  <div class="user-single">
    <div class="img-desktop"></div>
    <ClTopNavigation :user="singleUser" />
    <div class="user-single__header user-single__header--visibility">
      <div class="img"></div>
      <div class="icons-left">
        <ClSvgArrowBack @click.native="handleClick($event)" />
        <p class="name text--21-28 bold">{{ this.singleUser.fullName }}</p>
      </div>
      <div class="icons-right">
        <ClSvgHart @click.native="handleClick($event)" />
        <ClSvgEdit @click.native="handleClick($event)" />
      </div>
    </div>
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
      console.log("kliknuto");
      this.$emit("click", event);
    },
    toggleFavorite() {
      this.$store.commit("toggleFavorite", this.singleUser._id);
    },
    redirectBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.singleUser = this.$store.getters.getSingleUser(this.$route.params.id);
    console.log("router1 ", this.singleUser);
  }
};
</script>

<style>
</style>