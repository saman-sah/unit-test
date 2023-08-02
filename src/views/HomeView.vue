<template>
  <div class="home">
    <Nav />
    <Parent />
    <img alt="Vue logo" src="../assets/intro.jpeg" style="max-width: 90%;">
    <h1>Snapshot - Router</h1>
    <TodoApp />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoApp from '@/components/TodoApp.vue'
import Nav from "@/components/Nav.vue"
import Parent from "@/components/Parent.vue"
export default {
  name: 'HomeView',
  components: {
    TodoApp,
    Nav,
    Parent
  }
}
</script>
