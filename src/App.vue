<template>
<the-header :title="appHeader"></the-header>
<the-resources></the-resources>
</template>
<script>

import TheHeader from '@/components/ui/TheHeader'
import TheResources from './components/learning-resources/TheResources.vue';
export default {
  components: {
    TheHeader,
    TheResources
  },
  data() {
    return {
      appHeader:'RememberMe'
    };
  },
};
</script>