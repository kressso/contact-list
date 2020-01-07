<template>
  <div class="user-single">
    <div class="img-desktop"></div>
    <div class="user-single__nav">
      <div class="icons-wrap">
        <ClSvgArrowBack @click.native="handleClick($event)" />
        <div class="icons-right">
          <ClSvgHart @click.native="handleClick($event)" />
          <ClSvgEdit @click.native="handleClick($event)" />
        </div>
      </div>
    </div>
    <div class="user-single__header mobile">
      <div class="img"></div>
      <div class="icons-left">
        <ClSvgArrowBack @click.native="handleClick($event)" />
        <p class="name text--21-28 bold">Julia Roberts</p>
      </div>
      <div class="icons-right">
        <ClSvgHart @click.native="handleClick($event)" />
        <ClSvgEdit @click.native="handleClick($event)" />
      </div>
    </div>
    <div class="user-single__data">
      <div class="data-wrap">
        <p class="label">
          <ClSvgMail />
          email
        </p>
        <p class="field">addie.hernandez@gmail.com</p>
      </div>
      <div class="data-wrap">
        <p class="label">
          <ClSvgPhone />
          numbers
        </p>
        <div class="field">
          <div class="field__single">
            <p class="p small">HOME</p>
            <p>+385 21 546 456</p>
          </div>
          <div class="field__single">
            <p class="p small">WORK</p>
            <p>+385 21 546 456</p>
          </div>
          <div class="field__single">
            <p class="p small">CELL</p>
            <p>+385 21 546 456</p>
          </div>
          <div class="field__single">
            <p class="p small">HUSBAND</p>
            <p>+385 21 546 456</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClUserSingle",
  methods: {
    handleClick() {
      console.log("kliknuto");
      this.$emit("click", event);
    }
  }
};
</script>

<style>
</style>