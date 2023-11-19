<template>
  <div>
    <v-card-actions
      ><v-card-title
        style="text-align: center; color: rgb(7, 181, 123); font-size: 28px"
        >利息统算</v-card-title
      >
    </v-card-actions>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex" cols="12">
          <v-select
            :items="items"
            filled
            label="请选择存/贷款"
            v-model="state"
          ></v-select>
        </v-col>
        <v-col cols="12"
          ><v-text-field
            label="请输入金额"
            filled
            v-model="money"
          ></v-text-field
        ></v-col>
        <v-col class="d-flex" cols="12" v-if="state != null">
          <v-select
            :items="years1"
            filled
            label="选择存款时间"
            v-model="year"
            v-if="state == '存款'"
          ></v-select>
          <v-select
            :items="years2"
            filled
            v-model="year"
            label="选择贷款时间"
            v-if="state == '贷款'"
          ></v-select>
          <v-text-field
            label="输入存款时间"
            filled
            v-model="year"
            v-if="state == '活期存款'"
          ></v-text-field>
        </v-col>
      </v-row>
      <div
        style="color: red; font-size: 16px; font-weight: bolder"
        class="my-6"
      >
        利息计算结果： <span style="color: green">{{ result }}￥</span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: ["活期存款", "存款", "贷款"],
      state: "",
      stateNum: 0,
      years1: ["三个月", "半年", "一年", "二年", "三年", "五年"],
      years2: ["六个月", "一年", "一至三年", "三至五年", "五年"],
      money: "",
      result: 0,
      year: "",
    };
  },
  watch: {
    state(newVal) {
      this.stateNum = this.items.indexOf(newVal);
    },
  },
  updated() {
    if (this.year != "" && this.money != "" && this.state != "") {
      this.$api
        .calcIntest({
          year: this.year,
          type: this.stateNum,
          money: parseInt(this.money),
        })
        .then(
          (res) => {
            this.result = res.data.data;
          },
          (error) => {
            alert("未知错误");
            return error;
          }
        );
    }
  },
};
</script>

<style>
</style>