<template>
  <div>这是首页</div>
  <el-button type="danger" round @click="logout">退出登录</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from "@/router";

export default defineComponent({
  name: 'HomeView',
  setup: function () {
    const logout = () => {
      sessionStorage.removeItem('Authorization')
      router.push('/login')
    }

    return { logout }
  }
});
</script>
