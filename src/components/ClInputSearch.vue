<template>
  <form class="form">
    <label class="label"
      ><ClSvgSearch />
      <input
        type="text"
        aria-label="Search"
        name="name"
        class="search"
        v-model="search"
        @input="$emit('change', search)"
      />
    </label>
  </form>
</template>

<script>
export default {
  name: "ClInputSearch",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style>
</style>