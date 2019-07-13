<template>
  <div id="app">
    <TinyOne />
  </div>
</template>

<script>
import TinyOne from './components/TinyOne.vue';

export default {
  name: 'app',
  components: {
    TinyOne,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
