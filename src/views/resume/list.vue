<template>
  <div class="d-flex qm-container">
    <nav-menu class="qm-scroll-auto custom-class"></nav-menu>
    <div class="flex-fill qm-scroll-auto">
      <nav-header></nav-header>
      <div class="">
        <div class="pt-5">
          <div
            v-for="count in 3"
            class="my-2"
            style="width: 100%; background-color: red; height: 400px"
          >
            hha {{ count }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from "@/components/common/NavHeader";
import SideBar from "@/components/common/SideBar";
import NavMenu from "@/components/common/NavMenu";
export default {
  components: { NavHeader, SideBar, NavMenu },
};
</script>
<style lang="less">
.qm-container {
  position: fixed;
  width: 100%;
  height: 100%;
  // .qm-container-sm {
  //   display: none;
  //   &.container-lg {
  //     display: block;
  //   }
  // }
}
</style>
