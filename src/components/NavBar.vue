<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class = "navbar__logo logo">
        <img class="logo__image" alt="fingerprint" src="../../public/img/fingerprint.png">
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
  name: 'NavBar',
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
  padding-bottom: 12px;
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
  font-family: 'PT Sans', sans-serif;
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

@media screen and (max-width: 850px) {
  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    margin: 0;
    padding: 0;
    background-color: rgba(252, 219, 0, 0.75);
  }

  .navitems {
    display: none;
  }
}
</style>
