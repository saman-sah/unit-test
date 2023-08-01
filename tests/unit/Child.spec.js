import { mount } from "@vue/test-utils";
import Child from "@/components/Child.vue"

describe("Child.vue", ()=> {
    it("", ()=> {
        const wrapper = mount(Child)
        expect(wrapper.text()).toContain("Child")
    })
})