<template>
  <button :class="addStyle" class="py-2 px-4 focus:outline-none">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    styles: {
      type: String,
      default: "btn",
    },
  },
  computed: {
    addStyle() {
      if (this.styles == "btn") {
        return " hover:bg-indigo-600 hover:border-indigo-600 focus cursor-pointer text-white border-2 bg-indigo-800 border-indigo-800 border-solid";
      } else if (this.styles == "btn flat") {
        return " bg-transparent text-indigo-800 border-none hover:bg-indigo-200";
      } else {
        return "";
      }
    },
  },
};
</script>