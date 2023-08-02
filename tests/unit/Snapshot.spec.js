import { mount } from "@vue/test-utils";
import Snapshot from "@/components/Snapshot.vue"


describe("Snapshot.vue", ()=> {
    it("render corectly", ()=> {
        const wrapper= mount(Snapshot, {
            props: {
                msg: "Different Message"
            }
        })
        expect(wrapper.element).toMatchSnapshot()
    })
})