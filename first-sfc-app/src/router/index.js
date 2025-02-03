import { createRouter, createWebHistory} from "vue-router";
import DashboardView from "../views/dashboard.vue"
import AboutView from "../views/about.vue"
import UserView  from "../views/user.vue"
import UserDetailView from "@/views/userDetail.vue";

const routes = [
        {path: '', component: DashboardView},
        {path: '/about', component: AboutView},
        {path: '/user', component: UserView},
        {path: '/user/:params', component: UserDetailView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router