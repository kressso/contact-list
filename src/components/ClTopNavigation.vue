<template>
  <div class="header__nav">
    <div class="icons-wrap">
      <ClSvgArrowBack v-if="backBtn" @click.native="redirectBack($event)" />
      <div class="icons-right">
        <ClSvgHart
          v-if="favBtn"
          @click.native="toggleFavorite($event)"
          :class="{ 'is-favorite': user.isFavorite }"
        />
        <ClSvgEdit v-if="editBtn" @click.native="handleClick($event)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClTopNavigation",
  props: {
    user: {
      type: Object,
      default: function() {
        return {};
      }
    },
    backBtn: {
      type: Boolean,
      default: true
    },
    favBtn: {
      type: Boolean,
      default: true
    },
    editBtn: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleFavorite() {
      this.$store.commit("toggleFavorite", this.user._id);
    },
    redirectBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>