<template>
  <b-card
    class="qm-border-null qm-radius-null qm-login-page p-0"
    :img-src="loginBg"
    overlay
    img-alt="Image"
    border-variant="light"
  >
    <div
      class="qm-login-box d-flex align-items-center justify-content-center row mx-0"
    >
      <div class="col-xs-12 col-sm-8 col-md-8 pb-5">
        <b-img
          class="qm-login-logo"
          center
          :src="logo"
          rounded="circle"
          alt="Center image"
        ></b-img>
        <div class="qm-login-form mx-auto px-3 pt-3 mt-3 mb-4 pb-5">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <h5 class="text-center text-monospace text-muted">登 录</h5>
            <b-input-group prepend="用户名" class="mt-3 mb-4">
              <b-form-input
                v-model="form.name"
                placeholder="请输入用户名"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="密码" class="mt-3 mb-4">
              <b-form-input
                v-model="form.name"
                placeholder="请输入密码"
              ></b-form-input>
            </b-input-group>
            <b-button block type="submit" variant="primary">登录</b-button>
            <!-- <b-button type="reset" variant="danger">注册</b-button>
            <b-button block variant="primary">Block Level Button</b-button> -->
          </b-form>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
// import loginBg from "@/assets/images/login-bg.jpg";
import logo from "@/assets/images/logo-op.png";
// import logo from "@/assets/images/logo-op-white.png";
import loginBg from "@/assets/images/login-bg-1.jpg";

export default {
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#fff",
        width: 175,
        height: 175,
        class: "m1",
      },
      loginBg,
      logo,
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
.qm-login-page {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  background: #ffffff;
  .card-img-overlay {
    padding: 0;
  }
  .qm-login-logo {
    width: 4rem;
    height: auto;
  }
  .card-img {
    position: absolute;
    top: 50%;
    left: 50%;
    min-height: 110%;
    min-width: 100%;
    transform: translate(-50%, -50%);
    border-radius: 0;
    filter: blur(4px);
    opacity: 1;
  }
  .qm-login-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .qm-login-form {
      backdrop-filter: 0;
      background-color: rgba(255, 255, 255, 0.2);
      max-width: 30rem;
      position: relative;
      // &:after {
      //   content: "";
      //   width: 100%;
      //   height: 100%;
      //   position: absolute;
      //   left: 0;
      //   top: 0;
      //   background: inherit;
      //   filter: blur(2px);
      //   z-index: 2;
      // }
      .input-group-text {
        width: 4.8rem;
      }
    }
  }
}
</style>
