<template>
  <div id="app">
    <ClHeader />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
</style>
