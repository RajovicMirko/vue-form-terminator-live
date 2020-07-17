import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@v/Home.vue";
import NoStyle from "@v/NoStyle.vue";
import Bootstrap from "@v/Bootstrap.vue";
import SemanticUI from "@v/SemanticUI.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nostyle",
    name: "NoStyle",
    component: NoStyle,
  },
  {
    path: "/bootstrap",
    name: "Bootstrap",
    component: Bootstrap,
  },
  {
    path: "/semanticui",
    name: "SemanticUI",
    component: SemanticUI,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
