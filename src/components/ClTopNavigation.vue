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
        <ClSvgEdit v-if="editBtn" @click.native="editUser($event)" />
        <ClSvgTrash v-if="delBtn" @click.native="deleteUser($event)" />
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
    },
    delBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    redirectBack() {
      if (this.delBtn) {
        this.$router.push(`/user/${this.$route.params.id}`);
      } else {
        this.$router.push("/all");
      }
    },
    toggleFavorite() {
      this.$store.commit("toggleFavorite", this.user._id);
    },
    editUser() {
      this.$router.push(`/user/${this.user._id}/edit`);
    },
    deleteUser() {
      this.$store.commit("toggleModal");
      this.$emit("deleteuser", this.user._id);
    }
  }
};
</script>

<style>
</style>