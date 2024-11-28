<template>
  <div>
    <h1>Child</h1>
    <input type="text" v-model="message" />
    <button @click="sendData">Send Data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendData() {
      this.$emit("send-data", this.message);
    },
  },
};
</script>
