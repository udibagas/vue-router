import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/MainLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../pages/Home.vue"),
        },
        {
          path: "products",
          name: "products",
          component: () => import("../pages/Products.vue"),
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("../pages/Contact.vue"),
          children: [
            {
              path: "social-media",
              component: () => import("../pages/contact/SocialMedia.vue"),
            },
            {
              path: "address",
              component: () => import("../pages/contact/Address.vue"),
            },
          ],
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("../pages/Profile.vue"),
        },
        {
          path: "products/:id", // /products/2
          name: "productDetail",
          component: () => import("../pages/ProductDetail.vue"),
          props: true,
        },
        {
          path: "admin",
          name: "admin",
          component: () => import("../pages/Admin.vue"),
          // beforeEnter: () => {
          //   console.log("Sebelum masuk ke routing admin");
          //   const token = localStorage.getItem("token");

          //   if (!token) {
          //     return "/login";
          //   }
          // },
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("../layouts/AuthLayout.vue"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("../pages/Login.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("../pages/Register.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.fullPath !== "/admin") {
    return next();
  }

  const token = localStorage.getItem("token");

  if (!token) {
    return next("/login");
  }

  next();

  // if (to.fullPath == "/admin") {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     return next("/login");
  //   }
  //   next();
  // } else {
  //   next();
  // }
});

export default router;
