<template>
  <div style="background-color: #b2dfdb; height: 100%">
    <v-app-bar max-height="20vh" color="teal darken-3">
      <v-btn icon to="/"><v-icon large>mdi-arrow-left-circle</v-icon> </v-btn>
      <v-app-bar-title> 登录 </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="10">
          <v-card class="pa-10 my-8">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row class="my-3">
                <v-spacer></v-spacer>
                <v-col cols="2">
                  <v-img src="@/assets/logo.png"></v-img>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-text-field
                prepend-icon="mdi-account-circle-outline"
                v-model="name"
                :counter="10"
                label="用户名"
                required
              ></v-text-field>

              <v-text-field
                prepend-icon="mdi-lock"
                v-model="password"
                label="密码"
                ref="password"
                type="password"
                required
              ></v-text-field>

              <div class="d-flex justify-center mt-6">
                <v-btn color="green lighten-2 white--text" @click="login()">
                  登录
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    isLoginSuccess: true,
    name: "",
    password: "",
  }),

  methods: {
    login() {
      this.$api
        .login({ userAccount: this.name, userPassword: this.password })
        .then((res) => {
          switch (res.data.code) {
            case 0: {
              alert("登录成功！");
              localStorage.setItem("token", res.data.data.userPassword);
              this.$router.push("/main");
              break;
            }
            case 40000: {
              alert(res.data.message + ":" + res.data.description);
              break;
            }
          }
        });
    },
  },
};
</script>

<style>
</style>