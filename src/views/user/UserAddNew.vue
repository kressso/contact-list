<template>
  <div class="user-single user-add-new">
    <div class="img-desktop"></div>
    <ClTopNavigation :fav-btn="false" :edit-btn="false" />
    <div class="user-single__header user-single__header--visibility">
      <div class="img">
        <ClSvgUpload />
      </div>
      <div class="icons-left">
        <ClSvgArrowBack @click.native="redirectBack($event)" />
      </div>
    </div>

    <div class="user-add-new__body">
      <form>
        <div class="form-item">
          <label for="name"><ClSvgPerson /> full name</label>
          <input
            class="input"
            id="name"
            type="text"
            v-model="form.name"
            placeholder="Full name"
          />
        </div>
        <div class="form-item">
          <label for="email"><ClSvgMail /> email</label>
          <input
            class="input"
            id="email"
            type="text"
            v-model="form.email"
            placeholder="Email"
          />
        </div>
        <div class="form-item">
          <label for="numbers"><ClSvgPhone /> numbers</label>
          <!-- <template v-for="(item, index) in form.numbers">
            <ClInputDouble :key="index" :item="item" />
          </template> -->

          <div
            class="input__double--holder"
            v-for="(item, index) in form.numbers"
            :key="index"
          >
            <div class="input__double">
              <input
                class="input input__double--align-first"
                type="number"
                v-model="item.number"
                placeholder="Number"
              />
              <div class="input__double--align-second">
                <input
                  class="input"
                  type="text"
                  v-model="item.label"
                  placeholder="Label"
                />
                <ClButtonAdd remove @click="removeField($event)" />
              </div>
            </div>
          </div>

          <ClButtonAdd @click.prevent="addNewNumberField"
            >Add number</ClButtonAdd
          >
        </div>
      </form>
      <div class="btn__wrap">
        <ClButton color="secondary" @click.native="redirectBack($event)">Cancel</ClButton>
        <ClButton>Save</ClButton>
      </div>
    </div>
    <pre>{{ form }}</pre>
  </div>
</template>

<script>
export default {
  name: "ClUserAddNew",
  data() {
    return {
      form: {
        name: "",
        email: "",
        numbers: [
          {
            number: 123123123,
            label: "Prviii"
          }
        ]
      }
    };
  },
  methods: {
    handleClick() {
      console.log("dasdasd");
    },
    redirectBack() {
      this.$router.go(-1);
    },
    addNewNumberField() {
      // prevent to add another field if last one is empty

      this.form.numbers = this.form.numbers.filter(x => {
        return x.number.length > 0 || x.label !== "";
      });

      this.form.numbers.push({ number: "", label: "" });
    },
    removeField(e) {
      console.log("remove", e);
    }
  },
  created() {
    // this.singleUser = this.$store.getters.getSingleUser(this.$route.params.id);
  }
};
</script>

<style>
</style>