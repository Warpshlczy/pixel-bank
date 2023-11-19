<template>
  <v-main class="base">
    <v-container>
      <v-row>
        <v-col cols="4"> </v-col>
        <v-col cols="4" class="d-flex" style="height: 40vh">
          <v-img src="@/assets/logo.png" contain> </v-img>
        </v-col>
        <v-col cols="4"> </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div
        style="font-size: 48px; text-align: center; color: #004d40"
        height="48px"
        class="mt-6 arrow"
      >
        二&nbsp;&nbsp;次&nbsp;&nbsp;元&nbsp;&nbsp;银&nbsp;&nbsp;行
      </div>
      <div
        style="font-size: 36px; text-align: center; color: #004d40"
        height="48px"
        class="mt-2 arrow"
      >
        Pixel Bank
      </div>
    </v-container>

    <v-container>
      <v-row style="height: 40vh" align="center">
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-btn
            width="100%"
            height="8vh"
            to="/register"
            color="#004d40 "
            style="color: white"
            >注册</v-btn
          ></v-col
        >
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-btn
            width="100%"
            height="8vh"
            to="/login"
            color="#004d40"
            style="color: white"
            >登录</v-btn
          ></v-col
        >
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => {
    return {};
  },
};
</script>

<style scoped>
.base {
  background-color: #b2dfdb;
  background-image: url(https://gd-hbimg.huaban.com/f35c5c17ced3948e0bd3458f46a7dda058de3f4247eb7-R5aXVo_fw1200),
    url(https://gd-hbimg.huaban.com/6ecd54283460028c350b8bf3f3ff69faf58019b5573c6-sZRPxt_fw658webp);
  background-position-x: 5%, 100%;
  background-position-y: 30%, 35%;
  background-size: 25vw, 33vw;
}
.arrow {
  animation-name: beat;
  /*动画名称*/
  animation-duration: 0.8s;
  /*设置秒数*/
  animation-timing-function: linear;
  /*速度曲线*/
  animation-iteration-count: infinite;
  /*播放次数*/
  animation-direction: alternate;
  /*逆向播放*/
  animation-play-state: running;
  /*正在运行*/
}
@keyframes beat {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>