<template >
  <div class="pt-5 flex justify-center">
    <base-card>
      <base-button
        @click="selectTab('stored-resources')"
        :styles="addStylesShowResources"
      >
        Show Resources</base-button
      >
      <base-button
        @click="selectTab('add-resources')"
        :styles="addStylesAddResources"
      >
        Add Resources</base-button
      >
    </base-card>
  </div>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
<script>
import StoredResources from "./StoredResources.vue";
import AddResources from "./AddResources.vue";
export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      Resources: [
        {
          id: "official-guide",
          title: "Official title",
          description: "the official vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google ",
          link: "https://google.com",
        },
      ],
    };
  },
  computed: {
    addStylesShowResources() {
      return this.selectedTab === "stored-resources" ? "btn flat" : "btn";
    },
    addStylesAddResources() {
      return this.selectedTab === "add-resources" ? "btn flat" : "btn";
    },
  },
  provide() {
    return {
      resources: this.Resources,
      addResource: this.addResourceToStoredResources,
      deleteResource: this.deleteResourceFromStoredResources,
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    addResourceToStoredResources(title, description, link) {
      const resource = {
        id: new Date().toISOString,
        title: title,
        description: description,
        link: link,
      };
      this.Resources.unshift(resource);
      this.selectedTab = "stored-resources";
    },
    deleteResourceFromStoredResources(resId) {
      const resIndex = this.Resources.findIndex((res) => res.id === resId);
      this.Resources.splice(resIndex, 1);
    },
  },
};
</script>