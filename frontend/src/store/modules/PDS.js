export const PDS ={
    namespaced :true,
    state: {
        cls: {},
        photo: {}
    },
    mutations: {
        setCls(state,cls){
                state.cls = cls
            }
    },
    actions: {
        setCls({commit}, cls) {
            commit('setCls', cls)
        },
        setPhoto({commit}, photo) {
            commit('setPhoto', photo)
        }
    },
    getters: {
        getCls(state) {
            return state.cls
        },
        getPhoto(state) {
            return state.photo
        }
    }
}