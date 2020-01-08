<template>
  <div class="input__double">
    <input
      class="input input__double--align-first"
      type="number"
      v-model="number"
      placeholder="Number"
    />
    <div class="input__double--align-second">
      <input class="input" type="text" v-model="label" placeholder="Label" />
      <ClButtonAdd remove />
    </div>
  </div>
</template>

<script>
export default {
  name: "ClInputDouble",
  props: {
    firstFieldName: String,
    secondFieldName: String,
    item: Object
  },
  data() {
    return {
      number: "",
      label: ""
    };
  },
  created() {}
};
</script>

<style>
</style>