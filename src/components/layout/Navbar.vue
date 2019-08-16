<template>
  <nav
    class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar"
    :class="{ 'top-nav-collapse': changeNavBg }"
  >
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <router-link to="/" class="navbar-brand">
        <img src="./../../assets/img/logo.png" alt />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto w-100 justify-content-end clearfix">
          <li class="nav-item" v-for="(navItem, index) in navItems" :key="index">
            <button class="nav-link" @click="moveTo(index)">{{ $t(navItem.title) }}</button>
          </li>
          <li class="nav-item">
            <div class="nav-link">|</div>
          </li>
          <li class="nav-item">
            <div v-on:click="handleChangeLang()" class="nav-link">{{ language }}</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import VueScrollto from "vue-scrollto";
import { mapState } from "vuex";

export default {
  name: "Navbar",
  computed: mapState(["lang"]),
  data: function() {
    return {
      navItems: [
        {
          title: "mainNavTitle1",
          linkTo: "/"
        },
        {
          title: "mainNavTitle2",
          linkTo: "#hero-area"
        },
        {
          title: "mainNavTitle3",
          linkTo: "#hero-area"
        },
        {
          title: "mainNavTitle4",
          linkTo: "#hero-area"
        },
        {
          title: "mainNavTitle5",
          linkTo: "#hero-area"
        },
        {
          title: "mainNavTitle6",
          linkTo: "#hero-area"
        },
        {
          title: "mainNavTitle7",
          linkTo: "#hero-area"
        },
        {
          title: "mainNavTitle8",
          linkTo: "/about"
        },
        {
          title: "mainNavTitle9",
          linkTo: "#hero-area"
        }
      ],
      selected: "",
      changeNavBg: false,
      optionLangs: [
        {
          text: "Tiếng Việt",
          value: "vi"
        },
        {
          text: "English",
          value: "en"
        }
      ],
      language: ""
    };
  },
  methods: {
    handleChangeLang() {
      if (this.language === "English") {
        this.$store.dispatch("setLang", "en");
        this.language = "Tiếng Việt";
      } else {
        this.$store.dispatch("setLang", "vi");
        this.language = "English";
      }
    },
    moveTo: function(index) {
      this.$refs.fullpage.$fullpage.moveTo(index, true);
    },

    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      this.changeNavBg = currentScrollPosition > 50;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  mounted() {
    this.selected = window.localStorage.getItem("language") || "vi";
    if (this.selected === "vi") {
      this.language = "English";
    } else {
      this.language = "Tiếng Việt";
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  position: relative;
  padding: 0px;
}
.top-nav-collapse {
  background: #fff;
  z-index: 999999;
  top: 0px !important;
  box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.06);
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  .navbar-brand {
    top: 0px;
  }
  background: #fff !important;
  .navbar-nav .nav-link {
    color: #585b60 !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    &:hover {
      cursor: pointer;
      color: $preset !important;
    }
  }
}
.top-nav-collapse .navbar-nav li.active a.nav-link {
  color: $preset !important;
}
.indigo {
  background: transparent;
}
.menu-bg {
  background: transparent;
}
.navbar-expand-md .navbar-nav .nav-link {
  i {
    font-size: 14px;
    margin-left: 5px;
    vertical-align: middle;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
}
.navbar-expand-md .navbar-nav .nav-link {
  font-family: "Titillium Web", sans-serif;
  color: #585b60;
  font-weight: 600;
  padding: 8px 10px;
  line-height: 40px;
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.navbar-expand-md .navbar-nav li a:hover,
.navbar-expand-md .navbar-nav li .active > a,
.navbar-expand-md .navbar-nav li a:focus {
  color: $preset;
  outline: none;
}
.navbar-expand-md .navbar-nav .active > .nav-link,
.navbar-expand-md .navbar-nav .nav-link.active,
.navbar-expand-md .navbar-nav .nav-link.open,
.navbar-expand-md .navbar-nav .open > .nav-link {
  color: $preset !important;
}
.navbar-expand-md .navbar-nav .nav-link:focus,
.navbar-expand-md .navbar-nav .nav-link:hover {
  color: $preset !important;
}
.navbar {
  padding: 0;
  li.active a.nav-link {
    color: $preset;
  }
}
.menu-white {
  .navbar-nav .nav-link {
    color: #fff;
  }
}
.dropdown-toggle::after {
  display: none;
}
.dropdown-menu {
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
  z-index: 99;
  min-width: 210px;
  background-color: #fff;
  white-space: nowrap;
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  animation: fadeIn 0.4s;
  -webkit-animation: fadeIn 0.4s;
  -moz-animation: fadeIn 0.4s;
  -o-animation: fadeIn 0.4s;
  -ms-animation: fadeIn 0.4s;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 100%;
    left: 20%;
    margin-left: -5px;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
}
.dropdown:hover .dropdown-menu {
  display: block;
  position: absolute;
  text-align: left;
  top: 100%;
  border: none;
  animation: fadeIn 0.4s;
  -webkit-animation: fadeIn 0.4s;
  -moz-animation: fadeIn 0.4s;
  -o-animation: fadeIn 0.4s;
  -ms-animation: fadeIn 0.4s;
}
.dropdown .dropdown-menu .dropdown-item {
  width: 100%;
  padding: 10px 20px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #f1f1f1;
  text-decoration: none;
  display: inline-block;
  float: left;
  clear: both;
  position: relative;
  outline: 0;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}
.dropdown .dropdown-menu .dropdown-item:last-child {
  border-bottom: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.dropdown .dropdown-menu .dropdown-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.dropdown .dropdown-item:focus,
.dropdown .dropdown-item:hover,
.dropdown .dropdown-item.active {
  color: $preset;
  background: #f7f7f7;
}
.dropdown-item.active,
.dropdown-item:active {
  background: transparent;
}
.fadeInUpMenu {
  -webkit-animation-name: fadeInUpMenu;
  animation-name: fadeInUpMenu;
}
</style>
