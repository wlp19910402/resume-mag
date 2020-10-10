<template>
  <div class="qm-nav-header">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#" class="text-primary">HOME-D</b-navbar-brand>
      <b-navbar-nav class="ml-auto mr-2">
        <b-nav-item>wlp6897</b-nav-item>
      </b-navbar-nav>
      <b-navbar-toggle
        target="nav-text-collapse"
        @click.stop="toggleMenu = !toggleMenu"
      >
      </b-navbar-toggle>
    </b-navbar>
    <b-sidebar
      class="qm-relative"
      width="10em"
      id="sidebar-1"
      title="Menu"
      v-model="toggleMenu"
      shadow
    >
      <nav-menu></nav-menu>
    </b-sidebar>
  </div>
</template>
<script>
import NavMenu from "@/components/common/NavMenu";
export default {
  components: { NavMenu },
  data() {
    return {
      toggleMenu: false,
    };
  },
};
</script>
<style>
.qm-nav-header {
  position: absolute;
  width: 100%;
  top: 0;
}
</style>