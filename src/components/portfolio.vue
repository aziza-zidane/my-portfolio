<template>
  <div id="portfolio">
    <hr />
    <h2 class="h1 py-3">My-portfoio</h2>
    <b-container>
      <b-row>
        <b-col lg="4" md="6" cols="12">
          <div class=" holder ">
            <div class="back-preview">
              <img src="../assets/tablet1.png" class="img-fluid" alt="tablet" />
            </div>
            <div class="preview">
              <img src="../assets/Template-Tow.png" alt="" />
            </div>
            <div
              class="tilte-project p-3 d-flex aling-items-center justify-content-center"
            >
              <p>
                bootstrap html css tepmlate Axit

                <i class="fas fa-chevron-circle-up d-block pt-2"></i>
              </p>
              <a
                href="https://aziza-zidane.github.io/first-template/"
                target="_blank"
                >viste website</a
              >
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="6" cols="12">
          <div class=" holder ">
            <div class="back-preview">
              <img src="../assets/tablet1.png" class="img-fluid" alt="tablet" />
            </div>
            <div class="preview">
              <img src="../assets/elit-crop.png" alt="" />
            </div>
            <div
              class="tilte-project p-3 d-flex aling-items-center justify-content-center"
            >
              <p>
                bootstrap html css tepmlate Elit-Crop
                <i class="fas fa-chevron-circle-up d-block pt-2"></i>
              </p>

              <a
                href="https://aziza-zidane.github.io/template-elite-crop/"
                target="_blank"
                >viste website</a
              >
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="6" cols="12">
          <div class=" holder ">
            <div class="back-preview">
              <img src="../assets/tablet1.png" class="img-fluid" alt="tablet" />
            </div>
            <div class="preview">
              <img src="../assets/Bootstrap.png" class="img-fluid" alt="" />
            </div>
            <div
              class="tilte-project p-3 d-flex aling-items-center justify-content-center"
            >
              <p>
                training template webdesing
                <i class="fas fa-chevron-circle-up d-block pt-2"></i>
              </p>
              <a
                href="https://aziza-zidane.github.io/tepmlate-start/"
                target="_blank"
                >viste website</a
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <hr />
  </div>
</template>
<style lang="scss">
  @import 'helprs.scss';
  #portfolio {
    padding: 100px 0 10px;
    .holder {
      position: relative;
      margin-bottom: 30px;
      background-position: center;
      @media #{$minMobail} {
      }
      @media #{$minMedium} {
      }
      .preview {
        position: absolute;
        top: 47px;
        left: 21px;
        width: 87%;
        height: 88%;
        overflow: hidden;
        @media #{$exMobail} {
          top: 53px;
          left: 20px;
        }
        @media #{$spcilal-mobobil} {
          top: 71px;
          left: 26px;
        }
        @media #{$maxSmmal} {
          top: 69px;
          left: 28px;
        }
        @media #{$minMedium} {
          top: 52px;
          left: 19px;
        }
        img {
          width: 100%;
          margin-top: 0;
          transition: 5s;

          &:hover {
            margin-top: -500px;
          }
        }
      }
      .tilte-project {
        height: 80px;
        @extend %back-main;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        color: #ddd;
        border-radius: 10px;
        transition: 1s;
        a {
          display: none;
          height: 50px;
          color: #fff;
          padding: 20px;
          line-height: 10px;
          text-decoration: none;
          @extend %color-second;
          @extend %back-second;
          border: 2px solid $secondColor;
          font-weight: bold;
          font-size: 18px;
          margin-top: 20%;
        }
        &:hover {
          background: rgba($mainColor, 0.8);
          height: 50%;

          p {
            display: none;
          }
          a {
            display: block;
            &:hover {
              @extend %back-main;
            }
          }
        }
        i {
          animation: pop-up 1s infinite;
          @extend %color-second;
          cursor: pointer;
        }
        hr {
          @extend %back-second;
        }
      }
    }
  }
  @keyframes pop-up {
    0% {
      transform: translateY(1px);
    }
    20% {
      transform: translateY(-1px);
    }
    40% {
      transform: translateY(1px);
    }
    60% {
      transform: translateY(-1px);
    }
    80% {
      transform: translateY(1px);
    }
    100% {
      transform: translateY(-1px);
    }
  }
</style>
