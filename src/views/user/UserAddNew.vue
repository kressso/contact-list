<template>
  <div class="user-single user-add-new">
    <div
      class="img-desktop"
      :class="{ 'img--remove': image, 'img--add': !image }"
    >
      <div v-if="!image">
        <label for="upload"><ClSvgUpload /></label>
        <input
          id="upload"
          type="file"
          accept="image/*"
          @change="onFileChange"
        />
      </div>
      <div v-else>
        <ClSvgRemove @click.native="removeImage" />
      </div>
      <img v-if="image" :src="image" />
    </div>

    <ClTopNavigation :fav-btn="false" :edit-btn="false" />

    <div class="user-single__header user-single__header--visibility">
      <div
        class="img-mobile"
        :class="{ 'img--remove': image, 'img--add': !image }"
      >
        <div v-if="!image">
          <label for="upload"><ClSvgUpload /></label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            @change="onFileChange"
          />
        </div>
        <div v-else>
          <ClSvgRemove @click.native="removeImage" />
        </div>
        <img v-if="image" :src="image" />
      </div>
      <div class="icons-left">
        <ClSvgArrowBack @click.native="redirectBack($event)" />
      </div>
    </div>

    <div class="user-add-new__body">
      <form>
        <div
          class="form-item"
          :class="{ 'form-item--error': $v.form.fullName.$error }"
        >
          <label for="name"><ClSvgPerson /> full name</label>
          <input
            class="input"
            id="name"
            type="text"
            v-model="form.fullName"
            placeholder="Full name"
          />
        </div>
        <div
          class="form-item"
          :class="{ 'form-item--error': $v.form.email.$error }"
        >
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
                type="number"
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
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "ClUserAddNew",
  validations: {
    form: {
      fullName: { required, min: minLength(4) },
      email: { required, email }
    }
  },
  data() {
    return {
      image: "",
      form: {
        _id:
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15),
        fullName: "",
        email: "",
        isFavorite: false,
        numbers: [
          {
            phone: "",
            place: ""
          }
        ]
      }
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      /*eslint-disable-next-line */
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      // TODO: missing validation for file type

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = "";
    },
    redirectBack() {
      this.$router.push(`/all`);
    },
    addNewNumberField() {
      // prevent to add another field if last one is empty
      this.form.numbers = this.form.numbers.filter(x => {
        return x.phone.length > 0 || x.place !== "";
      });

      this.form.numbers.push({ phone: "", place: "" });
    },
    removeField(e, index) {
      this.form.numbers.splice(index, 1);
    },
    saveUser() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.form.image = this.image;
      this.$store.commit("saveNewUser", this.form);
      this.$router.push(`/all`);
    }
  },
  created() {}
};
</script>

<style>
</style>