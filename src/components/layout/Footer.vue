<template>
  <div class="copyright">
    <div class="container">
      <div class="row">
        <p class>Copyright &copy;2019 Hoanggia Co., Ltd. All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
  // data: function() {
  //   return {
  //     items: {
  //       logo
  //     }
  //   };
  // }
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
  .container {
    justify-content: center;
    .row {
      justify-content: center;
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
