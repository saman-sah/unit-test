import { mount } from "@vue/test-utils"
import Counter from "@/components/Counter.vue"

describe("Counter.vue", ()=> {
    it("testing emit counter", async()=> {
        const wrapper= mount(Counter)
        await wrapper.find('button').trigger('click')
        await wrapper.find('button').trigger('click')
        // console.log(wrapper.emitted());

        // First click
        expect(wrapper.emitted().count[0][0]).toBe(1)
        expect(wrapper.emitted().count[0][1]).toBe("Hello")
        // Second click
        expect(wrapper.emitted().count[1][0]).toBe(2)
        expect(wrapper.emitted().count[1][1]).toBe("Hello")
    })
})