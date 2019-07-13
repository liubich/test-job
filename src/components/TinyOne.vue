<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class = "navbar__logo logo">
        <img class="logo__image" alt="fingerprint" src="data:image/png;base64,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">
        <p class="logo__brand-name">tinyone</p>
      </div>
      <ul class = "navbar__navitems navitems">
        <li
          class="navitems__item"
          v-for="(navItem, index) in navItems"
          :key="index"
        >
        <a
          class="navitems__item-text"
          href="#"
          :style="{ 'font-family': navItem.font }"
        >
            {{ navItem.text }}
        </a>
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

@font-face {
    font-family: 'Helvetica Neue';
    src: url('../../public/font/helveticaneuebold-webfont.woff2') format('woff2'),
         url('../../public/font/helveticaneuebold-webfont.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

.navbar {
  max-width: 1924px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  background-color: #fcdb00;
}

.navbar__container {
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
}

.navbar__logo {
  display: flex;
  align-items: center;
}

.logo__image {
  margin: 0 8px;
  height: 43px;
  width: 43px;
}

.logo__brand-name {
  font-size: 30px;
  font-family: 'PT Sans';
  font-weight: bold;
}

.navbar__navitems {
  display: flex;
  cursor: pointer;
  align-items: center;
  list-style: none;
}

.navbar__navitems :last-child {
  width: initial;
  margin-right: 8px;
}

.navitems__item {
  width: 150px;
}


.navitems__item-text {
  font-weight: bold;
  font-size: 22px;
  color: black;
  text-decoration: none;
}

.navitems__item-text:hover {
  transition: color 1s;
  color: white;
}

</style>
