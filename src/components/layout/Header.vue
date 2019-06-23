    <template>
  <header id="header-wrap">
    <Navbar/>
    <div id="hero-area" class="hero-area-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="contents text-center">
              <h2 class="head-title wow fadeInUp">
                We Discover, Design & Build Digital
                <br>Presence of Businesses
              </h2>
              <div class="header-button wow fadeInUp" data-wow-delay="0.3s">
                <a href="#services" class="btn btn-common">Explore</a>
              </div>
            </div>
            <div class="img-thumb text-center wow fadeInUp" data-wow-delay="0.6s">
              <img class="img-fluid" src="@/assets/img/hero-1.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Area End -->
  </header>
</template>
    
<script>
import Navbar from "./Navbar";
export default {
  name: "Header",
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
#hero-area {
  color: #fff;
  overflow: hidden;
  position: relative;
  background: url(./../../assets/img/hero-bg.png);
  .contents {
    padding: 170px 0px 50px;
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
</style>
