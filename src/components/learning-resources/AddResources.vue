<template>
  <base-dialog v-if="InvalidInput" title="Invalid Input" @close="confirmError">
    <template #message>
      <p>At least one of your inputs is empty .</p>
      <p>so please check your inputs .</p>
    </template>
    <template #actions>
      <base-button @click="confirmError" class="relative left-80%">Okay</base-button>
    </template>
  </base-dialog>
  <div class="pt-5 flex justify-center">
    <base-card>
      <form @submit.prevent="submitData">
        <div class="flex flex-col">
          <label for="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            ref="titleInput"
            :class="addStyle"
          />
        </div>
        <div class="flex flex-col mt-2">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            ref="descInput"
            :class="addStyle"
          >
          </textarea>
        </div>
        <div class="flex flex-col mt-2">
          <label for="link">Link</label>
          <input
            id="link"
            name="link"
            type="url"
            ref="linkInput"
            :class="addStyle"
          />
        </div>
        <div class="mt-2">
          <base-button type="submit">Add</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  inject: ["addResource"],
  data() {
    return {
      InvalidInput: false,
    };
  },
  methods: {
    submitData() {
      const titleVal = this.$refs.titleInput.value;
      const descVal = this.$refs.descInput.value;
      const linkVal = this.$refs.linkInput.value;

      if (this.checkInputs(titleVal, descVal, linkVal)) {
        return;
      }

      this.addResource(titleVal, descVal, linkVal);
    },
    checkInputs(title, desc, link) {
      if (title.trim() == "" || desc.trim() == "" || link.trim() == "") {
        this.InvalidInput = true;
        return true;
      }
      return false;
    },
    confirmError(){
      this.InvalidInput=false
    }
  },
  computed: {
    addStyle() {
      return "focus:outline-none focus:border-indigo-500 border-2 border-gray-300";
    },
  },
};
</script>