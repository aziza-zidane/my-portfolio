<template>
  <div id="about">
    <b-row>
      <b-col md="6" cols="12">
        <div
          class=" content-image text-center py-5 "
          data-aos="fade-down-right"
          data-aos-duration="1500"
        >
          <h2 class="">About-Me</h2>

          <div
            class="image"
            data-aos="fade-down-right"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <img
              src="@/assets/aziza.jpg"
              alt=""
              data-aos="fade-down-left"
              data-aos-delay="1500"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </b-col>
      <b-col md="6" cols="12">
        <b-container class=" py-lg-5">
          <div
            class="text"
            data-aos="fade-down-left"
            data-aos-delay="2000"
            data-aos-duration="1500"
          >
            <p class="  text-left">
              Hi! I am Aziza Creative Freelance Web Designer I am passionate
              about designing beautiful and functional websites that live on the
              internet and makes a good website user experience.
            </p>
          </div>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {};
</script>
<style lang="scss" scoped>
  @import 'helprs.scss';
  #about {
    .content-image {
      @extend %back-main;
      position: relative;
      height: 400px;

      @media #{$minMobail} {
        margin-top: 122px;
        height: 148px;
      }
      h2 {
        @extend %color-second;
        font-family: 'Playfair Display', serif;
      }
    }
    .image {
      border: 5px solid $secondColor;
      width: 25%;
      height: 40%;
      position: absolute;
      top: 25%;
      right: -12%;
      @media #{$minMobail} {
        top: -72%;
        right: 34%;
        width: 33%;
        height: 100%;
      }
      @media #{$maxSmmal} {
        width: 25%;
      }
      @media #{$minMedium} {
        width: 40%;
        right: 0;
      }
    }
    img {
      width: 160px;
      height: 160px;
      position: relative;
      top: 13%;
      right: -18%;
      @media #{$minMobail} {
        top: -34%;
        right: -17%;
      }
    }
    @media #{$minMedium} {
    }
  }

  p {
    margin-left: 15%;
    margin-top: 93px;
    font-size: 18px;
    line-height: 2;
    padding: 10px;
    font-family: 'Open Sans', sans-serif;
    @media #{$minMobail} {
      margin-left: 0;
      margin-top: 20px;
      padding: 10px;
    }
    @media #{$minMedium} {
      margin-left: 0;
    }
  }
  .before-enter {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 2s ease-out;
  }
  /* 
  If the element intersects with the viewport, the before-enter class 
is added.
*/
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
</style>
