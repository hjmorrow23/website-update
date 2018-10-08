<template>
  <div id="app">
    <div class="app__wrapper">
      <transition name="slide">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      transitionName: 'slide'
    }
  },
  // watch: {
  // '$route' (to, from) {
  //   const toDepth = to.path
  //   const fromDepth = from.path
  //   console.log(to.path)
  //   console.log(from.path)
  //   if(toDepth === "/about" && fromDepth === "/projects") {
  //     this.transitionName = 'white-slide'
  //   }
  //   this.transitionName = toDepth < fromDepth ? 'slide' : 'slide'
  //   console.log(this.transitionName)
  // }
  //}
}
</script>

<style lang="scss">
@import "@/assets/stylesheets/variables.scss";
@import "@/assets/stylesheets/palette.scss";
@import "@/assets/stylesheets/mixins.scss";
@import "@/assets/stylesheets/animations.scss";
@import "@/assets/stylesheets/reset.scss";
@import "@/assets/stylesheets/fonts.scss";

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100vh;
}

.app__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.slider {
  position: absolute;
  top: 0;
  right: 0;
}

.slide-enter-active {
  animation: slow-slide-in 1s;

  .nav-show {
    display: none;
  }
}

.slide-leave-active {
  animation: slow-slide-out 1.5s;
  animation-delay: 1s;

  .home-header-left,
  .home-header-right,
  .greetings,
  .skills,
  .projects,
  .connect,
  .projects-banner,
  .blog,
  .contact {
    animation: fade-out .5s;
  }
}

</style>
