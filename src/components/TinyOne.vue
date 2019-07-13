<template>
  <nav class="navbar">
    <div class="container">
      <ul>
        <li
          v-for="(navItem, index) in navItems"
          :key="index"
          :style="{ 'font-family': navItem.font }"
          class="navbar__navitem"
        >
          {{ navItem.text }}
        </li>
      </ul>
    </div>
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
.navbar {
  display: flex;
  align-items: center;
}

.navbar__navitem {
  font-weight: bold;
  font-size: 22px;
}
.container {
  width: 100%;
  max-width: 960px;
}
</style>
