import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from "../views/Projects.vue";
import Education from "../views/School.vue";
import Work from "../views/WorkVolunteer.vue";
import Test from "../views/Test.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/education",
      name: "education",
      component: Education,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/employment",
      name: "employment",
      component: Work,
    },
  ],
});

export default router;
