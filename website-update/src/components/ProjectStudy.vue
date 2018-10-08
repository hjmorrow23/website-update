<template>
  <div class="projects-view slider">
    <div class="projects-wrapper">
      <div class="projects-banner">
        <img class="projects-banner-image" :src="project.image" />
        <div v-if="project.url === 'rostered'" :id="project.url + '_banner_logo'" class="project-banner-image-logo">Rostered</div>
        <div v-else :id="project.url + '_banner_logo'" class="project-banner-image-logo"></div>
      </div>
      <AppHeader></AppHeader>
      <section class="projects">
        <div class="projects-header">
          <h1 class="projects-heading case-title">{{project.title}}</h1>
        </div>
        <article class="projects-content case-content">
            <p class="projects-content-text">{{project.description}}</p>
            <h2 class="projects-content-h2">Technologies</h2>
            <ul class="projects-content-list">
              <li class="projects-content-list-item" v-for="tech in technologies">{{tech}}</li>
            </ul>
            <a :href="project.link" target="_blank" class="projects-link">See it live</a>
            <div class="projects-gif">
              <img v-if="project.url === 'bcc'" src="../assets/images/bcc.gif" />
              <img v-else-if="project.url === 'modern_web'" src="../assets/images/modern_web.gif" />
            </div>
        </article>
        <ul class="projects-images case-images">
          <li class="projects-images-item">
            <img :src="project.content_image_1" class="project-view-1" alt="Desktop Sample" />
          </li>
          <li class="projects-images-item">
            <img :src="project.content_image_2" class="project-view-2" alt="Mobile Sample" />
          </li>
          <!-- <li class="projects-images-item">
            <img :src="project.content_image_3" />
          </li> -->
        </ul>
      </section>
      <section class="connect">
        <h1 class="connect-main-heading">Want to start a conversation about how you can be next?</h1>
        <router-link to="/contact" class="connect-link">Let's Connect</router-link>
      </section>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'
import Router from 'vue-router'
import {TweenMax,  Power2, TimelineLite, CSSPlugin, ScrollToPlugin, Draggable, Elastic} from "gsap/all"
import { butter } from '@/butter.js';

export default {
    name: 'ProjectStudy',
    components: {
      AppHeader,
      AppFooter
    },
    data() {
        return {
          projects: [],
          project: {},
          technologies: []
        };
    },
    methods: {
      handleScroll (e) {
        let topDiv = $('.projects').outerHeight();
        if($(window).scrollTop() >= topDiv) {
          $(".ham").css("background-color", "#F3F4F1");
        } else {
          $(".ham").css("background-color", "#002244");
        }
      },
      getProjects() {
        butter.content.retrieve(['projects'])
          .then((resp) => {
            this.projects = resp.data.data.projects;
            this.projects.map((project) => {
              if(project.url === this.$route.params.name) {
                this.project = project;
                let techs = project.technologies.split(', ');
                this.technologies = techs;
                console.log(this.technologies);
                console.log(project);
              }
            });
            console.log(this.projects);
          }).catch((resp) => {
            console.log(resp)
          });
      },
      showProject() {
        let tl = new TimelineLite();
        tl.from(".projects-heading", 1, {opacity: 0, left: -100})
        .from(".project-content", 1, {opacity:0, left: "-100%"});
      },

    },
    mounted() {
      $(".ham").css("background-color", "#002244");
    },
    created() {
      this.getProjects();
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
@import "@/assets/stylesheets/projects.scss";
</style>
