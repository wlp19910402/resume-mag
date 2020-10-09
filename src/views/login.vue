<template>
  <b-card
    class="text-center qm-border-null qm-radius-null qm-login-box bg-gradient-dark"
    :img-src="loginBg"
    overlay
    img-alt="Image"
    border-variant="light"
  >
    <div class="row justify-content-md-center justify-content-sm-center">
      <!-- <div class="col-sm-4 col-md-4"></div> -->
      <div class="col-xs-12 col-sm-8 col-md-8">
        <div class="qm-login-form m-auto p-3">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="用户名" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="请输入用户名"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="密码" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="请输入密码"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">勾选</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="primary">登录</b-button>
            <b-button type="reset" variant="danger">注册</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import loginBg from "@/assets/images/login-bg.jpg";
export default {
  data() {
    return {
      loginBg,
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style lang="less">
.qm-login-box {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  .card-img {
    position: absolute;
    top: 50%;
    left: 50%;
    min-height: 110%;
    min-width: 100%;
    transform: translate(-50%, -50%);
    border-radius: 0;
    filter: blur(20px);
    background: #000000;
    opacity: 0.5;
  }
  .qm-login-form {
    backdrop-filter: 0;
    background-color: rgba(255, 255, 255, 0.1);
    max-width: 30rem;
  }
}
</style>
