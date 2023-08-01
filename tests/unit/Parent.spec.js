import { shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue"

describe("Parent.vue", ()=> {
    it("", ()=> {
        const wrapper = shallowMount(Parent)
        console.log(wrapper);
        expect(wrapper.text()).toContain("Parent")
    })
})