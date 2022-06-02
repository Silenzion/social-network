import LayoutModel from "@/_core/models/LayoutModel";
import { createRouter, createWebHistory } from "vue-router";
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
        component: () => import("@/assets/MainPage.vue"),
      },
      {
        name: "404",
        path: "/404",
        meta: {
          layout: LayoutModel.EMPTY,
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
