<template>
  <div style="background-color: #b2dfdb; height: 100%">
    <v-app-bar max-height="20vh" color="teal darken-3">
      <v-btn icon to="/"><v-icon large>mdi-arrow-left-circle</v-icon> </v-btn>
      <v-app-bar-title> 注册 </v-app-bar-title>
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
                :rules="nameRules"
                label="你的名字"
                required
              ></v-text-field>

              <v-text-field
                prepend-icon="mdi-mail"
                v-model="email"
                :rules="emailRules"
                label="邮箱"
                required
              ></v-text-field>

              <v-text-field
                prepend-icon="mdi-lock"
                v-model="password"
                :rules="passwordRules"
                label="密码"
                ref="password"
                required
              ></v-text-field>
              <div class="d-flex justify-center my-5">
                <v-btn color="error" @click="reset"> 重置表单 </v-btn>
              </div>
              <div class="d-flex justify-center mt-6">
                <v-btn color="green lighten-2 white--text" @click="regist">
                  注册
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
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (/^[0-9]{0,}[a-zA-Z]{1,}[0-9]{0,}\w{0,}$/.test(v) &&
          /^\w{6,16}$/.test(v)) ||
        "password must be valid",
    ],
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    regist() {
      if (this.$refs.form.validate()) {
        this.$axios
          .post("/AddAdmin", {
            admin_name: this.name,
            admin_username: this.email,
            admin_password: this.password,
            admin_QQ: this.email,
          })
          .then(
            (res) => {
              alert("Regist successfully!!");
              this.$router.push("/login");
              return res;
            },
            (error) => {
              alert("Failed");
              return error;
            }
          );
      } else {
        alert("Please follow the rules!");
      }
    },
  },
};
</script>

<style>
</style>