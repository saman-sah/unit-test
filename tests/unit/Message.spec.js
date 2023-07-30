import { mount } from "@vue/test-utils"
import Message from "@/components/Message.vue"

describe("Message.vue", () => {
    it("render props.msg when passed", ()=> {
        const wrapper= mount(Message, {
            props: {
                message: "Hello Friends"
            }
        })
        expect(wrapper.text()).toContain("Hello Friends")
    })
})