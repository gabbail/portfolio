import about from "@/pages/about.vue";
import contact from "@/pages/contact.vue";
import home from "@/pages/home.vue";
import projects from "@/pages/projects.vue";
import work from "@/pages/work.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/projects",
    name: "projects",
    component: projects,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/work",
    name: "work",
    component: work,
  },
];
