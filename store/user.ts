import { mutationTree } from 'nuxt-typed-vuex'

export const state = () => ({
  name: ''
})

export const mutations = mutationTree(state, {
  setName(state, name: string | null) {
    state.name = name || ''
  }
})
