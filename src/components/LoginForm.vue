<template>
  <el-form
    :model="loginUser"
    :rules="rules"
    ref="loginForm"
    label-width="100px"
    class="login-form sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="loginUser.username" placeholder="Enter Username..." />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
          v-model="loginUser.password"
          type="password"
          placeholder="Enter Password..."
      />
    </el-form-item>
    <el-form-item>
      <el-button
          @click="handleLogin('loginForm')"
          type="primary"
          class="submit-btn"
      >提交</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <el-form-item>
      <p class="tiparea">忘记密码<a>立即找回</a></p>
    </el-form-item>
  </el-form>

</template>

<script lang="ts">
import { getCurrentInstance }from 'vue'
import router from "@/router";
export default {
  name: "LoginForm",
  props: {
    loginUser: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  setup: function (props: any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {ctx, proxy} = getCurrentInstance()
    // 触发登录方法
    const handleLogin = (formName: string) => {
      console.log(ctx)
      ctx.$refs[formName].validate(async (valid: boolean) => {
        if (valid) {
          proxy.$http({
            url: '/api/test/hello',
            method: 'get',
            // eslint-disable-next-line no-undef
            // data: ''
          }).then((res: any) => {
            console.log("=================")
            console.log(res)
          }).catch((err: any) => {
            console.log(err)
          })
          router.push("/")
          console.log('submit!')
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
    return {handleLogin}
  }
}
</script>

<style scoped>
/* register */
.login-form,
.register-form {
  background-color: #fff;
  padding: 50px 80px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
  width: 100%;
}
.tiparea a {
  color: #409eff;
}
</style>

