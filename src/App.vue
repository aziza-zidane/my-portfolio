<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" class="w-100">
        <b-navbar-brand href="#">Aziza</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link class="hvr-underline-from-left" to="/"
              >Home</router-link
            >
            <router-link class="hvr-underline-from-left" to="/about"
              >About</router-link
            >
            <a href="#" class="hvr-underline-from-left" v-scroll-to="'#about'"
              >about-me</a
            >
            <a
              href="#"
              class="hvr-underline-from-left"
              v-scroll-to="'#portfolio'"
              >portfolio</a
            >
            <a
              href="#"
              class="hvr-underline-from-left"
              v-scroll-to="'#my-skills'"
              >skills</a
            >
            <a href="#" class="hvr-underline-from-left" v-scroll-to="'#cv'"
              >resume</a
            >
            <a
              href="#"
              class="hvr-underline-from-left"
              v-scroll-to="'#services'"
              >services</a
            >
          </b-navbar-nav>
          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
    </div>

    <router-view />
    <myFooter></myFooter>
  </div>
</template>
<script>
  import myFooter from './components/my-footer.vue';
  export default {
    components: {
      myFooter,
    },
  };
</script>

<style lang="scss">
  @import 'helprs.scss';
  #app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #nav {
    padding: 30px;
    position: absolute;
    width: 100%;
    z-index: 4444;
    top: 0;
    left: 0;
    .navbar-brand {
      font-family: 'Playfair Display', serif;
      letter-spacing: 3px;
      @extend %color-second;
      font-weight: bold;
      font-size: 37px;
      text-shadow: rgba(255, 255, 255, 0.5) 0px 3px 3px;
    }
    a {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      margin-right: 15px;
      padding-bottom: 4px;
      &.router-link-exact-active {
        @extend %color-second;
      }
    }
  }

  .hvr-underline-from-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-from-left:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: rgba($secondColor, 0.8);
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-underline-from-left:hover:before,
  .hvr-underline-from-left:focus:before,
  .hvr-underline-from-left:active:before {
    right: 0;
  }
</style>
