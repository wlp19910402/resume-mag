<template>
  <div class="qm-relative qm-nav-menu-box" style="width: 12rem">
    <div class="qm-nav-menu text-center">
      <router-link class="navbar-brand mt-3 mb-5" to="/">
        <b-img-lazy
          v-bind="mainProps"
          :src="logo"
          rounded
          alt="Rounded
          image"
        ></b-img-lazy>
      </router-link>
      <b-nav vertical class="text-left" v-for="count in 6" :key="count">
        <b-nav-item active>
          <b-icon icon="window" scale="0.7" class="mr-3"></b-icon
          >首页</b-nav-item
        >
        <b-nav-item>
          <b-icon icon="window" scale="0.7" class="mr-3"></b-icon>
          <span class="nav-link-inner--text">用户中心</span>
        </b-nav-item>
        <b-nav-item to="/register">
          <b-icon icon="window" scale="0.6" class="bg-info mr-3"></b-icon>
          <span class="nav-link-inner--text">简历管理中心</span>
        </b-nav-item>
        <div>
          <b-nav-item @click.stop="show = !show">
            <b-icon icon="window" scale="0.7" class="mr-3"></b-icon>
            <span class="nav-link-inner--text">制作中心</span>
          </b-nav-item>
          <b-collapse v-model="show" id="collapse-1" class="mt-2">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm"
                >Toggle Inner Collapse</b-button
              >
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </b-collapse>
        </div>
      </b-nav>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo-op-white.png";
export default {
  data() {
    return {
      logo,
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 60,
        height: 60,
        class: "m1",
      },
      show: false,
    };
  },
};
</script>
<style lang="less">
.nav-link {
  color: #999999;
  &.active {
    border-left: 2px solid #00a4ff;
    color: #333333 !important;
  }
}
</style>