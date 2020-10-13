<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ version }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import meta from '~/package.json'

@Component
export default class BottomInfo extends Vue {
  get name() {
    return meta.name
  }

  get version() {
    return meta.version
  }
}
</script>

<style lang="scss" scoped>
  div {
    position: absolute;
    left: 3vh;
    bottom: 3vh;
    opacity: 0.7;

    p {
      margin: 0.25rem 0;
      font-size: 0.8rem;
    }
  }
</style>
