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
                prepend-icon="mdi-mail"
                v-model="email"
                label="你小子的邮箱"
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
    email: "",
    password: "",
  }),

  methods: {
    login() {
      this.$axios({
        url: "/Admin/LoginSuccess",
        params: {
          admin_username: this.email,
          admin_password: this.password,
        },
      }).then(
        (res) => {
          if (res.data == "1") {
            alert("Login successfully");
            this.$router.push({ path: "/boxlist", query: { id: this.email } });
          } else {
            alert("Login failure, account or password error!");
          }
          return res;
        },
        (error) => {
          alert("Failed");
          return error;
        }
      );
    },
  },
};
</script>

<style>
</style>