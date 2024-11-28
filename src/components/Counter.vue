<template>
    <div class="counter">
        <h1>Counter: {{ counter }}</h1>
        <div>
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Counter',
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<style></style>