<template>
  <nav class="nav">
    <router-link to="/all" class="text--14-18" exact>All contacts</router-link>
    <router-link to="/favorites" class="text--14-18" exact
      >My favorites</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "ClTabNavigation"
};
</script>

<style>
</style>