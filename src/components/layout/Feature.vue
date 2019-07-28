<template>
  <div id="feature">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="text-wrapper">
            <div>
              <h2
                class="title-hl wow fadeInLeft"
                data-wow-delay="0.3s"
              >{{content ? content.feature_title[lang] : ""}}</h2>
              <p class="mb-4">{{content ? content.feature_description[lang] : ""}}</p>
              <!-- <a href="#" class="btn btn-common">More About Us</a> -->
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
                <img :src="/images/ + item.image" :alt="item.name[lang]" />
              </div>
              <div class="feature-content">
                <h3>{{ item ? item.name[lang] : "" }}</h3>
                <p>{{ item ? item.description[lang] : "" }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Feature",
  computed: mapState(["lang", "content"]),
  data: function() {
    return {
      items: []
    };
  },

  mounted() {
    axios.get("/api/features").then(response => {
      return (this.items = response.data.data);
    });
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
    img {
      // font-size: 36px;
      // color: #fff;
      // line-height: 80px;
      border-radius: 50%;
      width: 100%;
      height: 100%;
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

