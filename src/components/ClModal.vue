<template>
  <transition name="fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal__header">
          <slot name="header"> <p>Delete</p> </slot>
        </div>
        <div class="modal__body">
          <slot name="body">
            <p>Are you sure you want to delete this contact?</p>
          </slot>
        </div>

        <div class="modal__footer">
          <slot name="footer">
            <ClButton color="secondary" type="button" @click.native="close"
              >Cancel</ClButton
            >

            <ClButton @click.native="removeUser">Delete</ClButton>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "ClModal",
  methods: {
    close() {
      this.$emit("close");
      this.$store.commit("toggleModal");
    },
    removeUser() {
      this.$emit("remove-user");
      this.$store.commit("toggleModal");
    }
  }
};
</script>

<style lang='scss'>
</style>