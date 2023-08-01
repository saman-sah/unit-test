<template>
  <button @click="increament">clicks: {{ counter }}</button>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increament() {
            this.counter++;
            this.$emit("count", this.counter, "Hello")
        }
    }
}
</script>

<style>

</style>