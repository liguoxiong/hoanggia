<template>
  <section id="contact" class="section-padding">
    <div class="container">
      <div class="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">
        <div class="col-md-6 col-lg-6 col-sm-12">
          <div class="contact-block">
            <form id="contactForm" @submit="onSubmit">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      v-model="form.name"
                      placeholder="Name"
                      required
                      data-error="Please enter your name"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Email"
                      id="email"
                      class="form-control"
                      name="email"
                      v-model="form.email"
                      required
                      data-error="Please enter your email"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      id="msg_subject"
                      class="form-control"
                      v-model="form.subject"
                      required
                      data-error="Please enter your subject"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="message"
                      v-model="form.message"
                      placeholder="Your Message"
                      rows="5"
                      data-error="Write your message"
                      required
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="submit-button">
                    <button class="btn btn-common" id="form-submit" type="submit">Send Message</button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-12">
          <div class="contact-right-area wow fadeIn">
            <div class="contact-title">
              <h1>We're a friendly bunch..</h1>
              <p>We create projects for companies and startups with a passion for quality</p>
            </div>
            <h2>{{$t("contactus")}}</h2>
            <div class="contact-right" v-bind="info">
              <div class="single-contact">
                <div class="contact-icon">
                  <i class="lni-map-marker"></i>
                </div>
                <p>{{$t("address")}}: {{info.address ? info.address[lang] : ""}}</p>
              </div>
              <div class="single-contact">
                <div class="contact-icon">
                  <i class="lni-envelope"></i>
                </div>
                <p>
                  <a href="#">Email: {{info.email ? info.email : ""}}</a>
                </p>
              </div>
              <div class="single-contact">
                <div class="contact-icon">
                  <i class="lni-phone-handset"></i>
                </div>
                <p>
                  <a href="#">{{$t("phone")}}: {{info.phone ? info.phone : ""}}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
// import VueLoading from "vuejs-loading-plugin";

import store from "@/store";
import { mapState } from "vuex";

// Vue.use(VueLoading, {
//   dark: true, // default false
//   text: "Sending", // default 'Loading'
//   loading: true, // default false
//   customLoader: myVueComponent, // replaces the spinner and text with your own
//   background: "rgb(255,255,255)", // set custom background
//   classes: ["myclass"] // array, object or string
// });

export default {
  name: "Contact",
  store,
  computed: mapState(["lang"]),
  data: function() {
    return {
      info: {
        // address: "28 Green Tower, New York City, USA",
        // email: "contact@hoanggia.asia",
        // phone: "+84 846 250 592"
      },
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  mounted() {
    axios.get("/api/info").then(response => {
      return (this.info = response.data.data[0]);
    });
  },
  methods: {
    onSubmit(evt) {
      // this.$loading(true);
      evt.preventDefault();
      const input = {
        name: this.form.name,
        email: this.form.email,
        subject: this.form.subject,
        message: this.form.message
      };
      // console.log("input", input);
      axios.post("/api/sendbasicemail", input).then(res => {
        if (res.data.success) {
          // this.$loading(false);
          alert(res.data.msg);
        } else {
          alert("Please try again!");
          // this.$loading(false);
        }
      });
      this.form.name = "";
      this.form.email = "";
      this.form.subject = "";
      this.form.message = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.form-control {
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  padding: 8px 20px;
  border: 1px solid #f7f7f7;
}
.form-control:focus {
  border-color: $preset;
  box-shadow: none;
  outline: none;
}
textarea {
  border-radius: 4px !important;
}
.form-control:focus {
  box-shadow: none;
  outline: none;
}
.btn.disabled,
.btn:disabled {
  opacity: 1;
}
.contact-form-area {
  h2 {
    font-size: 18px;
    text-transform: uppercase;
  }
}
.contact-right-area {
  margin-left: 50px;
  .contact-title {
    margin-bottom: 20px;
    h1 {
      font-size: 22px;
    }
  }
}
.contact-right {
  padding: 4px;
  .single-contact {
    margin: 30px 0px;
    padding: 3px 55px;
    position: relative;
    color: #abacae;
    p {
      margin-bottom: 0px;
      a {
        color: #abacae;
      }
    }
  }
  .contact-icon {
    background: $preset;
    color: #fff;
    border-radius: 4px;
    font-size: 20px;
    height: 40px;
    left: 0;
    padding-top: 8px;
    position: absolute;
    text-align: center;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 40px;
  }
}
#contact {
  position: relative;
  overflow: hidden;
}
.text-danger {
  font-size: 14px;
  margin-top: 10px;
}
.list-unstyled {
  li {
    color: #d9534f;
  }
}
#conatiner-map {
  margin-top: 30px;
  text-align: center;
  background-color: #fff;
  height: 480px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 101;
  width: 100%;
}
.h3 {
  font-size: 16px;
  margin-top: 26px;
}
// Subscribes
.subscribes {
  background: #f8f9fb;
  h4 {
    text-align: center;
    font-size: 40px;
  }
  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 30px;
  }
}
.subscribe {
  margin-top: 5px;
  width: 100%;
  text-align: center;
  .form-control {
    width: 100%;
    border-radius: 50px;
    position: relative;
    height: 52px;
    border: 1px solid $preset;
  }
  .btn-submit {
    border: none;
    cursor: pointer;
    background: transparent;
    i {
      width: 48px;
      height: 48px;
      background: $preset;
      cursor: pointer;
      display: block;
      color: #fff;
      line-height: 48px;
      border-radius: 50%;
    }
  }
}
</style>
