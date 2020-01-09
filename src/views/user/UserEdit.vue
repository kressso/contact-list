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
        EDIT je OVO
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
            v-model="form.fullName"
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

          <div
            class="input__double--holder"
            v-for="(item, index) in form.numbers"
            :key="index"
          >
            <div class="input__double">
              <input
                class="input input__double--align-first"
                type="text"
                v-model="item.phone"
                placeholder="Number"
              />
              <div class="input__double--align-second">
                <input
                  class="input"
                  type="text"
                  v-model="item.place"
                  placeholder="Label"
                />
                <ClButtonAdd remove @click="removeField($event, index)" />
              </div>
            </div>
          </div>

          <ClButtonAdd @click.prevent="addNewNumberField"
            >Add number</ClButtonAdd
          >
        </div>
      </form>
      <div class="btn__wrap">
        <ClButton color="secondary" @click.native="redirectBack($event)"
          >Cancel</ClButton
        >
        <ClButton @click.native="saveUser($event)">Save</ClButton>
      </div>
    </div>
    <pre>{{ form }}</pre>
  </div>
</template>

<script>
export default {
  name: "ClUserEdit",
  data() {
    return {
      singleUser: {},
      form: {
        // _id: "",
        fullName: String,
        email: String,
        isFavorite: Boolean,
        numbers: [
          {
            phone: String,
            place: String,
            id: Number
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
        return x.phone.length > 0 || x.place !== "";
      });

      this.form.numbers.push({ phone: "", place: "" });
    },
    removeField(e, index) {
      this.form.numbers = this.form.numbers.filter(x => {
        return x.id !== index;
      });
    },
    saveUser() {
      console.log("daj ", this.form);
      // this.$store.commit("saveEditedUser", this.form);
      // this.$router.push(`/all`);
    }
  },
  created() {
    this.form = this.$store.getters.getSingleUser(this.$route.params.id);
  }
};
</script>

//TODO: kad obrises jedan, provjeri kako stoje stvari s tim indexom kad vise nije po redu, ili staviti neki generirani isto!

// TODO: brisanje zadnjeg broja ne mozes!

// TODO: mozda uopce ne moras nesto posebno spremati jer vec removeField brise, pogledaj samo izmjenu maila i imena

<style>
</style>