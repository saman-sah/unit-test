<template>
  <div>
    Parent
    <hr>
    <Child />
  </div>
</template>

<script>
import Child from "@/components/Child.vue"
export default {
    name: "Parent",
    components: {
        Child
    }
}
</script>

<style>

</style>