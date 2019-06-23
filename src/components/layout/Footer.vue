<template>
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-3 col-xs-12">
          <div class="footer-logo" v-bind="items">
            <img :src="items.logo" alt>
          </div>
        </div>
        <div class="col-lg-8 col-md-9 col-xs-12">
          <p class="float-left">Copyright &copy;2019 Hoanggia Co., Ltd. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "./../../assets/img/logo.png";

export default {
  name: "Footer",
  data: function() {
    return {
      items: {
        logo
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.footer-area {
  background: #34363a;
  .footer-titel {
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    padding-bottom: 10px;
    letter-spacing: 0.5px;
  }
  ul {
    li {
      margin-bottom: 10px;
      a {
        color: #ccc;
        font-size: 14px;
        font-weight: 400;
        &:hover {
          color: $preset;
        }
      }
    }
  }
  #subscribe-form {
    margin-top: 15px;
    .form-group {
      position: relative;
      .btn-common {
        position: absolute;
        top: 0;
        right: 0;
        padding: 7px 15px;
        height: 39px;
        border-radius: 0;
        background: transparent;
        color: $preset;
        border-left: 1px solid #ddd;
      }
    }
  }
}
.copyright {
  background: #34363a;
  .footer-logo {
    margin-top: 13px;
    img {
      width: 80%;
    }
  }
  p {
    line-height: 60px;
    color: #fff;
    text-align: center;
    margin: 0;
    a {
      color: #fff;
      &:hover {
        color: $preset;
      }
    }
  }
}
</style>
