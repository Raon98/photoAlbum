export const PDS = {
    namespaced: true,
    state: {
        calList : [],
        detList : [],
        det : {},
        viewFlag: false,
        albumFlag : false,
    },
    mutations: {
        setCalList(state, calList) {
            state.calList = calList
        },
        setDet(state, det) {
            state.del = det
        },
        setDetList(state, detList) {
            state.delList = detList
        },
        setViewFlag(state, viewFlag){
            state.viewFlag = viewFlag
        },
        setAlbumFlag(state, albumFlag){
            state.albumFlag = albumFlag
        }

    },
    actions: {
        setCalList({commit}, calList) {
            commit('setCalList', calList)
        },
        setDet({commit}, det) {
            commit('setDet', det)
        },
        setDetList({commit}, detList) {
            commit('setDetList', detList)
        },
        setViewFlag({commit}, viewFlag) {
            commit('setViewFlag', viewFlag)
        },
        setAlbumFlag({commit}, albumFlag) {
            commit('setAlbumFlag', albumFlag)
        },
    },
    getters: {
        getCalList(state) {
            return state.calList
        },
        getDet(state) {
            return state.det
        },
        getDetList(state) {
            return state.detList
        },
        getViewFlag(state) {
            return state.viewFlag
        },
        getAlbumFlag(state) {
            return state.albumFlag
        }
    }
}