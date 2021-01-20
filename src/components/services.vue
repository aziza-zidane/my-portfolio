<template>
  <div id="services">
    <div class="overlay-right"></div>
    <b-container>
      <b-row>
        <b-col lg="3" md="6">
          <ul
            class="list-unstyled first-type  hvr-grow-shadow"
            data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div class="cover-i cover-one">
              <i class="fas fa-laptop-code fa-2x"></i>
            </div>
            <h4 class="py-3">code</h4>
            <li>
              <i class="fas fa-check"></i>Translate designs into working code
            </li>
            <li><i class="fas fa-check"></i>Update a site after it has gone</li>
            <li><i class="fas fa-check"></i>Make a site go live</li>
          </ul>
        </b-col>
        <b-col cols="12" class="d-md-none d-block ">
          <div class="p-5 cover  "></div>
        </b-col>
        <b-col lg="3" md="6">
          <ul
            class="list-unstyled  hvr-grow-shadow"
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div class="cover-i  ">
              <i class="fab fa-wordpress fa-2x"></i>
            </div>
            <h4 class="py-3 ">WordPress</h4>
            <li><i class="fas fa-check"></i>Red and edit PHP code</li>
            <li><i class="fas fa-check"></i>Install WordPress</li>
            <li>
              <i class="fas fa-check"></i>Understand the WordPress architecture
            </li>
            <li><i class="fas fa-check"></i>Create a child theme</li>
            <li><i class="fas fa-check"></i>add useful plaguins</li>
          </ul>
        </b-col>
        <b-col cols="12" class="d-lg-none d-block">
          <div class=" p-5 cover "></div>
        </b-col>
        <b-col lg="3" md="6">
          <ul
            class="list-unstyled  hvr-grow-shadow"
            data-aos="zoom-in-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div class="cover-i">
              <i class="fab fa-vuejs fa-2x"></i>
            </div>
            <h4 class="py-3">Vue.js</h4>
            <li>
              <i class="fas fa-check"></i>
              Downloading and including the Vue.js file
            </li>
            <li><i class="fas fa-check"></i>Using CDN</li>
            <li>
              <i class="fas fa-check"></i> Using Node Package Manager (NPM)
            </li>
            <li>
              <i class="fas fa-check"></i>Using Vue-cli to setup the project
            </li>
          </ul>
        </b-col>
        <b-col cols="12" class="d-md-none d-block">
          <div class="p-5 cover"></div>
        </b-col>
        <b-col lg="3" md="6">
          <ul
            class="list-unstyled  hvr-grow-shadow"
            data-aos="zoom-in-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div class="cover-i">
              <i class="far fa-window-restore fa-2x" />
            </div>
            <h4 class="py-3">responsive</h4>
            <li><i class="fas fa-check"></i>Create queries for standard</li>
            <li>
              <i class="fas fa-check"></i>Translate a static website into a
              responsive one
            </li>
            <li>
              <i class="fas fa-check"></i>Follow industry standards for naming
              and syntax
            </li>
          </ul>
        </b-col>
        <b-col cols="12" class="d-lg-none d-block">
          <div class=" p-5 cover "></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style lang="scss">
  @import 'helprs.scss';
  #services {
    height: 300px;
    background: #e9e5e5;
    margin-top: 300px;
    @media #{$minMobail} {
      height: auto;
      background: transparent;
      margin-top: 60px;
    }
    @media #{$minMedium} {
      height: auto;
      background: transparent;
      margin-top: 100px;
    }
    .cover {
      background: #e9e5e5;
      margin-bottom: 50px;
      @media #{$minMobail} {
        margin-bottom: 40px;
      }
    }
    ul {
      background: $mainColor;
      color: #ddd;
      height: 400px;
      top: -210px;
      left: 0;
      position: relative;
      padding: 15px;
      @media #{$minMobail} {
        top: 26px;
        width: 90%;
        margin: auto;
      }
      @media #{ $minMedium} {
        top: 0;
        width: 90%;
        margin: auto;
      }
      &.first-type {
        background: $secondColor;
      }
      .cover-i {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: auto;
        border: 2px solid rgb(134, 102, 102);
        line-height: 90px;
        background-color: rgba($secondColor, 0.5);
        &.cover-one {
          background-color: rgba($mainColor, 0.5);
        }
      }

      li {
        padding-bottom: 10px;
        color: #ddd;

        i {
          margin-right: 10px;
        }
      }
    }
  }
</style>
