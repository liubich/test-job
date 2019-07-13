<template>
  <nav>
    <ul>
      <li
        v-for="(navItem, index) in navItems"
        :key="index"
        :style="{ 'font-family': navItem.font }"
      >
        {{ navItem.text }}
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: 'TinyOne',
  props: {
    navItems: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
