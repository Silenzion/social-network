import ServiceManager from "@/_core/ServiceManager";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import AuthService from "@/modules/User/AuthService";
import { createRouter, createWebHistory, RouteLocationNormalized } from "vue-router";

const authGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  if (to.meta?.requiresAuth && !ServiceManager.getInstance().getService(AuthService).isAuthenticated) {
    return {
      name: "login",
    };
  }
};

const createProjectRouter = () => {
  const router = createRouter({
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
        meta: {
          requiresAuth: false,
        },
        component: () => import("@/modules/Main/pages/MainPage.vue"),
      },
      {
        name: "login",
        path: "/login",
        meta: {
          layout: EmptyLayout,
          requiresAuth: false,
        },
        component: () => import("@/modules/User/pages/LoginForm.vue"),
      },
      {
        name: "user-page",
        path: "/user/:id",
        props: true,
        component: () => import("@/modules/User/pages/UserPage.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        name: "404",
        path: "/404",
        meta: {
          layout: EmptyLayout,
          requiresAuth: false,
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
  router.beforeEach((from, to) => authGuard(from, to));
  return router;
};
export default createProjectRouter;
