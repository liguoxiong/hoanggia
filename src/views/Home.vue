<template>
  <div>
    <Feature/>
    <Service/>
    <Branch/>
    <Product/>
    <LastestBlog/>
    <Clients/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Feature from "./../components/layout/Feature";
import Service from "./../components/layout/Service";
import Branch from "./../components/layout/Branch";
import Product from "./../components/layout/Product";
import LastestBlog from "./../components/layout/LastestBlog";
import Clients from "./../components/layout/Clients";
import Contact from "./../components/layout/Contact";
import Footer from "./../components/layout/Footer";

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
  }
};
</script>
