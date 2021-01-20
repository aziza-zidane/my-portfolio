<template>
  <footer class="text-left pt-5  text-white">
    <b-container>
      <b-row class="p-2">
        <b-col md="4">
          <h4 v-scollanimation class="py-3">About-Me</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            provident laborum adipisci veritatis sequi culpa! Officia, saepe.
          </p>
        </b-col>
        <b-col md="4">
          <h4 class="py-3">Helpful Links</h4>
          <ul class="list-unstyled ">
            <li><a href="#">portfolio</a></li>
            <li><a href="#">resume</a></li>
            <li><a href="#">about-me</a></li>
          </ul>
        </b-col>
        <b-col md="4">
          <h4 class="py-3">Contact-me</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-mobile-alt"></i> : +212 6 54 51 17 29</li>
            <li>
              <i class="fas fa-envelope-open-text"></i> :aaitzidane@gmail.com
            </li>
            <li class="mt-2">
              <i class="fab fa-linkedin-in fa-lg ml-2 mr-4"></i>
              <i class="fab fa-github-alt fa-lg mr-4"></i>
              <i class="fab fa-facebook-f fa-lg mr-4"></i>
              <i class="fab fa-pinterest-p fa-lg "></i>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <div class="copyright p-1 text-center">
      <p class="muted">
        &copy; copyright 2021 portfolio-aziza | all right reserved
      </p>
    </div>
  </footer>
</template>
<script>
  export default {};
</script>
<style lang="scss">
  @import 'helprs.scss';
  footer {
    @extend %back-main;
    h4 {
      @extend %color-second;
    }
    li {
      padding-bottom: 10px;
      color: #ddd;
      a {
        color: #ddd;
      }
    }
    p {
      color: #ddd;
      line-height: 2;
    }
    .copyright {
      @extend %back-second;
    }
  }
</style>
