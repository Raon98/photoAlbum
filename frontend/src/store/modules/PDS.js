export const PDS = {
    namespaced: true,
    state: {
        cls: {},
        photo: {},
        viewFlag: false,
    },
    mutations: {
        setCls(state, cls) {
            state.cls = cls
        },
        setPhoto(state, photo) {
            state.photo = photo
        },
        setViewFlag(state, viewFlag){
            state.viewFlag = viewFlag
        }
    },
    actions: {
        setCls({commit}, cls) {
            commit('setCls', cls)
        },
        setPhoto({commit}, photo) {
            commit('setPhoto', photo)
        },
        setViewFlag({commit}, viewFlag) {
            commit('setViewFlag', viewFlag)
        }
    },
    getters: {
        getCls(state) {
            return state.cls
        },
        getPhoto(state) {
            return state.photo
        },
        getViewFlag(state) {
            return state.viewFlag
        }
    }
}