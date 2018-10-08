<template>
  <div class="home home-view slider">
    <header class="home-header">
      <AppHeader></AppHeader>
      <div class="home-header-left">
        <div id="first-heading" class="home-header-text-wrapper">
          <h1 class="home-header-text">Need help on your next web project?</h1>
        </div>
        <div id="second-heading" class="home-header-text-wrapper">
          <h1 class="home-header-text">Well look no further</h1>
        </div>
        <div id="main-heading" class="home-header-text-wrapper">
          <h1 class="home-header-text">Henry Morrow</h1>
          <p class="home-header-subtext">Web Developer</p>
          <router-link to="/projects" class="home-header-link">View Projects</router-link>
        </div>
      </div>
      <div class="home-header-right">
        <div class="home-title-wrapper">
          <h1 class="home-title">Hello!</h1>
          <div class="rotate-wrapper">
            <div class="rotater react-bubble">
              <p class="rotater-title">React</p>
            </div>
            <div class="rotater js-bubble">
              <p class="rotater-title">JS/ES6</p>
            </div>
            <div class="rotater html-bubble">
              <p class="rotater-title">HTML5</p>
            </div>
            <div class="rotater css-bubble">
              <p class="rotater-title">CSS3</p>
            </div>
            <div class="rotater git-bubble">
              <p class="rotater-title">Git</p>
            </div>
            <div class="rotater vue-bubble">
              <p class="rotater-title">Vue</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="scroll-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="34.375" height="80.375" viewBox="0 0 34.375 80.375">
          <path id="mouse-scroll" d="M32.927,37.933c0,6.972-5.652,12.625-12.625,12.625h-6.333C6.997,50.558,1.344,44.905,1.344,37.933V13.917  c0-6.972,5.652-12.625,12.625-12.625l6.333,0c6.973,0,12.625,5.653,12.625,12.625V37.933zM19.198,15.125c0,1.104-0.895,2-2,2h-0.125c-1.104,0-2-0.896-2-2V9.166c0-1.104,0.896-2,2-2h0.125c1.105,0,2,0.896,2,2V15.125zM17.136 7.166 L17.166 1.437zM17.136 17.125 L17.136 23.208z"/>
          <polyline id="arrow1" points="26.948,58.5 17.136,68.313   7.323,58.5 "/>
          <polyline id="arrow2" points="26.948,65.25 17.136,75.063   7.323,65.25 "/>
        </svg>
      </div> -->
    </header>
    <!-- <section class="home-intro">
      <div class="intro-container">
        <h1 class="intro-heading">Projects</h1>
        <ul class="intro-project-list">
          <li class="intro-project-list-item">
            <router-link to="/projects/weather_app" class="intro-project-list-link"></router-link>
            <p class="intro-project-list-text">Weather App</p>
          </li>
          <li class="intro-project-list-item">
            <router-link to="/projects/rostered" class="intro-project-list-link"></router-link>
            <p class="intro-project-list-text">Rostered</p>
          </li>
          <li class="intro-project-list-item">
            <router-link to="/projects/modern_web" class="intro-project-list-link"></router-link>
            <p class="intro-project-list-text">Modern Web</p>
          </li>
        </ul>
        <router-link to="/projects" class="projects-link">View Portfolio</router-link>
      </div>
    </section>
    <AppFooter></AppFooter> -->
  </div>
</template>

<script>
import $ from 'jquery';
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'
import {TweenMax,  Power2, TimelineLite, CSSPlugin, ScrollToPlugin, Draggable, Elastic} from "gsap/all";
import Router from 'vue-router'

export default {
    name: 'Home',
    components: {
      AppHeader,
      AppFooter
    },
    data() {
        return {

        };
    },
    methods: {
      handleScroll (e) {
        if($(window).scrollTop() >= 768) {
          $(".ham").css("background-color", "#002244");
        } else {
          $(".ham").css("background-color", "#F3F4F1");
        }
      },
      moveBubbles() {
        let tl = new TimelineLite();
        let firstMessage = $("#first-heading");
        let secondMessage = $("#second-heading");
        let thirdMessage = $("#main-heading");
        let bubbles = $(".rotater");
        let main = $(".home-title");
        let wrapper = $(".home-title-wrapper");
        tl.from(firstMessage, 1.5, {opacity:0, left: "-100%"})
          .to(firstMessage, 1.5, {opacity:0, right: "100%"})
          .from(secondMessage, 1.5, {opacity:0, left: "-100%"})
          .to(secondMessage, 1.5, {opacity:0, right: "100%"})
          .from(thirdMessage, 1, {opacity:0, left: "-100%"})
          .from(wrapper, 1, {opacity: 0, right: "-100%"})
          .staggerFrom(bubbles, .5, {
            opacity:0,
            right: "-100%"
          }, .2).from(main, .5, {opacity: 0, right: "-100%", onComplete: function() {
            $(".rotate-wrapper").css("animation", "rotate-clockwise 20s infinite linear");
            $(".rotater-title").css("animation", "rotate-counterclockwise 20s infinite linear");
          }});
      }
    },
    mounted() {
      this.moveBubbles();
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
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
@import "@/assets/stylesheets/header.scss";
@import "@/assets/stylesheets/home.scss";

</style>
