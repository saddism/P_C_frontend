import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: null,
    isAuthenticated: false,
    videoAnalysis: {
      currentVideo: null,
      analysisStatus: null,
      prdDocument: null,
      businessPlan: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.isAuthenticated = !!user
    },
    setVideoAnalysis(state, { video, status, prd, businessPlan }) {
      state.videoAnalysis = {
        currentVideo: video || state.videoAnalysis.currentVideo,
        analysisStatus: status || state.videoAnalysis.analysisStatus,
        prdDocument: prd || state.videoAnalysis.prdDocument,
        businessPlan: businessPlan || state.videoAnalysis.businessPlan
      }
    }
  },
  actions: {
    updateUser({ commit }, user) {
      commit('setUser', user)
    },
    updateVideoAnalysis({ commit }, payload) {
      commit('setVideoAnalysis', payload)
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.user,
    videoAnalysisStatus: state => state.videoAnalysis
  }
})

export default store
