<template>
  <label
    class="gw-uploader"
    :class="computedClasses"
    @dragover.prevent
    @drop="onDrop"
  >
    <div class="drop display-inline align-center">
      <!-- <div class="helper"></div> -->
      <label class="display-inline">
        <span v-if="name"> {{ name }}</span>
        <span class="upload-button" v-else
          >Drag and drop a file or click for upload</span
        >
        <input
          :data-required="required"
          ref="uploader"
          type="file"
          name="image"
          @change="onChange"
        />
      </label>
      <div
        class="hidden display-inline align-center"
        v-if="image && showThumbnail"
        :class="{ image: true }"
      >
        <img :src="image" alt="" class="img" />
      </div>
      <span
        v-if="image && name"
        class="btn right"
        @click.prevent="removeFile"
        :id="'uploader_btnRemove_' + label"
        >&#x2715;</span
      >
    </div>
    <transition name="slidefade">
      <span v-if="hasError" class="gw-input-error"> {{ errorMessages }} </span>
    </transition>
  </label>
</template>

<script>
export default {
  name: "ClUploader",
  props: {
    required: {
      type: Boolean,
      required: false
    },
    maxFileSize: {
      type: Number,
      required: false,
      default: 10000000
    },
    label: {
      type: String,
      required: false
    },
    showThumbnail: {
      type: Boolean,
      default: true,
      required: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorMessages: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      image: "",
      name: ""
    };
  },
  computed: {
    computedClasses() {
      return {
        "is--readonly": this.readonly,
        "is--disabled": this.disabled,
        "has-errors": this.hasError
      };
    }
  },
  methods: {
    onDrop: function(e) {
      e.stopPropagation();
      e.preventDefault();
      let files = e.dataTransfer.files;
      this.createFile(files[0]);
    },
    onChange(e) {
      let files = e.target.files;
      this.createFile(files[0]);
    },
    createFile(file) {
      if (
        !(
          file.type.match("image.*") ||
          file.type.indexOf("application/pdf") > -1
        )
      ) {
        this.$Notify({
          type: "error",
          title: "Error!",
          message: "Only image and pdf files are supported!"
        });
        return;
      }
      if (this.maxFileSize && file.size > this.maxFileSize) {
        this.$Notify({
          type: "error",
          title: "Error!",
          message: "Max file size is " + this.maxFileSize / 1e6 + " MBs!"
        });
        return;
      }
      let reader = new FileReader();
      var self = this;

      reader.onload = function(e) {
        self.image = e.target.result;
        self.$emit("fileChanged", e.target.result);
      };
      this.name = file.name;
      reader.readAsDataURL(file);
    },
    removeFile() {
      this.image = "";
      this.name = "";
      this.$refs.uploader.value = "";
      this.$emit("fileChanged", null);
    }
  }
};
</script>

<style lang="scss" scoped>
.gw-uploader {
  min-height: 100px;
  border: 2px dashed red;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  float: right;
}
.btn {
  //   font-family: $primary_font;
  // border: 0;
  color: black;
  cursor: pointer;
  // display: inline-block;
  padding: 0px 15px;
  // position: relative;
}

input[type="file"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.align-center {
  text-align: center;
}

.upload-button {
  cursor: pointer;
}

.display-inline {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.4px;
  float: left;
  color: black;
  display: inline-block;
  vertical-align: middle;
}

.img {
  border: 1px solid #f6f6f6;
  display: inline-block;
  height: auto;
  max-height: 80%;
  max-width: 80%;
  width: auto;
}

.drop {
  background-color: green;
  border-radius: 4px;
}
.gw-input-error {
  display: block;
  position: absolute;
  font-size: 10px;
  line-height: 1;
  margin-top: 44px;
  letter-spacing: 0.7px;
  color: #f44336;
}
</style>
