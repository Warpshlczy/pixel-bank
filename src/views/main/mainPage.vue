<template>
  <!-- 左侧导航 -->
  <v-main style="background-color: lightgrey">
    <v-navigation-drawer app v-model="drawer"
      ><v-row>
        <v-col cols="12"
          ><v-card height="64px" class="gradient d-flex align-center"
            ><div
              style="text-align: center; width: 100%"
              class="white--text font-weight-bold text-h5"
            >
              <v-icon large>mdi-</v-icon>
              二次元银行
            </div></v-card
          >
        </v-col>
      </v-row>
      <v-tabs v-model="navi" vertical color="#b2dfdb">
        <v-tab><v-icon left></v-icon>即时计算器</v-tab>
        <v-tab><v-icon left></v-icon>利息统算</v-tab>
        <v-tab><v-icon left></v-icon>个人中心</v-tab>
        <v-tab><v-icon left></v-icon>利率修正（仅管理）</v-tab>
      </v-tabs>
    </v-navigation-drawer>
    <!-- 左侧导航 -->

    <!-- 标题栏 -->
    <v-app-bar app color="#004d40"
      ><v-app-bar-nav-icon @click="drawer = !drawer"
        ><v-icon large color="green lighten-2"
          >mdi-menu</v-icon
        ></v-app-bar-nav-icon
      ></v-app-bar
    >
    <!-- 标题栏 -->

    <!-- 展示界面 -->
    <v-card height="100%" class="my-5 mx-5">
      <basic-calculator v-if="navi == 0"></basic-calculator>
      <interest-calculator v-if="navi == 1"></interest-calculator>
      <modify-rate v-if="navi == 3"></modify-rate
    ></v-card>

    <!-- 展示界面 -->
    <v-footer app color="#004d40" class="justify-center"
      ><v-pagination color="#004d40"></v-pagination
    ></v-footer>
  </v-main>
</template>

<script>
import interestCalculator from "@/components/InterestCalculator.vue";
import modifyRate from "@/components/ModifyRate.vue";
import basicCalculator from "@/components/BasicCalculator.vue";
export default {
  components: { interestCalculator, modifyRate, basicCalculator },
  mounted() {},
  updated() {},
  data() {
    return {
      //控制UI显示的变量
      navi: null, //导航条的切换index
      drawer: true, //左侧导航栏的显示状态
    };
  },

  created() {},
  methods: {},
  computed: {},
};
</script>

<style>
.gradient {
  background: linear-gradient(160deg, rgb(8, 193, 97), #004d40);
}
</style>
    InterestCalculator