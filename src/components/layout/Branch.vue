<template>
  <section id="team" class="section-padding text-center">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Meet our team</h2>
        <p>
          A desire to help and empower others between community contributors in technology
          <br>began to grow in 2020.
        </p>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-3" v-for="(item, index) in items" :key="index">
          <!-- Team Item Starts -->
          <div class="team-item text-center wow fadeInRight" data-wow-delay="0.3s">
            <div class="team-img">
              <img class="img-fluid" :src="item.image" alt>
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
                <router-link :to="item.linkTo">{{item.title}}</router-link>
              </h3>
              <p>{{item.description}}</p>
            </div>
          </div>
          <!-- Team Item Ends -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imgTeam01 from "./../../assets/img/team/team-01.png";
import imgTeam02 from "./../../assets/img/team/team-02.png";
import imgTeam03 from "./../../assets/img/team/team-03.png";
import imgTeam04 from "./../../assets/img/team/team-04.png";

export default {
  name: "Branch",
  data: function() {
    return {
      items: [
        {
          image: imgTeam01,
          title: "David Smith",
          description: "Front-end Developer",
          linkTo: "/"
        },
        {
          image: imgTeam02,
          title: "Ote Mona",
          description: "Developer",
          linkTo: "/"
        },
        {
          image: imgTeam03,
          title: "Nak Crne",
          description: "Backend Developer",
          linkTo: "/"
        },
        {
          image: imgTeam04,
          title: "Jackie Moin",
          description: "FullStack Developer",
          linkTo: "/"
        }
      ]
    };
  }
};
</script>
