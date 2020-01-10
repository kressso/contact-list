<template>
  <div class="btn__add--position">
    <button
      class="btn__add"
      :disabled="disabled"
      :class="customClass"
      @click.capture="handleClick($event)"
      type="button"
    >
      <ClSvgCross :width="8" :height="8" />
    </button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ClButtonAdd",
  props: {
    remove: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customClass() {
      return {
        "btn--bg": this.background,
        disabled: this.disabled,
        remove: this.remove
      };
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      } else {
        this.$emit("click", event);
      }
    }
  }
};
</script>
