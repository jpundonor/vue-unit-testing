<template>
  <h1>Parent</h1>
  <p>Received data: {{ receivedData }}</p>
  <Child @send-data="handleData" />
</template>

<script>
import Child from "./Child.vue";

export default {
  components: {
    Child,
  },
  data() {
    return {
      receivedData: "",
    };
  },
  methods: {
    handleData(data) {
      this.receivedData = data;
    },
  },
};
</script>
