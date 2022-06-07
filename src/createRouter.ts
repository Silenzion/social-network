import { createRouter, createWebHistory } from "vue-router";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
// TODO: add authService and simple auth with LocalStorage

const createProjectRouter = () => {
  return createRouter({
    history: createWebHistory(),

    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0, left: 0, behavior: "smooth" };
      }
    },

    routes: [
      {
        name: "main",
        path: "/",
        component: () => import("@/modules/Main/pages/MainPage.vue"),
      },
      {
        name: "user-page",
        path: "/user/:id",
        props: true,
        component: () => import("@/modules/User/pages/UserPage.vue"),
      },
      {
        name: "404",
        path: "/404",
        meta: {
          layout: EmptyLayout,
        },
        component: () => import("@/components/NotFound.vue"),
      },
      {
        path: "/:catchAll(.*)",
        redirect: (to) => {
          return { name: "404" };
        },
      },
    ],
  });
};
export default createProjectRouter;
