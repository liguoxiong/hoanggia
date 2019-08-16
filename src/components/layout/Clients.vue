<template>
  <div id="clients" class="section-padding bg-gray">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">{{$t("clients")}}</h2>
        <p>{{content ? content.clients_description[lang] : ""}}</p>
      </div>
      <div class="row text-align-center">
        <div
          class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
          data-wow-delay="0.3s"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="client-item-wrapper">
            <img class="img-fluid" :src="/images/ + item.image" :alt="item.name" />
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
  name: "Clients",
  computed: mapState(["lang", "content"]),
  data: function() {
    return {
      items: []
    };
  },
  mounted() {
    axios.get("/api/clients").then(response => {
      return (this.items = response.data.data);
    });
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 15vh;
}
.row {
  justify-content: center;
}
</style>