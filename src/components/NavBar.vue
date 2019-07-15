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
          v-for="(navItem, index) in pageTexts.navItems"
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
      <div @click="toggleNavbarMenuIsActive()" class="navbar__menu-container">
        <div class="navbar__menu" :class="{navbar__menu_active: this.navbarMenuIsActive}"></div>
        <p class="navbar__menu-caption">{{pageTexts.menuText}}</p>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navbarMenuIsActive: false,
    };
  },
  methods: {
    toggleNavbarMenuIsActive() {
      this.navbarMenuIsActive = !this.navbarMenuIsActive;
    },
  },
  props: {
    pageTexts: {},
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

.navbar__menu-container {
  display: none;
}

@media screen and (max-width: 850px) {
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  margin: 0;
  padding: 5px 0;
  background-color: rgba(252, 219, 0, 0.75);
}

  .navitems {
    display: none;
  }

  .navbar__menu-container {
    padding-left: 55px;
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translate(-50%,-50%);
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .navbar__menu {
    width: 30px;
    height: 4px;
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    transition: .3s;
  }

  .navbar__menu:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    top: 11px;
    background-color: black;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    transition: .5s;
  }

  .navbar__menu:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    top: -11px;
    background-color: black;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    transition: .5s;
  }

  .navbar__menu_active {
    background-color: transparent;
    box-shadow: 0 3px 5px rgba(0,0,0,0);
  }

  .navbar__menu_active:before {
    top: 0;
    transform: rotate(135deg);
  }

  .navbar__menu_active:after {
    top: 0;
    transform: rotate(225deg);
  }

  .navbar__menu-caption {
    font-weight: bold;
    font-size: 20px;
    color: black;
  }
}
</style>
