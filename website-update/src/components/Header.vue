<template>
  <div class="nav-holder">
    <div class="ham-container" @click="toggleMenu">
      <span class="ham ham-top"></span>
      <span class="ham ham-middle"></span>
      <span class="ham ham-bottom"></span>
    </div>
    <nav class="main-nav">
      <ul class="nav-list">
        <li class="nav-list-item">
          <router-link @click="toggleMenu" to="/home" class="nav-list-link">Home</router-link>
        </li>
        <li class="nav-list-item">
          <router-link @click="toggleMenu" to="/about" class="nav-list-link">About</router-link>
        </li>
        <li class="nav-list-item">
          <router-link @click="toggleMenu" to="/projects" class="nav-list-link">Projects</router-link>
        </li>
        <li class="nav-list-item">
          <router-link @click="toggleMenu" to="/blog" class="nav-list-link">Blog</router-link>
        </li>
        <li class="nav-list-item">
          <router-link @click="toggleMenu" to="/contact" class="nav-list-link">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
import Router from 'vue-router'

export default {
    name: 'AppHeader',
    components: {

    },
    data() {
        return {
          menuOpen: false
        };
    },
    methods: {
      toggleMenu: function(e) {
        if (!this.menuOpen) {
          $(".ham-top").css("animation", "ham-top-to-cross 1s forwards");
          $(".ham-middle").css("animation", "ham-middle-to-cross 1s forwards");
          $(".ham-bottom").hide(1000);
          $(".main-nav").addClass("nav-show");
          this.menuOpen = true;
        } else {
          $(".ham-top").css("animation", "ham-top-to-burger 1s forwards");
          $(".ham-middle").css("animation", "ham-middle-to-burger 1s forwards");
          $(".ham-bottom").show(1000);
          $(".main-nav").removeClass("nav-show");
          this.menuOpen = false;
        }
      },
    },
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
</style>
