<template>
  <div id="feature">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="text-wrapper">
            <div>
              <h2 class="title-hl wow fadeInLeft" data-wow-delay="0.3s">
                We are helping to grow
                <br>your business.
              </h2>
              <p
                class="mb-4"
              >A digital studio specialising in User Experience & eCommerce, we combine innovation with digital craftsmanship to help brands fulfill their potential.</p>
              <a href="#" class="btn btn-common">More About Us</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 padding-none feature-bg">
          <div class="feature-thumb">
            <div
              class="feature-item wow fadeInDown"
              data-wow-duration="1000ms"
              v-for="(item, index) in items"
              :data-wow-delay="delay(index)"
              :key="index"
            >
              <div class="icon">
                <i :class="item.icon"></i>
              </div>
              <div class="feature-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feature",
  data: function() {
    return {
      items: [
        {
          item: "lni-microphone",
          title: "What we do",
          content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores"
        },
        {
          item: "lni-users",
          title: "Meet our team",
          content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores"
        },
        {
          item: "lni-medall-alt",
          title: "Our Creation",
          content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores"
        }
      ]
    };
  },
  methods: {
    delay(milsec) {
      return `${300 + milsec * 200}ms`;
    }
  }
};
</script>

<style lang="scss" scoped>
.feature-bg {
  background: $preset;
}
.text-wrapper {
  height: 100%;
  display: table;
  padding-left: 140px;
  > div {
    vertical-align: middle;
    display: table-cell;
  }
}
.feature-thumb {
  padding: 40px 0;
}
.feature-item {
  padding: 30px;
  .icon {
    float: left;
    border: 1px solid #fff;
    width: 80px;
    height: 80px;
    text-align: center;
    border-radius: 50%;
    transition: all 0.6s ease;
    -moz-transition: all 0.6s ease;
    -webkit-transition: all 0.6s ease;
    i {
      font-size: 36px;
      color: #fff;
      line-height: 80px;
    }
  }
}
.feature-content {
  color: #fff;
  margin-left: 100px;
  h3 {
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
  }
}
.feature-item:hover .icon {
  background: #fff;
  i {
    color: $preset;
  }
}
</style>

