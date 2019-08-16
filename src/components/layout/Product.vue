<template>
  <section id="portfolios" class="section-padding">
    <!-- Container Starts -->
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">{{$t("products")}}</h2>
        <p>{{content ? content.product_description[lang] : ""}}</p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <!-- Portfolio Controller/Buttons -->
          <div class="controls text-center">
            <a
              class="filter btn btn-common btn-effect"
              :class="{active : isActive ==='all'}"
              data-filter="all"
              v-on:click="handleLoadAll()"
            >{{$t("all")}}</a>
            <a
              v-for="category in categories"
              :key="category.id"
              class="filter btn btn-common btn-effect"
              :class="{active : isActive === category.id}"
              data-filter="{category.name[lang]}"
              v-on:click="handleLoadByCat(category.id)"
            >{{category.name[lang]}}</a>
          </div>
          <!-- Portfolio Controller/Buttons Ends-->
        </div>
      </div>

      <!-- Portfolio Recent Projects -->
      <div id="portfolio" class="row">
        <div
          class="col-lg-4 col-md-6 col-xs-12 mix development print"
          v-for="(item, index) in products"
          :key="index"
        >
          <div class="portfolio-item">
            <div class="shot-item">
              <img :src="/images/ + item.image" alt />
              <div class="single-content">
                <div class="fancy-table">
                  <div class="table-cell">
                    <!-- <div class="zoom-icon">
                      <a class="lightbox" href="assets/img/portfolio/img-1.jpg">
                        <i class="lni-eye item-icon"></i>
                      </a>
                    </div>-->
                    <a href="#">{{item.name[lang]}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container Ends -->
  </section>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Product",
  computed: mapState(["lang", "content"]),
  mounted() {
    axios.get("/api/categories").then(response => {
      return (this.categories = response.data.data);
    });
    axios.get("/api/products").then(response => {
      this.isActive = "all";
      // console.log(this.isActive);
      return (this.products = response.data.data);
    });
  },
  data: function() {
    return {
      categories: [],
      products: [],
      isActive: ""
    };
  },
  methods: {
    handleLoadAll() {
      axios.get("/api/products").then(response => {
        this.isActive = "all";
        // console.log(this.isActive);
        return (this.products = response.data.data);
      });
    },
    handleLoadByCat(id) {
      axios.get(`/api/products?cat=${id}`).then(response => {
        this.isActive = id.toString();
        // console.log(this.isActive);
        return (this.products = response.data.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#portfolios {
  background: #f9f9f9;
  .mix {
    padding: 0px;
  }
  .portfolio-item {
    padding: 10px;
  }
}
#portfolio .mix {
  //   display: none;
}
.controls {
  text-align: center;
  padding: 0px 0px 20px;
  .active {
    color: $preset !important;
    border-color: $preset;
    background: transparent !important;
  }
  .btn {
    text-transform: uppercase;
    margin: 2px;
  }
  &:hover {
    color: #fff;
    cursor: pointer;
  }
}
.shot-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.6s ease;
    -moz-transition: all 0.6s ease;
    -webkit-transition: all 0.6s ease;
  }
  .single-content {
    background-color: rgba(22, 26, 39, 0.7);
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: all 0.6s ease;
    -moz-transition: all 0.6s ease;
    -webkit-transition: all 0.6s ease;
    width: 100%;
    .fancy-table {
      display: table;
      height: 100%;
      left: 0;
      position: relative;
      top: 0;
      width: 100%;
      z-index: 2;
      .table-cell {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
    }
    .zoom-icon {
      margin-bottom: 15px;
      a {
        i {
          color: #fff;
          font-size: 22px;
          background: $preset;
          width: 48px;
          height: 48px;
          display: block;
          line-height: 48px;
          margin: 0 auto;
          border-radius: 30px;
        }
      }
    }
    a {
      color: #fff;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 600;
      font-family: "Titillium Web", sans-serif;
    }
  }
}
.shot-item:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.shot-item:hover .single-content {
  opacity: 1;
}
.shot-item:hover .single-content a {
  margin-bottom: 0;
}
</style>
