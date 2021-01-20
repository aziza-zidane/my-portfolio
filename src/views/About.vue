<template>
  <div class="about">
    <span class="soulingHiding" :class="show ? 'active' : ''"></span>

    <h3>
      <Appear :porperts="'translateX(-500px)'" :duration="1000">
        <span class="d-block" v-if="show">HLLOW</span>
      </Appear>
      <Appear :porperts="'translateX(500px)'">
        <span class="d-block" v-if="show"> i am aziza</span>
      </Appear>
      <span v-for="(letter, index) in textAnimate" :key="index">
        <Appear :delay="100 * index + 1" :porperts="'translateX(500px)'">
          <span v-if="show">{{ letter }}</span>
        </Appear>
      </span>
    </h3>
  </div>
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
          }, 7000);
        }, 9000);
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
  .about {
    margin-top: 200px;
    margin-bottom: 400px;
    h1 {
    }
    .soulingHiding {
      position: relative;
      display: block;
      width: 0%;
      height: 5px;
      background-color: red;
      top: 22px;
      left: 702px;
      z-index: 5555;
      transform: translateX(200px);
      transition-duration: 1s;

      opacity: 0;
      &.active {
        width: 20%;
        transform: translateX(0px);
        opacity: 1;
      }
    }
  }
</style>
