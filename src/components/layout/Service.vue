<template>
  <section id="services" class="section-padding bg-gray">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Our Services</h2>
        <p>
          A desire to help and empower others between community contributors in technology
          <br>began to grow in 2020.
        </p>
      </div>
      <div class="row">
        <!-- Services item -->
        <div class="col-md-6 col-lg-4 col-xs-12" v-for="(item, index) in items" :key="index">
          <div class="services-item wow fadeInRight" :data-wow-delay="delay(index)">
            <div class="icon">
              <i class="lni-pencil"></i>
            </div>
            <div class="services-content">
              <h3>
                <router-link :to="item.linkTo">{{item.title}}</router-link>
              </h3>
              <p>{{item.description}}</p>
            </div>
          </div>
        </div>
        <!-- Services item -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Service",
  data: function() {
    return {
      items: [
        {
          icon: "lni-rocket",
          title: "Content Writing",
          linkTo: "#",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur..."
        },
        {
          icon: "lni-rocket",
          title: "Digital Marketing",
          linkTo: "#",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur..."
        },
        {
          icon: "lni-rocket",
          title: "Content Writing",
          linkTo: "#",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur..."
        },
        {
          icon: "lni-rocket",
          title: "Web Development",
          linkTo: "#",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur..."
        },
        {
          icon: "lni-rocket",
          title: "IOS & Android",
          linkTo: "#",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur..."
        },
        {
          icon: "lni-rocket",
          title: "Branding & Identity",
          linkTo: "#",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur..."
        }
      ]
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
    i {
      font-size: 42px;
      color: $preset;
    }
  }
  .services-content {
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
