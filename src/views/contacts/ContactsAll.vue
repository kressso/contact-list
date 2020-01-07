<template>
  <div class="contacts">
    <form class="form">
      <input
        type="text"
        aria-label="Search"
        name="firstname"
        placeholder="ICON"
        class="search"
      />
      <!-- <input
        type="search"
        aria-label="Search"
        name="firstname"
        placeholder="ICON"
        class="search"
      /> -->
    </form>
    <section class="section-1 base-wrap">
      <!-- <ClButton @click="test"> Klik me </ClButton>
    <ClButton @click="test" disabled> Klik me </ClButton>
    <ClButton @click="test" color="secondary"> Klik me </ClButton> -->
      <!-- <br />
    <br />
    <br /> -->
      <div class="grid-wrap">
        <ClCardContact add-new @click="addNewRoute"></ClCardContact>
        <ClCardContact>Ivan Delibasic</ClCardContact>
        <ClCardContact>Denis Susac</ClCardContact>
        <ClCardContact>Mirko Fodor</ClCardContact>
        <ClCardContact>Denis Susac</ClCardContact>
        <ClCardContact>Ivan Delibasic</ClCardContact>
        <ClCardContact>Mirko Fodor</ClCardContact>
        <ClCardContact>Ivan Delibasic</ClCardContact>
        <ClCardContact>Denis Susac</ClCardContact>
        <ClCardContact>Ivan Delibasic</ClCardContact>
        <ClCardContact>Ivan Delibasic</ClCardContact>
        <ClCardContact>Denis Susac</ClCardContact>
        <ClCardContact>Ivan Delibasic</ClCardContact>
        <ClCardContact>Mirko Fodor</ClCardContact>
        <ClCardContact>Denis Susac</ClCardContact>
        <ClCardContact>Mirko Fodor</ClCardContact>
        <ClCardContact>Ivan Delibasic</ClCardContact>
        <ClCardContact>Mirko Fodor</ClCardContact>
        <ClCardContact>Ivan Delibasic</ClCardContact>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ClContactsAll",
  methods: {
    addNewRoute() {
      console.log("eo me cliked");
      this.$router.push("/add-new");
    }
  }
};
</script>

<style>
</style>