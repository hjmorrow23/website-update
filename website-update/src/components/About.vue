<template>
  <div class="about-view slider">
    <div class="about-wrapper">
      <AppHeader></AppHeader>
      <section class="greetings">
        <div class="greetings-left">
          <h1 class="greetings-heading">Nice to meet you!</h1>
          <h2 class="greetings-intro">I'm a developer, communicator and all around problem solver living in the Metro Detroit area. I'm passionate about making clean, responsive and interactive web experiences with the user at the forefront of my thought process.</h2>
          <p class="greetings-text">I love working with companies of all sizes to help them create experiences that meet their vision and get results. To do this, I meticulously monitor the details of each project until I've produced a product that I'm proud of.</p>
          <p class="greetings-text">I'm always eager to keep learning new technologies, so you can be sure to find me at local development meetups in the Metro Detroit area. In my spare time I enjoy writing stories, playing basketball, gaming and prepping to be a dad.</p>
          <span v-if="aboutShowing === false" @click="toggleAbout" class="greetings-text-toggle"><font-awesome-icon class="greetings-text-toggle-icon" icon="plus" />Show More</span>
          <span v-if="aboutShowing === true" @click="toggleAbout" class="greetings-text-toggle"><font-awesome-icon class="greetings-text-toggle-icon" icon="minus" />Show Less</span>
        </div>
        <div class="greetings-right">
          <span class="greetings-image"></span>
          <a href="https://www.linkedin.com/in/henry-morrow-65b54032/" target="_blank" class="greetings-social linkedin"></a>
          <a href="https://www.instagram.com/hj_morrow/" target="_blank" class="greetings-social insta"></a>
          <a href="https://github.com/hjmorrow23" target="_blank" class="greetings-social github"></a>
          <a href="https://codepen.io/henryjmorrow/" target="_blank" class="greetings-social codepen"></a>
        </div>
      </section>
      <section class="skills">
        <h1 class="skills-main-heading">What am I bringing to the table?</h1>
        <div class="skills-column">
          <h2 class="skills-heading">Skills and Technologies</h2>
          <div class="skills-left">
            <ul class="skills-list">
              <li class="skills-list-item">HTML5</li>
              <li class="skills-list-item">CSS3</li>
              <li class="skills-list-item">Sass/Less</li>
              <li class="skills-list-item">JS</li>
              <li class="skills-list-item">Jquery</li>
              <li class="skills-list-item">ReactJS</li>
              <li class="skills-list-item">AJAX</li>
            </ul>
          </div>
          <div class="skills-right">
            <ul class="skills-list">
              <li class="skills-list-item">VueJS</li>
              <li class="skills-list-item">Gulp</li>
              <li class="skills-list-item">Webpack</li>
              <li class="skills-list-item">Git</li>
              <li class="skills-list-item">Sketch/Photoshop</li>
              <li class="skills-list-item">Communication</li>
              <li class="skills-list-item">Performance Optimisation</li>
            </ul>
          </div>
        </div>
        <div class="methodologies">
          <h2 class="methodologies-heading">Methodologies</h2>
          <div class="methodologies-left">
            <ul class="methodologies-list">
              <li class="methodologies-list-item">Object Oriented Programming</li>
              <li class="methodologies-list-item">MVC</li>
              <li class="methodologies-list-item">Agile</li>
            </ul>
          </div>
        </div>
      </section>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'
import {TweenMax,  Power2, TimelineLite, CSSPlugin, ScrollToPlugin, Draggable, Elastic} from "gsap/all"
import Router from 'vue-router'

export default {
    name: 'About',
    components: {
      AppHeader,
      AppFooter
    },
    data() {
        return {
          aboutShowing: false
        };
    },
    methods: {
      handleScroll (e) {
        let topDiv = $('.greetings').height();
        console.log(topDiv);
        if($(window).scrollTop() >= 542) {
          $(".ham").css("background-color", "#F3F4F1");
        } else {
          $(".ham").css("background-color", "#002244");
        }
      },
      toggleAbout() {
        $('.greetings-text').slideToggle();
        this.aboutShowing = !this.aboutShowing;
      },
      showContent() {
        let tl = new TimelineLite();
        tl.from(".greetings-heading", 1, {opacity: 0, left: -100})
        .from(".greetings-intro", .35, {opacity: 0, left: -100})
        .from(".greetings-text-toggle", .35, {opacity: 0, left: -50})
        .from(".greetings-image", .35, {opacity: 0, right: -100})
        .staggerFrom(".greetings-social", .35, {opacity: 0, bottom: "-100%"}, .2);
      },
      showSkills() {
        // console.log($(window).scrollTop());
        if($(window).scrollTop() > 400) {
          let tl = new TimelineLite();
          tl.to(".skills-main-heading", .5, {opacity: 1, left: 0})
          .to(".skills-column", .35, {opacity: 1, left: 0})
          .to(".methodologies", .35, {opacity: 1, left: 0});
        }
        let topDiv = $('.greetings').outerHeight();
        if($(window).scrollTop() >= topDiv) {
          $(".ham").css("background-color", "#F3F4F1");
        } else {
          $(".ham").css("background-color", "#002244");
        }

      }
    },
    mounted() {
      $(".ham").css("background-color", "#002244");
      this.showContent();
    },
    created() {
      window.addEventListener('scroll', this.showSkills);
    },
    destroyed() {
      window.removeEventListener('scroll', this.showSkills);
    }
};
</script>

<style lang="scss">
@import "@/assets/stylesheets/variables.scss";
@import "@/assets/stylesheets/palette.scss";
@import "@/assets/stylesheets/mixins.scss";
@import "@/assets/stylesheets/animations.scss";
@import "@/assets/stylesheets/reset.scss";
@import "@/assets/stylesheets/fonts.scss";
@import "@/assets/stylesheets/about.scss";
</style>
