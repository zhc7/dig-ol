import { getAccessorType } from 'typed-vuex'

import * as userModule from '~/store/user'

const accessorType = getAccessorType({
  modules: {
    user: userModule
  }
})

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
