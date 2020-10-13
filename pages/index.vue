<template>
  <div class="container">
    <h1 class="display-2 text-center title-dig" style="text-indent: 5%;">
      掘！
    </h1>
    <div v-if="userName" id="login">
      <h2 class="text-center mb-5">
        <small>欢迎，</small> {{ userName }}
      </h2>
      <b-button block size="lg" variant="primary">
        加入房间
      </b-button>
      <b-button block variant="success">
        创建房间
      </b-button>
    </div>
    <div v-else id="login">
      <h2 class="font-weight-light text-center">
        登录
      </h2>
      <b-form-group>
        <b-input-group prepend="昵称" class="mt-3">
          <b-form-input
            id="input-user-name"
            v-model="inputUserName"
            placeholder="请输入一个昵称..."
            @keyup.enter="loginSubmit"
          />
          <b-input-group-append>
            <b-button variant="primary" @click="loginSubmit">
              登录
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <b-form-text>内测阶段，只需要输入昵称，后续会加入账号系统。</b-form-text>
      </b-form-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class IndexPage extends Vue {
  inputUserName: string = ''

  get userName() {
    return this.$accessor.user.name
  }

  loginSubmit() {
    this.$accessor.user.setName(this.inputUserName)
  }
}
</script>

<style scoped>
  .container {
    margin-top: 15vh;
  }

  #login {
    max-width: 25rem;
    margin: 15vh auto;
  }
</style>
