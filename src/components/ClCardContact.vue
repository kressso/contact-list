<template>
  <div v-if="!addNew" class="card" :class="clazz">
    <div class="img">
      <slot name="img"></slot>
    </div>
    <p class="name text--14-18 bold"><slot>No name entered</slot></p>
    <div class="icons">
      <ClSvgHart
        @click.native="toggleFavorite($event)"
        :class="{ 'is-favorite': user.isFavorite }"
      />
      <ClSvgEdit @click.native="editUser($event)" />
      <ClSvgTrash @click.native="deleteUser($event)" />
    </div>
  </div>
  <div v-else-if="addNew" class="card card-add" @click="addNewRoute($event)">
    <ClSvgCross />
    <p class="card-add__title small">Add new</p>
  </div>
</template>

<script>
export default {
  name: "ClCardContact",
  props: {
    addNew: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
      default: () => ({})
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clazz() {
      return {
        // card__add: this.addNew
      };
    }
  },
  methods: {
    toggleFavorite() {
      console.log("kliknuto ", this.user._id);
      this.$store.commit("toggleFavorite", this.user._id);
    },
    deleteUser() {
      this.$store.commit("deleteUser", this.user._id);
    },
    editUser() {
      console.log("ruta za edit");
      // this.$router.push("/add-new");
    },
    addNewRoute() {
      this.$router.push("/add-new");
    }
  }
};
</script>

<style>
</style>