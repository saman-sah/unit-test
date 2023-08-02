import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import App from "@/App.vue"
import AboutView from "@/views/AboutView.vue"

describe("AboutView.vue", ()=> {
    it("Render component via routing", async ()=> {
        const router= createRouter({
            history: createWebHistory(),
            routes: [{
                path: "/about",
                name: "About",
                component: AboutView
            }]
        })
        router.push("/about")
        await router.isReady()
        const wrapper= mount(App, {
            global: {
                plugins: [
                    router
                ]
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })
})