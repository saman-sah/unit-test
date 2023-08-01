import { createStore } from "vuex";

describe('Vuex', ()=> {
    it('mutation increments count',()=>{
        const store= createStore({
            state: {
                counter: 0
            },
            mutations: {
                increment(state) {
                    state.counter +=1
                }
            }
        })

        store.commit('increment')
        expect(store.state.counter).toBe(1)
    })
})