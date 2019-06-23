<template>
  <div id="clients" class="section-padding bg-gray">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">NOTABLE CLIENTS</h2>
        <p>Over the last 20 years, we have helped and guided organisations to achieve outstanding results</p>
      </div>
      <div class="row text-align-">
        <div
          class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
          data-wow-delay="0.3s"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="client-item-wrapper">
            <img class="img-fluid" :src="item.image" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import client01 from "./../../assets/img/clients/img1.png";
import client02 from "./../../assets/img/clients/img2.png";
import client03 from "./../../assets/img/clients/img3.png";
import client04 from "./../../assets/img/clients/img4.png";

export default {
  name: "Clients",
  data: function() {
    return {
      items: [
        {
          title: "",
          image: client01
        },
        {
          title: "",
          image: client02
        },
        {
          title: "",
          image: client03
        },
        {
          title: "",
          image: client04
        }
      ]
    };
  }
};
</script>

