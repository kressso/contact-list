<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    :class="clazz"
    class="svg-icon svg-icon__cross"
  >
    <path
      d="M9.818 8.182V0H8.182v8.182H0v1.636h8.182V18h1.636V9.818H18V8.182z"
      fill-rule="nonzero"
      class="svg-icon__cross--inner"
    />
  </svg>
</template>

<script>
// TODO: add here color like hex or predefined colors
export default {
  name: "ClSvgCross",
  props: {
    color: {
      type: String,
      default: "black"
    },
    degree: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 18
    },
    height: {
      type: Number,
      default: 18
    }
  },
  computed: {
    clazz() {
      return {};
    }
  }
};
</script>

<style>
</style>