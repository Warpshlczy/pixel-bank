<template>
  <div>
    <v-card-actions
      ><v-card-title
        style="text-align: center; color: rgb(7, 181, 123); font-size: 28px"
        >利率修改</v-card-title
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

        <v-col class="d-flex" cols="12" v-if="state != null">
          <v-select
            :items="years1"
            filled
            v-model="year"
            label="选择存款时间"
            v-if="state == '存款'"
          ></v-select>
          <v-select
            :items="years2"
            filled
            v-model="year"
            label="选择贷款时间"
            v-if="state == '贷款'"
          ></v-select>
        </v-col>
        <v-col cols="12"
          ><v-text-field
            label="请输入要修改的倍率"
            filled
            v-model="rate"
          ></v-text-field
        ></v-col>
        <div class="d-flex my-6" style="width: 100%; justify-content: center">
          <v-btn color="green" @click="sendModification()">确认修改</v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
  
  <script>
export default {
  data: () => {
    return {
      items: ["活期存款", "存款", "贷款"],
      rate: "",
      state: "",
      stateNum: 0,
      years1: ["三个月", "半年", "一年", "二年", "三年", "五年"],
      years2: ["六个月", "一年", "一至三年", "三至五年", "五年"],
      year: "",
    };
  },
  watch: {
    state(newVal) {
      this.stateNum = this.items.indexOf(newVal);
    },
  },
  methods: {
    sendModification() {
      this.$api
        .modifyRate({
          rate: this.rate,
          year: this.year,
          type: this.stateNum,
        })
        .then(
          (res) => {
            switch (res.data.code) {
              case 0: {
                alert("修改成功！");
                break;
              }
              case 40000: {
                alert(res.data.message + ":" + res.data.description);
                break;
              }
            }
          },
          (error) => {
            alert("修改失败！未知原因");
            return error;
          }
        );
    },
  },
};
</script>
  
  <style>
</style>