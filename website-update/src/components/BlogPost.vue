<template>
  <div class="blog-view slider">
    <div class="blog-wrapper">
      <AppHeader></AppHeader>
      <section class="blog">
        <div class="blog-header">
          <h1 class="blog-heading">{{post.title}}</h1>
        </div>
        <article class="blog-content" v-html="post.body">
        </article>
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
import { butter } from '@/butter.js';

export default {
    name: 'BlogPost',
    components: {
      AppHeader,
      AppFooter
    },
    data() {
        return {
          posts: [],
          post: {}
        };
    },
    methods: {
      handleScroll (e) {
        if($(window).scrollTop() >= 542) {
          $(".ham").css("background-color", "#F3F4F1");
        } else {
          $(".ham").css("background-color", "#002244");
        }
      },
      getPosts() {
        butter.post.list({page: 1, page_size: 4})
          .then((res) => {
            let posts = res.data.data;
            this.posts = posts;
            posts.map((post) => {
              if(post.slug === this.$route.params.name) {
                this.post = post;
                console.log(post);
              }
            });
          });
      },
    },
    mounted() {
      $(".ham").css("background-color", "#002244");
    },
    created() {
      this.getPosts();
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
@import "@/assets/stylesheets/blog.scss";
</style>
