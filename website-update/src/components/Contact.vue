<template>
  <div class="contact-view slider">
    <div class="contact-wrapper">
      <AppHeader></AppHeader>
      <section class="contact">
        <h1 class="contact-heading">Coffee, Tea or something else? Either way, let's chat.</h1>
        <form class="contact-form" method="POST" action="https://formspree.io/hjmorrow23@gmail.com">
          <fieldset class="contact-fieldset">
            <label class="contact-label" for="Name">Name</label>
            <input type="text" name="Name" placeholder="Jane and John Doe" class="contact-input" />
          </fieldset>
          <fieldset class="contact-fieldset">
            <label class="contact-label" for="Email">Email</label>
            <input type="email" name="Email" placeholder="holdthedoe@gmail.com" class="contact-input" />
          </fieldset>
          <fieldset class="contact-fieldset">
            <label class="contact-label" for="Company">Company (if applicable)</label>
            <input type="text" name="Company" placeholder="Doe & Co." class="contact-input" />
          </fieldset>
          <fieldset class="contact-fieldset">
            <label class="contact-label" for="Reason">Reason for reaching out</label>
            <input type="text" name="Reason" placeholder="Hey cool site! Can you make one for me?" class="contact-input" />
          </fieldset>
          <span class="contact-social-row">
            <a href="https://www.linkedin.com/in/henry-morrow-65b54032/" target="_blank" class="contact-social linkedin"></a>
            <a href="https://www.instagram.com/hj_morrow/" target="_blank" class="contact-social insta"></a>
            <a href="https://github.com/hjmorrow23" target="_blank" class="contact-social github"></a>
            <a href="https://codepen.io/henryjmorrow/" target="_blank" class="contact-social codepen"></a>
          </span>
          <input type="submit" class="contact-submit" value="Start something great"/>
        </form>
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
    name: 'Contact',
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
        if($(window).scrollTop() >= 542) {
          $(".ham").css("background-color", "#002244");
        } else {
          $(".ham").css("background-color", "#F3F4F1");
        }
      },
      showContact() {
        let tl = new TimelineLite();
        tl.from(".contact-heading", 1, {opacity: 0, left: -100})
        .staggerFrom(".contact-label", .5, {opacity: 0, left: -100}, .1)
        .staggerFrom(".contact-input", .5, {opacity: 0, width: 0}, .2)
        .staggerFrom(".contact-social", .35, {opacity: 0, bottom: -50}, .2)
        .from(".contact-submit", .35, {opacity: 0, bottom: -50});
      }
    },
    mounted() {
      this.showContact();
      // $(".ham").css("background-color", "#002244");
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
@import "@/assets/stylesheets/contact.scss";
</style>
