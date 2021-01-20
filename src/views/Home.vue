<template>
  <div class="home">
    <Header />
    <services />
    <abou />
    <cv />
    <skills></skills>

    <portfolio></portfolio>
    <contact />
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import services from '../components/services.vue';
  import abou from '../components/abou.vue';
  import cv from '../components/cv.vue';
  import contact from '../components/contact-me.vue';
  import skills from '../components/skills.vue';
  import portfolio from '../components/portfolio.vue';
  export default {
    components: {
      Header,
      abou,
      cv,

      services,
      contact,
      skills,
      portfolio,
    },
  };
</script>
