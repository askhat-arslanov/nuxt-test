<template>
  <div>
    <TheHeader @sidenav-toggle="displaySidenav = !displaySidenav" />

    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />

    <Nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";

export default {
  components: {
    TheHeader,
    TheSidenav
  },

  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
