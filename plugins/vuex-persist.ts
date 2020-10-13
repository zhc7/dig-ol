import { Plugin } from '@nuxt/types'

import VuexPersistence from 'vuex-persist'

const vuexPersistPlugin: Plugin = ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    modules: ['user']
  }).plugin(store)
}

export default vuexPersistPlugin
