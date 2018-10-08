import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ProjectStudy from '@/components/ProjectStudy';
import Blog from '@/components/Blog';
import BlogPost from '@/components/BlogPost';
import Contact from '@/components/Contact';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/projects/:name',
      component: ProjectStudy
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:name',
      component: BlogPost
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
