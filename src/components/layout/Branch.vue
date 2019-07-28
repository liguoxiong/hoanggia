<template>
  <section id="team" class="section-padding text-center">
    <div class="container">
      <div class="section-header text-center">
        <h2
          class="section-title wow fadeInDown"
          data-wow-delay="0.3s"
        >{{content ? content.distributor_title[lang] : ""}}</h2>
        <p>{{content ? content.distributor_description[lang] : ""}}</p>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-3" v-for="(item, index) in items" :key="index">
          <!-- Team Item Starts -->
          <div class="team-item text-center wow fadeInRight" data-wow-delay="0.3s">
            <div class="team-img">
              <img class="img-fluid" :src="/images/ + item.image" alt />
              <div class="team-overlay">
                <div class="overlay-social-icon text-center">
                  <ul class="social-icons">
                    <li>
                      <a href="#">
                        <i class="lni-facebook-filled" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni-twitter-filled" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni-instagram-filled" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="info-text">
              <h3>
                <router-link :to="item.link">{{item.name}}</router-link>
              </h3>
              <p>{{item[lang]}}</p>
            </div>
          </div>
          <!-- Team Item Ends -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import store from "@/store";
import { mapState } from "vuex";

export default {
  name: "Branch",
  store: store,
  computed: mapState(["lang", "content"]),
  data: function() {
    return {
      items: []
    };
  },
  mounted() {
    axios.get("/api/branches").then(response => {
      return (this.items = response.data.data);
    });
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 20vh;
}
.row {
  justify-content: center;
}
</style>
