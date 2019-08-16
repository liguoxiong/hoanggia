    <template>
  <header id="header-wrap">
    <!-- <Navbar /> -->
    <div id="hero-area" class="hero-area-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="contents text-center">
              <h2 class="head-title wow fadeInUp">{{content ? content.header[lang] : ""}}</h2>
            </div>
            <div class="carosel">
              <carousel :perPage="1" :autoplay="true" :navigationEnabled="true">
                <slide v-for="carosel in carosels" :key="carosel.id">
                  <div class="img-thumb text-center wow fadeInUp" data-wow-delay="0.6s">
                    <img class="img-fluid" :src="/images/ + carosel.image" alt />
                    <div class="single-content">
                      <div class="fancy-table">
                        <div class="table-cell">
                          <h3>{{carosel.name ? carosel.name[lang] : ""}}</h3>
                          <p>{{carosel.description ? carosel.description[lang] : ""}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Area End -->
  </header>
</template>
    
<script>
// import Navbar from "./Navbar";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: mapState(["lang", "content"]),
  mounted() {
    axios.get("/api/carosels").then(response => {
      // console.log(response.data);
      return (this.carosels = response.data.data);
    });
  },
  components: {
    // Navbar,
    Carousel,
    Slide
  },
  data: function() {
    return {
      carosels: []
    };
  }
};
</script>

<style lang="scss" scoped>
.carosel {
  height: 50vh;
  img {
    height: 50vh;
    width: 100%;
    object-fit: cover;
  }
}
#hero-area {
  height: 100vh;
  color: #fff;
  overflow: hidden;
  position: relative;
  background: url(./../../assets/img/hero-bg.png);
  .contents {
    padding: 90px 0px 50px;
    .head-title {
      color: #585b60;
      text-transform: uppercase;
      font-size: 30px;
      line-height: 48px;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
}

.single-content {
  background-color: rgba(22, 26, 39, 0.1);
  // height: 100%;
  left: 0;
  // opacity: 0;
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
      h3 {
        color: white;
      }
      p {
        font-size: 2em;
      }
      text-align: center;
    }
  }
}
img {
  vertical-align: center;
  // height: 100%;
  // max-width: 100%;
  // object-fit: fill;
}
</style>
