import { createRouter, createWebHistory } from "vue-router";
import MainView from "./views/MainView.vue";
import HomeView from "./views/HomeView.vue";

const routes = [
    {
        path: "/",
        component: MainView,
        children: [
            { path: "", component: HomeView },
            {
                path: "messages",
                component: () => import("./views/MessagesView.vue"),
            },
            {
                path: "submit",
                component: () => import("./views/SubmitView.vue"),
            },
            {
                path: "memories",
                component: () => import("./views/MemoriesView.vue"),
            },
            {
                path: "dev",
                component: () => import("./views/PageUnderDev.vue"),
            },
            {
                path: ":pathMatch(.*)*",
                name: "NotFound",
                component: () => import("./views/404.vue"),
            }
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
