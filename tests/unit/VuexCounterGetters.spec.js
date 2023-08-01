import store from "@/store/index";

describe('Vuex',()=> {
    it('getters return counter', ()=> {
        store.commit('increment')
        expect(store.getters.getCounter).toBe(1)
    })
})