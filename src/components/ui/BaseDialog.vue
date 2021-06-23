<template>
  <teleport to="body">
    <div @click="$emits('close')"></div>
    <div :class="backOverlay"></div>
    <dialog open :class="dialogStyle">
      <header class="p-4 w-full text-white bg-indigo-700">
        <slot name="title">
          <h1 class="font-bold text-lg">{{ title }}</h1>
        </slot>
      </header>
      <section class="p-4">
        <slot name="message"> </slot>
      </section>
      <menu class="flex justify-self-end m-0 p-4">
        <slot name="actions">
          <base-button @click="$emits('close')">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: ["title"],
  emits: ["close"],
  computed: {
    backOverlay() {
      return "fixed z-10 top-0 left-0 h-full w-full bg-black opacity-75";
    },
    dialogStyle() {
      return "fixed  z-20 md:left-calc md:w-40 top-20vh left-25% p-0 m-0 bg-white rounded-2xl  overflow-hidden";
    },
  },
};
</script>
