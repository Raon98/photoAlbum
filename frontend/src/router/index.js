// Vuex 때 처럼 create* 함수를 제공한다.
import {createRouter, createWebHistory} from 'vue-router';
import {cheol} from "@/plugins/cheol";

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

const routes = [
    {
        path: '/',
        name: 'intro',
        component: loadView('intro'),
    },
    {
        path: '/AppRoot',
        name: 'AppRoot',
        component: loadView('AppRoot'),
    },

];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
//
// export default router;

routes.push(routes)

export const router = createRouter({
    history: createWebHistory(),
    routes,
});