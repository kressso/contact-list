<template>
  <button
    v-if="!to"
    class="btn"
    :disabled="disabled"
    :size="size"
    :color="color"
    :class="customClass"
    @click.capture="handleClick($event)"
  >
    <slot>!</slot>
  </button>
  <a
    v-else
    :href="to"
    class="btn"
    :disabled="disabled"
    :size="size"
    :color="color"
    :class="customClass"
    @click.capture="handleClick($event)"
    @click.capture.native="handleClick($event)"
  >
    <slot>!</slot>
  </a>
</template>

<script>
export default {
  name: "ClButton",
  props: {
    to: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "primary",
      validator: value => {
        return ["primary", "secondary"].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      default: "large",
      validator: value => {
        return ["large", "small"].indexOf(value) !== -1;
      }
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
        "btn--primary": this.color === "primary",
        "btn--secondary": this.color === "secondary",
        "btn--lg": this.size === "large",
        "btn--sm": this.size === "small",
        disabled: this.disabled
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
