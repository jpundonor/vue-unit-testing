<template>
  <div>
    <Counter />
    <Parent />
  </div>
</template>

<script setup>
import Counter from "@/components/Counter.vue";
import Parent from "@/components/Parent.vue";
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
