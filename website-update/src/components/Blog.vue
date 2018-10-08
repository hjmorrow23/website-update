<template>
  <div class="blog-view slider">
    <div class="blog-wrapper">
      <AppHeader></AppHeader>
      <section class="blog">
        <div class="blog-header">
          <h1 class="blog-heading" >Just some thoughts</h1>
          <div class="blog-search">
            <input type="text" class="blog-search-input" v-on:keyup.enter="searchPosts" placeholder="Search Posts" />
            <font-awesome-icon @click="searchPosts" class="blog-searh-icon" icon="search" />
          </div>
        </div>
        <article class="blog-left">
          <ul class="blog-post-list">
            <li v-for="post in posts" :class="'blog-post-list-item ' + post.categories[0].slug">
              <router-link :to="'/blog/' + post.slug" class="blog-post-list-link"></router-link>
              <div class="blog-post-label">
                <span class="blog-post-icon"></span>
                <span class="blog-post-category">{{post.categories[0].name}}</span>
              </div>
              <h2 class="blog-post-title">{{post.title}}</h2>
              <p class="blog-post-description">{{post.summary}}</p>
            </li>
          </ul>
        </article>
        <aside class="blog-right">
          <div class="widget categories">
            <h1 class="widget-title tags-title" @click="toggleAside">Categories
              <span v-if="catShowing === false" class="blog-item categories-expand"><font-awesome-icon icon="plus" /></span>
              <span v-if="catShowing === true" class="blog-item categories-collapse"><font-awesome-icon icon="minus" /></span>
            </h1>
            <form class="widget-list categories-list">
              <fieldset v-for="category in categories" class="category-list-item">
                <input type="checkbox" @change="matchCategories" :value="category.slug" :name="category.slug" class="category-check"/>
                <label :for="category.slug" class="category-label">{{category.name}}</label>
              </fieldset>
            </form>
          </div>
          <div class="widget tags">
            <h1 class="widget-title tags-title" @click="toggleAside">Tags
              <span v-if="tagShowing === false" class="blog-item tags-expand"><font-awesome-icon icon="plus" /></span>
              <span v-if="tagShowing === true" class="blog-item tags-collapse"><font-awesome-icon icon="minus" /></span>
            </h1>
            <ul class="widget-list tags-list">
              <li v-for="tag in tags" class="tags-list-item" @click="matchTags" :data-tag="tag.slug">#{{tag.name}}</li>
            </ul>
          </div>
        </aside>
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
    name: 'Blog',
    components: {
      AppHeader,
      AppFooter
    },
    data() {
        return {
          posts: [],
          categories: [],
          tags: [],
          catShowing: false,
          tagShowing: false
        }
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
            console.log(posts);
            this.posts = posts;
          });
      },
      getCategories() {
        butter.category.list()
          .then((res) => {
            this.categories = res.data.data;
          })
      },
      getTags() {
        butter.tag.list()
          .then((res) => {
            this.tags = res.data.data;
          })
      },
      toggleAside(e) {
        let list = $(e.target).next(".widget-list");
        let icon = $(e.target).find(".blog-item");
        $(list).slideToggle();
        if($(icon).hasClass("categories-expand")) {
          $(icon).removeClass("categories-expand");
          $(icon).addClass("categories-collapse");
          this.catShowing = true;
        } else if ($(icon).hasClass("tags-expand")) {
          $(icon).removeClass("tags-expand");
          $(icon).addClass("tags-collapse");
          this.tagShowing = true;
        } else if($(icon).hasClass("categories-collapse")) {
          $(icon).removeClass("categories-collapse");
          $(icon).addClass("categories-expand");
          this.catShowing = false;
        } else if ($(icon).hasClass("tags-collapse")) {
          $(icon).removeClass("tags-collapse");
          $(icon).addClass("tags-expand");
          this.tagShowing = false;
        }

      },
      searchPosts() {
        let searchVal = $('.blog-search-input').val();
        console.log(searchVal);
        butter.post.search(searchVal)
          .then((resp) => {
            this.posts = resp.data.data;
          }).catch((resp) => {
            console.log(resp)
          });
      },
      clearSearch() {
        this.getPosts();
      },
      matchCategories() {
        butter.post.list({page: 1, page_size: 4})
          .then((res) => {
            let currentCategories = [];
            let checkedCategories = $(".category-check:checked");
            console.log(checkedCategories);
            checkedCategories.map((checkedCat) => {
              console.log(checkedCategories[checkedCat]);
              let checkedVal = checkedCategories[checkedCat].getAttribute('value');
              currentCategories.push(checkedVal);
            });
            // console.log(currentCategories);
            let posts = res.data.data;
            let newPosts = [];
            posts.map((post) => {
              post.categories.map((category) => {
                currentCategories.map((cat) => {
                  if(category.slug === cat) {
                    newPosts.push(post);
                  }
                });
              });
            });
            console.log(newPosts);
            this.posts = newPosts;
          });
      },
      matchTags(e) {
        butter.post.list({page: 1, page_size: 4})
          .then((res) => {
            let currentTag = $(e.target).data("tag");
            let posts = res.data.data;
            let newPosts = [];
            posts.map((post) => {
              post.tags.map((tag) => {
                if(tag.slug === currentTag) {
                  newPosts.push(post);
                }
              });
            });
            console.log(newPosts);
            this.posts = newPosts;
          });
      }
    },
    // watch() {
    //
    // },
    mounted() {
      $(".ham").css("background-color", "#002244");
    },
    created() {
      this.getCategories();
      this.getPosts();
      this.getTags();
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
