<template>
  <header
    class="vh-100  d-flex justify-content-center align-items-center flex-column"
  >
    <h2 class="sm-h1 text-white p-sm-5 p-3 text-left">
      <span class="underline" :class="show ? 'translate-underline' : ''"></span>
      <Appear :porperts="'translateX(-500px)'" :duration="1000">
        <span class="d-block" v-if="show">HLLOW</span>
      </Appear>
      <Appear :porperts="'translateX(500px)'">
        <span class="d-block" v-if="show">
          i am <span class="name">Aziza</span>
        </span>
      </Appear>
      <span v-for="(letter, index) in textAnimate" :key="index">
        <Appear :delay="100 * index + 1" :porperts="'translateX(500px)'">
          <span v-if="show">{{ letter }}</span>
        </Appear>
      </span>
    </h2>
    <div class=" d-flex ">
      <b-button class="hvr-sweep-to-right ">cantact-me</b-button>
      <b-button class="hvr-sweep-to-left ">my-portfolio</b-button>
    </div>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        textHeader: 'freelance  & web designer',
        textAnimate: [],
        theIneterval: '',
        show: false,
        space: true,
      };
    },
    methods: {
      animateHiddin() {
        this.theIneterval = setInterval(() => {
          this.show = true;
          setTimeout(() => {
            this.show = false;
          }, 6000);
        }, 7000);
      },
    },
    mounted() {
      this.textAnimate = this.textHeader.split('');
    },
    created() {
      this.animateHiddin();
    },
    beforeDestroy() {
      clearInterval(this.theIneterval);
    },
  };
</script>
<style lang="scss">
  @import 'helprs.scss';

  header {
    background-image: url('../assets/animated-back.gif');
    position: relative;
    .underline {
      position: absolute;
      width: 0%;
      height: 5px;
      background-color: #fff;
      top: 73px;
      left: 180px;
      z-index: 5555;
      transition-duration: 1s;
      opacity: 0;

      @media #{$maxMobail} {
        top: 49px;
        left: 155px;
      }
      &.translate-underline {
        opacity: 1;
        width: 60%;
      }
    }

    h2 {
      background-color: rgba($mainColor, 0.5);
      position: relative;
      line-height: 1.9;
      letter-spacing: 2px;
      font-family: 'Playfair Display', serif;
      width: 50%;

      @media #{$maxMobail} {
        font-size: 35px;
        width: auto;
      }
      @media #{$maxSmmal} {
        width: auto;
      }
      @media #{$larg} {
        height: 40%;
      }
    }
    .name {
      @extend %color-second;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.9),
        0px -5px 35px rgba(255, 255, 255, 0.9);
    }
  }
  .letter {
    opacity: 0;
    transition-duration: 2s;
  }

  button {
    width: 200px;
    background-color: rgba($mainColor, 0.5) !important;
    @media #{$maxMobail} {
      width: 150px;
    }
  }
  button:nth-of-type(2) {
    background-color: rgba($secondColor, 0.5) !important;
    margin-left: 16%;
  }

  .btn-secondary {
    border-color: transparent;
  }

  .hvr-sweep-to-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-sweep-to-right:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($secondColor, 0.5);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-sweep-to-right:hover,
  .hvr-sweep-to-right:focus,
  .hvr-sweep-to-right:active {
    color: white;
  }
  .hvr-sweep-to-right:hover:before,
  .hvr-sweep-to-right:focus:before,
  .hvr-sweep-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  /* Sweep To Left */
  .hvr-sweep-to-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-sweep-to-left:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($mainColor, 0.5);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-sweep-to-left:hover,
  .hvr-sweep-to-left:focus,
  .hvr-sweep-to-left:active {
    color: white;
  }
  .hvr-sweep-to-left:hover:before,
  .hvr-sweep-to-left:focus:before,
  .hvr-sweep-to-left:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
</style>
