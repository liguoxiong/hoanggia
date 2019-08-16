<template>
  <div>
    <header id="header-wrap">
      <!-- Navbar Start -->
      <nav class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <a href="index.html" class="navbar-brand">
            <img src="./../assets/img/logo.png" alt />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="lni-menu"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li class="nav-item active">
                <a class="nav-link" href="#hero-area">{{ $t("home") }}</a>
              </li>
              <li class="nav-item" v-for="(navItem, index) in navItems" :key="index">
                <a class="nav-link" :href="navItem.linkTo">{{ $t(navItem.title) }}</a>
              </li>
              <li class="nav-item">
                <div class="nav-link">|</div>
              </li>
              <li class="nav-item">
                <div v-on:click="handleChangeLang()" class="nav-link">{{ language }}</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Navbar End -->

      <!-- Hero Area Start -->
      <div id="hero-area" class="hero-area-bg">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="contents text-center">
                <h2 class="head-title wow fadeInUp">{{content ? content.header[lang] : ""}}</h2>
                <!-- <div class="header-button wow fadeInUp" data-wow-delay="0.3s">
                  <a href="#services" class="btn btn-common">Explore</a>
                </div>-->
              </div>
              <div class="carosel">
                <carousel :perPage="1" :autoplay="true" :loop="true" :autoplayTimeout="4000">
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
    <!-- Header Area wrapper End -->

    <!-- Feature Section Start -->
    <div id="feature">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="text-wrapper">
              <div>
                <h2
                  class="title-hl wow fadeInLeft"
                  data-wow-delay="0.3s"
                >{{content ? content.feature_title[lang] : ""}}</h2>
                <p class="mb-4">{{content ? content.feature_description[lang] : ""}}</p>
                <!-- <a href="#" class="btn btn-common">More About Us</a> -->
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 padding-none feature-bg">
            <div class="feature-thumb">
              <div
                class="feature-item wow fadeInDown"
                data-wow-duration="1000ms"
                v-for="(item, index) in features"
                :data-wow-delay="delay(index)"
                :key="index"
              >
                <div class="icon">
                  <img :src="/images/ + item.image" :alt="item.name[lang]" />
                </div>
                <div class="feature-content">
                  <h3>{{ item ? item.name[lang] : "" }}</h3>
                  <p>{{ item ? item.description[lang] : "" }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Feature Section End -->

    <!-- Services Section Start -->
    <section id="services" class="section-padding bg-gray">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">{{ $t("services") }}</h2>
          <p>{{content ? content.service_description[lang] : ""}}</p>
        </div>
        <div class="row">
          <!-- Services item -->
          <div class="col-md-6 col-lg-4 col-xs-12" v-for="(item, index) in services" :key="index">
            <div class="services-item wow fadeInRight" data-wow-delay="0.3s">
              <div class="icon">
                <img :src="/images/ + item.image" :alt="item.name[lang]" />
              </div>
              <div class="services-content">
                <h3>
                  <a href="#">{{item.name ? item.name[lang] : ""}}</a>
                </h3>
                <p>{{item.description ? item.description[lang] : ""}}</p>
              </div>
            </div>
          </div>
          <!-- Services item -->
        </div>
      </div>
    </section>
    <!-- Services Section End -->

    <!-- Team Section Start -->
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
          <div class="col-sm-6 col-md-6 col-lg-3" v-for="(item, index) in branches" :key="index">
            <!-- Team Item Starts -->
            <div class="team-item text-center wow fadeInRight" data-wow-delay="0.3s">
              <div class="team-img">
                <img class="img-fluid" :src="/images/ + item.image" alt />
                <div class="team-overlay">
                  <div class="overlay-social-icon text-center">
                    <!-- <ul class="social-icons">
                      <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="lni-instagram-filled" aria-hidden="true"></i></a></li>
                    </ul>-->
                  </div>
                </div>
              </div>
              <div class="info-text">
                <h3>
                  <a :href="item.link">{{item.name}}</a>
                </h3>
                <p>{{item[lang]}}</p>
              </div>
            </div>
            <!-- Team Item Ends -->
          </div>
        </div>
      </div>
    </section>
    <!-- Team Section End -->

    <!-- Counter Section Start -->
    <!-- <section id="counter" class="section-padding">
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-12 col-md-12 col-xs-12">
            <div class="row">
              Start counter
              <div class="col-lg-3 col-md-6 col-xs-12">
                <div class="counter-box wow fadeInUp" data-wow-delay="0.2s">
                  <div class="icon-o">
                    <i class="lni-users"></i>
                  </div>
                  <div class="fact-count">
                    <h3>
                      <span class="counter">23576</span>
                    </h3>
                    <p>Users</p>
                  </div>
                </div>
              </div>
              End counter
              Start counter
              <div class="col-lg-3 col-md-6 col-xs-12">
                <div class="counter-box wow fadeInUp" data-wow-delay="0.4s">
                  <div class="icon-o">
                    <i class="lni-emoji-smile"></i>
                  </div>
                  <div class="fact-count">
                    <h3>
                      <span class="counter">2124</span>
                    </h3>
                    <p>Positive Reviews</p>
                  </div>
                </div>
              </div>
              End counter
              Start counter
              <div class="col-lg-3 col-md-6 col-xs-12">
                <div class="counter-box wow fadeInUp" data-wow-delay="0.6s">
                  <div class="icon-o">
                    <i class="lni-download"></i>
                  </div>
                  <div class="fact-count">
                    <h3>
                      <span class="counter">54598</span>
                    </h3>
                    <p>Downloads</p>
                  </div>
                </div>
              </div>
              End counter
              Start counter
              <div class="col-lg-3 col-md-6 col-xs-12">
                <div class="counter-box wow fadeInUp" data-wow-delay="0.8s">
                  <div class="icon-o">
                    <i class="lni-thumbs-up"></i>
                  </div>
                  <div class="fact-count">
                    <h3>
                      <span class="counter">3212</span>
                    </h3>
                    <p>Followers</p>
                  </div>
                </div>
              </div>
              End counter
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- Counter Section End -->

    <!-- Pricing section Start -->
    <!-- <section id="pricing" class="section-padding bg-gray">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Best Pricing</h2>
          <p>
            A desire to help and empower others between community contributors in technology
            <br />began to grow in 2020.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="table wow fadeInLeft" data-wow-delay="1.2s">
              <div class="title">
                <h3>Basic</h3>
              </div>
              <div class="pricing-header">
                <p class="price-value">
                  $12.90
                  <span>/ Month</span>
                </p>
              </div>
              <ul class="description">
                <li>Business Analyzing</li>
                <li>24/7 Tech Suport</li>
                <li>Operational Excellence</li>
                <li>Business Idea Ready</li>
                <li>2 Database</li>
                <li>Customer Support</li>
              </ul>
              <button class="btn btn-common">Get It</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12 active">
            <div class="table wow fadeInUp" id="active-tb" data-wow-delay="1.2s">
              <div class="title">
                <h3>Profesional</h3>
              </div>
              <div class="pricing-header">
                <p class="price-value">
                  $49.90
                  <span>/ Month</span>
                </p>
              </div>
              <ul class="description">
                <li>Business Analyzing</li>
                <li>24/7 Tech Suport</li>
                <li>Operational Excellence</li>
                <li>Business Idea Ready</li>
                <li>2 Database</li>
                <li>Customer Support</li>
              </ul>
              <button class="btn btn-common">Get It</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="table wow fadeInRight" data-wow-delay="1.2s">
              <div class="title">
                <h3>Expert</h3>
              </div>
              <div class="pricing-header">
                <p class="price-value">
                  $89.90
                  <span>/ Month</span>
                </p>
              </div>
              <ul class="description">
                <li>Business Analyzing</li>
                <li>24/7 Tech Suport</li>
                <li>Operational Excellence</li>
                <li>Business Idea Ready</li>
                <li>2 Database</li>
                <li>Customer Support</li>
              </ul>
              <button class="btn btn-common">Get It</button>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- Pricing Table Section End -->

    <!-- <div class="skill-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
            <img class="img-fluid" src="./../assets/img/about/img-1.jpg" alt />
          </div>
          <div class="col-lg-6 col-md-12 col-xs-12 info wow fadeInRight" data-wow-delay="0.3s">
            <div class="site-heading">
              <h2 class="section-title">
                Our
                <span>Skill</span>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus architecto laudantium dolorem, aut aspernatur modi minima alias provident obcaecati! Minima odio porro nemo magnam dolore minus asperiores veniam dolorum est!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, nesciunt possimus quaerat ipsam, corporis architecto aspernatur non aut! Dolorum consectetur placeat excepturi, perspiciatis sunt.</p>
            </div>
            <div class="skills-section">
              Progress Bar Start
              <div class="progress-box">
                <h5>
                  Strategy &amp; Analysis
                  <span class="pull-right">88%</span>
                </h5>
                <div class="progress" style="opacity: 1; left: 0px;">
                  <div class="progress-bar" role="progressbar" data-width="87" style="width: 87%;"></div>
                </div>
              </div>
              <div class="progress-box">
                <h5>
                  Eeconomic growth
                  <span class="pull-right">95%</span>
                </h5>
                <div class="progress" style="opacity: 1; left: 0px;">
                  <div class="progress-bar" role="progressbar" data-width="96" style="width: 96%;"></div>
                </div>
              </div>
              <div class="progress-box">
                <h5>
                  Achieves goals
                  <span class="pull-right">70%</span>
                </h5>
                <div class="progress" style="opacity: 1; left: 0px;">
                  <div class="progress-bar" role="progressbar" data-width="52" style="width: 52%;"></div>
                </div>
              </div>
              End Progressbar
            </div>
          </div>
        </div>
      </div>
    </div>-->

    <!-- Portfolio Section -->
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
          <div class="col-lg-4 col-md-6 col-xs-12" v-for="(item, index) in products" :key="index">
            <div class="portfolio-item">
              <div class="shot-item">
                <img :src="/images/ + item.image" alt />
                <div class="single-content">
                  <div class="fancy-table">
                    <div class="table-cell">
                      <!-- <div class="zoom-icon">
                        <a class="lightbox" href="./../assets/img/portfolio/img-1.jpg"><i class="lni-eye item-icon"></i></a>
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
    <!-- Portfolio Section Ends -->

    <!-- Testimonial Section Start -->
    <!-- <section id="testimonial" class="testimonial section-padding">
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div id="testimonials" class="owl-carousel wow fadeInUp" data-wow-delay="1.2s">
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="./../assets/img/testimonial/img1.jpg" alt />
                  </div>
                  <div class="info">
                    <h2>
                      <a href="#">Grenchen Pearce</a>
                    </h2>
                    <h3>
                      <a href="#">Boston Brothers co.</a>
                    </h3>
                  </div>
                  <div class="content">
                    <p
                      class="description"
                    >Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness.</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="./../assets/img/testimonial/img2.jpg" alt />
                  </div>
                  <div class="info">
                    <h2>
                      <a href="#">Domeni GEsson</a>
                    </h2>
                    <h3>
                      <a href="#">Awesome Technology co.</a>
                    </h3>
                  </div>
                  <div class="content">
                    <p
                      class="description"
                    >Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness.</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="./../assets/img/testimonial/img3.jpg" alt />
                  </div>
                  <div class="info">
                    <h2>
                      <a href="#">Dommini Albert</a>
                    </h2>
                    <h3>
                      <a href="#">Nesnal Design co.</a>
                    </h3>
                  </div>
                  <div class="content">
                    <p
                      class="description"
                    >Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness.</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="./../assets/img/testimonial/img4.png" alt />
                  </div>
                  <div class="info">
                    <h2>
                      <a href="#">Fernanda Anaya</a>
                    </h2>
                    <h3>
                      <a href="#">Developer</a>
                    </h3>
                  </div>
                  <div class="content">
                    <p
                      class="description"
                    >Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness.</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="./../assets/img/testimonial/img5.png" alt />
                  </div>
                  <div class="info">
                    <h2>
                      <a href="#">Jason A.</a>
                    </h2>
                    <h3>
                      <a href="#">Designer</a>
                    </h3>
                  </div>
                  <div class="content">
                    <p
                      class="description"
                    >Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- Testimonial Section End -->

    <!-- Blog Section -->
    <!-- <section id="blog" class="section-padding">
      Container Starts
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Latest blog</h2>
          <p>
            A desire to help and empower others between community contributors in technology
            <br />began to grow in 2020.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
            Blog Item Starts
            <div class="blog-item-wrapper wow fadeInLeft" data-wow-delay="0.3s">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="./../assets/img/blog/img1.jpg" alt />
                </a>
              </div>
              <div class="blog-item-text">
                <h3>
                  <a href="single-post.html">Suspendisse dictum non velit</a>
                </h3>
                <p>Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas.</p>
                <a href="single-post.html" class="btn btn-common btn-rm">Read More</a>
              </div>
            </div>
            Blog Item Wrapper Ends
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
            Blog Item Starts
            <div class="blog-item-wrapper wow fadeInUp" data-wow-delay="0.6s">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="./../assets/img/blog/img2.jpg" alt />
                </a>
              </div>
              <div class="blog-item-text">
                <h3>
                  <a href="single-post.html">Remarkably Did Increasing</a>
                </h3>
                <p>Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas.</p>
                <a href="single-post.html" class="btn btn-common btn-rm">Read More</a>
              </div>
            </div>
            Blog Item Wrapper Ends
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
            Blog Item Starts
            <div class="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="./../assets/img/blog/img3.jpg" alt />
                </a>
              </div>
              <div class="blog-item-text">
                <h3>
                  <a href="single-post.html">Changing the topic scope</a>
                </h3>
                <p>Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas.</p>
                <a href="single-post.html" class="btn btn-common btn-rm">Read More</a>
              </div>
            </div>
            Blog Item Wrapper Ends
          </div>
        </div>
      </div>
    </section>-->
    <!-- blog Section End -->

    <!-- Start Video promo Section -->
    <!-- <section class="video-promo section-padding">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="video-promo-content text-center wow fadeInUp" data-wow-delay="0.3s">
              <a href="https://www.youtube.com/watch?v=yP6kdOZHids" class="video-popup">
                <i class="lni-film-play"></i>
              </a>
              <h2
                class="mt-3 wow zoomIn"
                data-wow-duration="1000ms"
                data-wow-delay="100ms"
              >Watch Video</h2>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- End Video Promo Section -->

    <!-- Clients Section Start -->
    <div id="clients" class="section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">{{$t("clients")}}</h2>
          <p>{{content ? content.clients_description[lang] : ""}}</p>
        </div>
        <div class="row text-align-">
          <div
            class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
            data-wow-delay="0.3s"
            v-for="(item, index) in clients"
            :key="index"
          >
            <div class="client-item-wrapper">
              <img class="img-fluid" :src="/images/ + item.image" :alt="item.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Clients Section End -->

    <!-- Contact Section Start -->
    <section id="contact" class="section-padding bg-gray">
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
                        v-model="form.name"
                        name="name"
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
                        v-model="form.email"
                        class="form-control"
                        name="email"
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
                        required
                        v-model="form.subject"
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
              <!-- <div class="contact-title">
                <h1>We're a friendly bunch..</h1>
                <p>We create projects for companies and startups with a passion for quality</p>
              </div>-->
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
                  <p>Email: {{info.email ? info.email : ""}}</p>
                </div>
                <div class="single-contact">
                  <div class="contact-icon">
                    <i class="lni-phone-handset"></i>
                  </div>
                  <p>{{$t("phone")}}: {{info.phone ? info.phone : ""}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section End -->

    <!-- Copyright Section Start -->
    <div class="copyright">
      <div class="container">
        <div class="row">
          <p class>Copyright &copy; Hoanggia Co., Ltd. All Rights Reserved</p>
        </div>
      </div>
    </div>
    <!-- Copyright Section End -->

    <!-- Go to Top Link -->
    <a href="#" class="back-to-top">
      <i class="lni-arrow-up"></i>
    </a>

    <!-- Preloader -->
    <div id="preloader">
      <div class="loader" id="loader-1"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { mapState } from "vuex";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "home",
  components: {
    // Navbar,
    Carousel,
    Slide
  },
  computed: mapState(["lang", "content"]),
  data: function() {
    var that = this;
    return {
      services: [],
      carosels: [],
      features: [],
      clients: [],
      branches: [],
      isActive: "",
      categories: [],
      products: [],
      info: {},
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      navItems: [
        {
          title: "about",
          linkTo: "#feature"
        },
        {
          title: "services",
          linkTo: "#services"
        },
        {
          title: "distributor",
          linkTo: "#team"
        },
        {
          title: "products",
          linkTo: "#portfolios"
        },
        {
          title: "client",
          linkTo: "#clients"
        },
        {
          title: "contact",
          linkTo: "#contact"
        }
      ],
      selected: "",
      changeNavBg: false,
      optionLangs: [
        {
          text: "Tiếng Việt",
          value: "vi"
        },
        {
          text: "English",
          value: "en"
        }
      ],
      language: "",
      index: 0,
      pageNum: 0,
      show: true,
      opts: {
        start: 0,
        dir: "v",
        loop: false,
        duration: 300,
        beforeChange: function(ele, current, next) {
          console.log("before", current, next);
          that.index = next;
        },
        afterChange: function(ele, current) {
          that.index = current;
          console.log("after", current);
        }
      }
    };
  },
  mounted() {
    this.$store.dispatch("getContent").then();
    this.selected = window.localStorage.getItem("language") || "vi";
    if (this.selected === "vi") {
      this.language = "English";
    } else {
      this.language = "Tiếng Việt";
    }
    axios.get("/api/carosels").then(response => {
      // console.log(response.data);
      return (this.carosels = response.data.data);
    });
    axios.get("/api/services").then(response => {
      return (this.services = response.data.data);
    });
    axios.get("/api/features").then(response => {
      return (this.features = response.data.data);
    });
    axios.get("/api/clients").then(response => {
      return (this.clients = response.data.data);
    });
    axios.get("/api/branches").then(response => {
      return (this.branches = response.data.data);
    });
    axios.get("/api/categories").then(response => {
      return (this.categories = response.data.data);
    });
    axios.get("/api/products").then(response => {
      this.isActive = "all";
      // console.log(this.isActive);
      return (this.products = response.data.data);
    });
    axios.get("/api/info").then(response => {
      return (this.info = response.data.data[0]);
    });
  },
  methods: {
    moveTo: function(index) {
      console.log("move", index);
      this.$refs.fullpage.$fullpage.moveTo(index, true);
    },
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
    },
    delay(milsec) {
      return `${300 + milsec * 200}ms`;
    },
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
    },
    showPage: function() {
      this.pageNum++;
      this.$refs.fullpage.$fullpage.$update();
    },
    toggleNavbar() {
      this.show = !this.show;
    },
    handleChangeLang() {
      if (this.language === "English") {
        this.$store.dispatch("setLang", "en");
        this.language = "Tiếng Việt";
      } else {
        this.$store.dispatch("setLang", "vi");
        this.language = "English";
      }
    },
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      this.changeNavBg = currentScrollPosition > 50;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
#hero-area {
  h2 {
    font-size: 2em !important;
  }
  .carosel {
    height: 65vh;
    margin-bottom: 5vh;
    div {
      height: 65vh;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .contents {
    padding: 15vh 0 5vh;
    .head-title {
      color: #585b60;
      text-transform: uppercase;
      font-size: 30px;
      line-height: 48px;
      font-weight: 700;
      margin-bottom: 30px;
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
}
#services {
  .icon {
    height: 35vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .services-content {
    height: 28vh;
  }
  .row {
    justify-content: center;
  }
}

#feature {
  .icon {
    float: left;
    border: 1px solid #fff;
    width: 80px;
    height: 80px;
    text-align: center;
    border-radius: 50%;
    // transition: all 0.6s ease;
    // -moz-transition: all 0.6s ease;
    // -webkit-transition: all 0.6s ease;
    img {
      // font-size: 36px;
      // color: #fff;
      // line-height: 80px;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .feature-content {
    color: #fff;
    margin-left: 100px;
    h3 {
      color: #fff;
      text-transform: uppercase;
      font-size: 20px;
    }
  }
}

#clients {
  img {
    height: 15vh;
  }
  .row {
    justify-content: center;
  }
}

#team {
  img {
    height: 20vh;
  }
  .row {
    justify-content: center;
  }
}

#portfolios {
  .active {
    color: $preset !important;
    border-color: $preset;
    background: transparent !important;
  }
  .portfolio-item {
    .shot-item {
      height: 45vh;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.copyright {
  background: #34363a;
  .container {
    justify-content: center;
    .row {
      justify-content: center;
    }
  }
  p {
    line-height: 60px;
    color: #fff;
    text-align: center;
    margin: 0;
    a {
      color: #fff;
      &:hover {
        color: $preset;
      }
    }
  }
}
</style>