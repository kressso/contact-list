<template>
  <div>
    <ClTabNavigation />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ClContacts"
};
</script>

<style>
</style>