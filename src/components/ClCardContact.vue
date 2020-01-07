<template>
  <div v-if="!addNew" class="card" :class="clazz">
    <div class="img">
      <slot name="img"></slot>
    </div>
    <p class="name text--14-18 bold"><slot>No name entered</slot></p>
    <div class="icons">
      <ClSvgHart @click.native="handleClick($event)" />
      <ClSvgEdit @click.native="handleClick($event)" />
      <ClSvgTrash @click.native="handleClick($event)" />
    </div>
  </div>
  <div v-else-if="addNew" class="card card-add" @click="handleClick($event)">
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
    handleClick() {
      console.log("kliknuto");
      this.$emit("click", event);
    }
  }
};
</script>

<style>
</style>