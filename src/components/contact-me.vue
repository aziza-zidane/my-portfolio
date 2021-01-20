<template>
  <div id="contact-me">
    <b-row>
      <b-col md="6" cols="12" class="">
        <div class="my-info-contat">
          <ul
            class="contact-details p-4 list-unsyled"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <li>
              <i class="fas fa-mobile-alt fa-2x mt-2"></i>
              <p class="mt-2">+212 6 54 51 17 29</p>
            </li>
            <li>
              <i class="far fa-envelope-open fa-2x"></i>
              <p class="mt-2">aaitzidane@gmail.com</p>
            </li>
            <li class="mt-5">
              <i class="fab fa-linkedin-in fa-lg ml-2 mr-4"></i>
              <i class="fab fa-github-alt fa-lg mr-4"></i>
              <i class="fab fa-facebook-f fa-lg mr-4"></i>
              <i class="fab fa-pinterest-p fa-lg "></i>
            </li>
          </ul>
        </div>
      </b-col>
      <b-col md="6" cols="12">
        <form class="text-left">
          <h2 class="pb-">Contact-Me</h2>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" class=" btn">Submit</button>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
  @import 'helprs.scss';
  #contact-me {
    .my-info-contat {
      width: 20%;
      padding: 100px 40px;
      @extend %back-second;
      .contact-details {
        @extend %back-main;
        width: 400px;
        height: 400px;
        i {
          @extend %color-second;
          cursor: pointer;
        }
        p {
          color: #ddd;
        }
      }
    }
    form {
      padding: 100px 20px;
      width: 80%;
      margin-right: auto;
      font-family: 'Open Sans', sans-serif;
      h2 {
        font-family: 'Playfair Display', serif;
      }
      @media #{$minMobail} {
        margin: auto;
        padding: 20px 20px;
      }
      @media #{$minMedium} {
        width: 100%;
        margin-right: 0;
        margin-left: 21px;
      }
      .btn {
        @extend %back-main;
        @extend %color-second;
      }
    }
  }
</style>
