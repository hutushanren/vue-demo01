<template>
  <div>
    <el-col>
      <el-row>这是首页2</el-row>
      <br>
      <el-row><el-button type="danger" round @click="logout">退出登录</el-button></el-row>
      <br>
      <el-row>
        <el-col :span="2">
          <el-button type="primary" round @click="hello">hello测试</el-button>
        </el-col>
        <el-col :span="2">
          <el-tag>{{msg}}</el-tag>
        </el-col>
      </el-row>

    </el-col>
  </div>


</template>

<script lang="ts">
import {defineComponent, getCurrentInstance} from 'vue';
import router from "@/router";
import axios from "@/utils/http";

export default defineComponent({
  name: 'HomeView',
  setup: function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { proxy } = getCurrentInstance()

    let msg = "hello"

    const logout = () => {
      sessionStorage.removeItem('Authorization')
      router.push('/login')
    }

    const hello = () => {
      proxy.$http({
        url: '/api/test/hello',
        method: 'get'
      }).then((res: any) => {
        console.log(res)
        msg = res.toString()
        msg = '123'
      }).catch((err: any) => {
        console.log(err)
        msg = 'error'
      })
    }

    return { msg, hello, logout }
  }
});
</script>
