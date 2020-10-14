import { Plugin } from '@nuxt/types'

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

const vuexPersistPlugin: Plugin = ({ store, req }) => {
  createPersistedState({
    paths: ['user'],
    storage: {
      getItem: (key) => {
        if (process.server) {
          const parsedCookies = cookie.parse(req.headers.cookie || '')
          return parsedCookies[key]
        } else {
          return Cookies.get(key)
        }
      },
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: false }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}

export default vuexPersistPlugin
