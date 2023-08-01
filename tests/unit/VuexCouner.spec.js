import store from "@/store/index"

describe('Vuex', ()=> {
    beforeEach(()=> [
        store.state.counter=0
    ])
    it('mutation increments counter', ()=> {
        store.commit('increment')
        expect(store.state.counter).toBe(1)        
    })
    it('mutation decrements counter', ()=> {
        store.commit('decrement')
        expect(store.state.counter).toBe(-1)
    })
})