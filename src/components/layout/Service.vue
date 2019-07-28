<template>
  <section id="services" class="section-padding bg-gray">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">{{ $t("services") }}</h2>
        <p>{{content ? content.service_description[lang] : ""}}</p>
      </div>
      <div class="row">
        <!-- Services item -->
        <div class="col-md-6 col-lg-4 col-xs-12" v-for="(item, index) in items" :key="index">
          <div class="services-item wow fadeInRight" :data-wow-delay="delay(index)">
            <div class="icon">
              <img :src="/images/ + item.image" :alt="item.name[lang]" />
            </div>
            <div class="services-content">
              <h3>{{item.name ? item.name[lang] : ""}}</h3>
              <p>{{item.description ? item.description[lang] : ""}}</p>
            </div>
          </div>
        </div>
        <!-- Services item -->
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Service",
  computed: mapState(["lang", "content"]),
  mounted() {
    axios.get("/api/services").then(response => {
      return (this.items = response.data.data);
    });
  },
  data: function() {
    return {
      items: []
    };
  },
  methods: {
    delay(seconds) {
      return `${0.3 + seconds * 0.2}s`;
    }
  }
};
</script>

<style lang="scss" scoped>
.services-item {
  height: 70vh;
  background: #fff;
  margin: 15px 0;
  padding: 30px;
  border-radius: 4px;
  text-align: left;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  .icon {
    height: 35vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .services-content {
    padding-top: 2rem;
    h3 {
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 10px;
      a {
        font-size: 18px;
        color: #585b60;
        &:hover {
          color: $preset;
        }
      }
    }
  }
  &:hover {
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.08);
  }
}

#service {
  position: relative;
}
/* Container Outside Shape */
.container-outside {
  position: absolute;
  top: 0;
  right: 0;
  width: 47.1%;
  height: 100%;
  background: $preset;
  overflow: hidden;
}
.heading {
  padding-left: 30px;
}
.d-table {
  display: table;
  width: 100%;
  height: 100%;
}
.dt-cell {
  display: table-cell;
  vertical-align: middle;
}

// Skills
.skill-area {
  img {
    border-radius: 4px;
  }
}
.skills-section {
  margin-top: 30px;
  .progress-box {
    h5 {
      color: #222222;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .progress {
    background: #f9f9f9;
    height: 10px;
    margin-bottom: 30px;
    .progress-bar {
      background: $preset;
    }
  }
}
</style>
