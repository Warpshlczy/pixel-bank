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
          ><v-text-field label="请输入金额" filled></v-text-field
        ></v-col>
        <v-col class="d-flex" cols="12" v-if="state != null">
          <v-select
            :items="years1"
            filled
            label="选择存款时间"
            v-if="state == '存款'"
          ></v-select>
          <v-select
            :items="years2"
            filled
            label="选择贷款时间"
            v-if="state == '贷款'"
          ></v-select>
        </v-col>
      </v-row>
      <div
        style="color: red; font-size: 16px; font-weight: bolder"
        class="my-6"
      >
        利息计算结果： <span style="color: green">{{ money }}￥</span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: ["存款", "贷款"],
      state: null,
      years1: ["活期存款", "三个月", "半年", "一年", "二年", "三年", "五年"],
      years2: ["六个月", "一年", "一至三年", "三至五年", "五年"],
      money: 0,
    };
  },
};
</script>

<style>
</style>