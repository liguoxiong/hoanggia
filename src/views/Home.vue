<template>
  <div>
    <Feature />
    <Service />
    <Branch />
    <Product />
    <!-- <LastestBlog /> -->
    <Clients />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import VueScrollTo from "vue-scrollto";

import Feature from "./../components/layout/Feature";
import Service from "./../components/layout/Service";
import Branch from "./../components/layout/Branch";
import Product from "./../components/layout/Product";
import LastestBlog from "./../components/layout/LastestBlog";
import Clients from "./../components/layout/Clients";
import Contact from "./../components/layout/Contact";
import Footer from "./../components/layout/Footer";

// VueScrollTo.setDefaults({
//     container: "body",
//     duration: 500,
//     easing: "ease",
//     offset: 0,
//     force: true,
//     cancelable: true,
//     onStart: false,
//     onDone: false,
//     onCancel: false,
//     x: false,
//     y: true
// })

export default {
  name: "home",
  components: {
    Feature,
    Service,
    Branch,
    Product,
    LastestBlog,
    Clients,
    Contact,
    Footer
  },
  mounted() {
    this.$store.dispatch("getContent").then(data => console.log(data));
  }
};
</script>
