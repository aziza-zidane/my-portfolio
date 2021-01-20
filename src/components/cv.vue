<template>
  <b-container id="cv" class="text-left ">
    <h2 class="h1 py-5 text-center"><span>web</span><span>desinger</span></h2>

    <b-row>
      <b-col lg="3" md="4" cols="12">
        <div class="personal-info  p-md-3 p-1">
          <div class="margin-line d-md-none d-bolck"></div>
          <div class="image py-3">
            <img src="@/assets/aziza.jpg" alt="" />
          </div>

          <ul class="list-unstyled info-contat  text-center text-md-left">
            <h3 class="pt-md-3  pt-1  d-block d-md-none">
              Aziza Ait Zidane
            </h3>
            <li><i class="fas fa-mobile-alt"></i> : +212 6 54 51 17 29</li>
            <li><i class="fas fa-calendar-week"></i> : 11/10/1985</li>
            <li>
              <i class="far fa-address-card"></i> : Db Sidi Bouzid Bab Ahmer N10
              Marrakech
            </li>
            <li class="mt-2">
              <i class="fab fa-linkedin-in fa-lg ml-2 mr-4"></i>
              <i class="fab fa-github-alt fa-lg mr-4"></i>
              <i class="fab fa-facebook-f fa-lg mr-4"></i>
              <i class="fab fa-pinterest-p fa-lg "></i>
            </li>
          </ul>
          <div class="interests d-md-block d-none">
            <h4>Interests</h4>
            <ul>
              <li>Cyberpunk literature</li>
              <li>Triathlon</li>
              <li>Triathlon</li>
            </ul>
          </div>
          <div class="languege d-md-block d-none">
            <h4>Languges</h4>
            <ul>
              <li>Arabec Literature</li>
              <li>Englesh</li>
              <li>French</li>
            </ul>
          </div>
        </div>
      </b-col>
      <b-col lg="9" md="8" cols="12">
        <div class="professional-info ml-lg-auto  p-2">
          <h3 class="pt-3 text-left d-none d-md-block">Aziza Ait Zidane</h3>
          <p>
            Enthusiastic and self-motivated web designer Eager to join WebHouse
            to bring top-class frontend development,and visual design skills. so
            i have an ability to plan a project from start to finish as well as
            extensive knowledge of HTML, CSS, JavaScript and other standard
            development platforms.
          </p>

          <div class="expriences">
            <h4>Experiences</h4>
            <p><b>2019–2020 Freelancing and Volunteering</b></p>
            <ul>
              <li>
                Custom Web Design and bring top-class visual design skills
              </li>
              <li>Speed up Website and Performance Optimization</li>
              <li>
                Collaborated with internal and external design/dev resources to
                implement scalable front-end templates and design modules.
              </li>
            </ul>
          </div>
          <div class="education">
            <h4>Eduction</h4>
            <p>
              2010 Bachelor's degree in sociology
            </p>
            <p><b>Relevant coursework:</b></p>
            <ul>
              <li>Web Design</li>
              <li>Front End</li>
              <li>wordpress</li>
            </ul>
          </div>
          <div class="skills">
            <h4>skills</h4>
            <div v-for="skill in skills" :key="skill.exp">
              <h5 class="mt-2">{{ skill.exp }}</h5>
              <div class="progress w-75 ">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: skill.width }"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="interests d-block d-md-none">
            <h4>Interests</h4>
            <ul>
              <li>Cyberpunk literature</li>
              <li>Triathlon</li>
              <li>Triathlon</li>
            </ul>
          </div>

          <div class="languege d-block d-md-none">
            <h4>Languges</h4>
            <ul>
              <li>Arabec Literature</li>
              <li>Englesh</li>
              <li>French</li>
            </ul>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  // @ is an alias to /

  export default {
    data() {
      return {
        skills: [
          { exp: 'html', width: '95%' },
          { exp: 'css', width: '99%' },
          { exp: 'javascript', width: '80%' },
          { exp: 'wordpress', width: '75%' },
          { exp: 'vuejs', width: '70%' },
        ],
      };
    },
  };
</script>
<style lang="scss">
  @import 'helprs.scss';
  // cv section
  #cv {
    position: relative;
    font-family: 'Open Sans', sans-serif;

    h2 {
      position: absolute;
      top: 167px;
      left: 102px;
      z-index: 2;
      letter-spacing: 20px;
      text-transform: uppercase;
      font-size: 50px;
      font-family: 'Playfair Display', serif;
      span:first-child {
        @extend %color-second;
        // border-bottom: 4px solid $secondColor;
      }
      span:last-child {
        @extend %color-main;
        // border-bottom: 4px solid $mainColor;
      }

      @media #{$minMobail} {
        letter-spacing: 5px;
        position: static;
      }
      @media #{$minMedium} {
        top: 188px;
        left: 55px;
      }
    }
    //info personal
    .personal-info {
      @extend %back-main;
      color: #adadad;
      height: 1212px;
      position: relative;
      .margin-line {
        position: absolute;

        @extend %back-main;
        width: 5px;
        height: 1267px;
        top: 638px;
        left: -8px;
      }

      @media #{$minLarge} {
        width: 90%;
        margin-left: auto;
      }

      @media #{$minMobail} {
        height: auto;
        padding: 0;
        width: 100%;
      }

      .image {
        background: rgba($secondColor, 0.5);
        margin-left: 45px;
        padding-left: 19px;

        @media #{$minMobail} {
          width: 37%;
          margin: auto;
        }

        img {
          width: 160px;
          height: 160px;
          @media #{$minMobail} {
            margin-top: -40px;
          }
        }
      }

      .info-contat {
        margin-top: 120px;

        @media #{$minMobail} {
          margin-top: 10px;
        }
        @media #{$minMedium} {
          margin-top: 146px;
        }
        h3 {
          @media #{$minMobail} {
            color: #e8e5e5;
            font-family: 'Playfair Display', serif;
            margin-top: 10px;
          }
        }
      }
      h4 {
        margin-left: 25px;
        padding-left: 8px;
        margin-top: 27px;
        @media #{$minMedium} {
          margin-left: 5px !important;
        }
      }
    }
    .education {
      @media #{$larg} {
        padding-top: 75px;
      }

      @media #{$minMedium} {
        padding-top: 40px;
      }
    }
    li {
      margin-bottom: 15px;
      @media #{$minMobail} {
        margin-top: 10px;
      }
    }
    h4 {
      @extend %color-main;
      font-family: 'Playfair Display', serif;
      letter-spacing: 2px;
      @extend %back-second;
      width: 200px;
      margin-bottom: 25px;
      margin-left: -50px;
      padding-left: 8px;
      @media #{$minMobail} {
        margin-left: -26px;
        margin-bottom: 25px;
        margin-top: 25px;
        padding-left: 26px;
      }
    }
  }
  //info professionel
  .professional-info {
    padding: 10px;
    @media #{$minMobail} {
      margin-top: 40px;
      padding: 20px;
    }

    h3 {
      @extend %color-main;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-weight: bold;
      font-family: 'Playfair Display', serif;
    }

    p {
      line-height: 1.5;
      margin-top: 15px;
      text-align: justify;
      font-weight: 400;
      font-size: 18px;
    }
    .expriences {
      margin-top: 130px;
      @media #{$minMobail} {
        margin-top: 40px;
      }
      @media #{$minMedium} {
        margin-top: 89px;
      }
      li {
        margin-bottom: 15px;
        line-height: 1.5;
      }
    }
    //skills
    .skills {
      h5 {
        width: 200px;
      }
      .progress {
        height: 5px;
        width: 60%;
        margin-bottom: 10px;
        margin-top: 10px;
        @extend %back-main;
        border-radius: 20px;
        .progress-bar {
          height: 5px;
          background-color: rgba($secondColor, 0.8);
          border-radius: 20px;
        }
      }
    }
  }
</style>
