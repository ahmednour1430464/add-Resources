<template>
  <li class="pt-5 flex justify-center">
    <base-card >
      <header class="flex flex-row justify-between">
        <h1 class="font-bold">{{ title }}</h1>
        <base-button styles="btn flat" @click="deleteResource(id)">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a class="text-yellow-700" :href="link">View Resources</a>
      </nav>
    </base-card>
  </li>
</template>
<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: { BaseButton },
  props: ["id","title", "description", "link"],
  inject:['deleteResource']
};
</script>