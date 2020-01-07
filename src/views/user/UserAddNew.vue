<template>
  <div>
    <h1>Add New User</h1>
    <ClButton @click="saveUser"> Save </ClButton>
    <ClButton @click="redirectBack" color="secondary"> Cancel </ClButton>
  </div>
</template>

<script>
export default {
  name: "ClUserAddNew",
  methods: {
    redirectBack() {
      this.$router.go(-1);
    },
    saveUser() {
      this.$router.push("/all");
    }
  }
};
</script>

<style>
</style>