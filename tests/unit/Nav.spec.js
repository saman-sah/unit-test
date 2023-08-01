import { mount } from "@vue/test-utils"
import Nav from "@/components/Nav.vue"

describe("Nav.vue", () => {
    it("profile link should exist", ()=> {
        const wrapper= mount(Nav, {
            data() {
                return {
                    isLoggedIn: true
                }
            },
        })
        const profileLink= wrapper.get("#profile");
        expect(profileLink.text()).toEqual("My Profile")
    })
    it("profile link should not exist", ()=> {
        const wrapper= mount(Nav, {
            data() {
                return {
                    isLoggedIn: false
                }
            },
        })
        const profileLink= wrapper.find("#profiel")

        expect(profileLink.exists()).toBe(false)
    })
})