import { createRouter, createWebHistory} from "vue-router";
import DashboardView from "../views/dashboard.vue"
import AboutView from "../views/about.vue"
import UserView  from "../views/user.vue"
import UserDetailView from "../views/userDetail.vue";
import UserProfileView from "../views/UserProfile.vue";
import UserPostView from "../views/UserPost.vue"
import UserIndexView from "../views/UserIndex.vue"

const routes = [
        {path: '', component: DashboardView},
        {path: '/about', component: AboutView},
        {path: '/user', component: UserView},
        // {path: '/user/:params', component: UserDetailView},
        // {path: '/user/:params/posts', component: UserPostView},
        // {path: '/user/:params/profile', component: UserProfileView}
        {
            path: '/user/:params',
            component: UserIndexView,
            children: [
                {
                    path: '',
                    component: UserDetailView
                },
                {
                    path: '/user/:params/posts',
                    component: UserPostView
                },
                {
                    path: '/user/:params/profile',
                    component: UserProfileView
                }
            ]
        }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router