<template>
  <div id="my-skills" ref="infinitescrolltrigger">
    <div class="overlay-right"></div>
    <b-container>
      <h2 class="my-5">My-Skills</h2>
      <div class="row  w-100">
        <div
          v-for="bar in bars"
          class="col-sm-4 mb-5 col-6  text-left mb-4  pl-4"
          :key="bar.title"
        >
          <div>{{ bar.title }}</div>
          <span class="val text-center" :style="{ left: bar.value - 5 + '%' }"
            >{{ bar.value }}
          </span>
          <b-progress>
            <b-progress-bar :value="show ? bar.value : ''"></b-progress-bar>
          </b-progress>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bars: [
          { title: 'html', value: 95 },
          { title: 'css', value: 98 },
          { title: 'javascript', value: 75 },
          { title: 'jquery', value: 65 },
          { title: 'wordpress', value: 80 },
          { title: 'vuejs', value: 75 },
          { title: 'git,githube', value: 75 },
          { title: 'api', value: 75 },
          { title: 'sass', value: 75 },
          { title: 'pug', value: 75 },
          { title: 'gulp js', value: 75 },
          { title: 'photoshop', value: 75 },
        ],
        timer: null,
        show: false,
      };
    },
    methods: {
      scrollTrigger() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              setTimeout(() => {
                this.show = true;
              }, 3000);
            } else {
              this.show = false;
            }
          });
        });
        observer.observe(this.$refs.infinitescrolltrigger);
      },
    },
    mounted() {
      this.scrollTrigger();
    },
  };
</script>

<style lang="scss" scoped>
  @import 'helprs.scss';
  #my-skills {
    padding: 100px 20px;
    background: $mainColor;
    color: #ddd !important;
    position: relative;
    .progress {
      position: relative;
      .progress-bar {
        transition-duration: 2s;
        transition-delay: 300ms;
        background-color: rgb(11, 102, 93);
      }
    }

    .val {
      position: absolute;
      width: 30px;

      top: -13px;
      left: 75%;
      background-color: $secondColor;
      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 10px 10px;
        border-color: $secondColor transparent transparent;
        top: 24px;
        left: 0px;
        z-index: 33;
      }
    }
    .overlay-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 5%;
      height: 100%;
      background-color: $secondColor;
    }
  }
</style>
