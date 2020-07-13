import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Layout",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/",
        redirect: "/home",
        class_true: false,
        hidden: true,
        meta: {
          title: "主页",
          icon: "navmenu"
        }
      },
      {
        path: "/home",
        name: "Home",
        class_true: false,
        component: () => import("@/views/Home"),
        hidden: false,
        meta: {
          title: "主页",
          icon: "navmenu"
        }
      },
      {
        path: "/insect",
        name: "Insect",
        class_true: false,
        component: () => import("@/views/Insect"),
        hidden: false,
        meta: {
          title: "虫情分析",
          icon: "navmenu"
        }
      },
      {
        path: "/insect1",
        name: "Benefit",
        class_true: false,
        component: () => import("@/views/Benefit"),
        hidden: false,
        meta: {
          title: "效益分析",
          icon: "navmenu"
        },
        children: [
          {
            path: "/insect1",
            name: "Insect1",
            class_true: false,
            component: () => import("@/views/Benefit/components/Benefit1"),
            hidden: false,
            meta: {
              title: "效益分析1",
              icon: "navmenu"
            }
          },
          {
            path: "/insect2",
            name: "Insect2",
            class_true: false,
            component: () => import("@/views/Benefit/components/Benefit2"),
            hidden: false,
            meta: {
              title: "效益分析2",
              icon: "navmenu"
            }
          }
        ]
      },
      {
        path: "/soil",
        name: "Soil",
        class_true: false,
        component: () => import("@/views/Soil"),
        hidden: false,
        meta: {
          title: "土壤分析",
          icon: "navmenu"
        }
      },
      {
        path: "/plantSearch",
        name: "PlantSearch",
        class_true: false,
        component: () => import("@/views/PlantSearch"),
        hidden: false,
        meta: {
          title: "植物全息搜索",
          icon: "navmenu"
        }
      },
      {
        path: "/404",
        name: "page404",
        hidden: true,
        class_true: false,
        component: () => import("@/views/page404/index.vue")
      }
    ]
  },

  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
