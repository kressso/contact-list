<template>
  <div class="user-single user-add-new">
    <div
      class="img-desktop"
      :class="{ 'img--remove': image, 'img--add': !image }"
    >
      <div v-if="!image">
        <label for="upload"><ClSvgUpload /></label>
        <input id="upload" type="file" @change="onFileChange" />
      </div>
      <div v-else>
        <ClSvgRemove @click.native="removeImage" />
      </div>
      <img v-if="image" :src="image" />
    </div>

    <ClTopNavigation :fav-btn="false" :edit-btn="false" :delBtn="true" />

    <div class="user-single__header user-single__header--visibility">
      <div
        class="img-mobile"
        :class="{ 'img--remove': image, 'img--add': !image }"
      >
        <div v-if="!image">
          <label for="upload"><ClSvgUpload /></label>
          <input id="upload" type="file" @change="onFileChange" />
        </div>
        <div v-else>
          <ClSvgRemove @click.native="removeImage" />
        </div>
        <img v-if="image" :src="image" />
      </div>
      <div class="icons-left">
        <ClSvgArrowBack @click.native="redirectBack($event)" />
      </div>
      <div
        class="icons-right icons-right--del-position"
        @click="deleteUserModal($event)"
      >
        Delete
        <ClSvgTrash />
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
        <ClButton
          color="secondary"
          type="button"
          @click.native="redirectBack($event)"
          >Cancel</ClButton
        >
        <ClButton @click.native="saveUser($event)">Save</ClButton>
      </div>
    </div>
    <ClModal v-show="$store.state.showModal" @remove-user="deleteUser" />
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "ClUserEdit",
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
        // _id: "",
        fullName: String,
        email: String,
        isFavorite: Boolean,
        image: "",
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
    deleteUser() {
      this.$store.commit("deleteUser", this.$route.params.id);
      this.$router.push(`/all`);
    },
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

      //TODO: missing validation for file type

      reader.onload = e => {
        vm.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = "";
    },
    redirectBack() {
      this.$router.push(`/user/${this.$route.params.id}`);
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
      this.$store.commit("saveEditedUser", this.form);
      this.$router.push(`/user/${this.$route.params.id}`);
    },
    deleteUserModal() {
      this.$store.commit("toggleModal");
    }
  },
  created() {
    this.form = JSON.parse(
      JSON.stringify(this.$store.getters.getSingleUser(this.$route.params.id))
    );
    if (this.form.image) {
      this.image = this.form.image;
    }
  }
};
</script>

<style>
</style>