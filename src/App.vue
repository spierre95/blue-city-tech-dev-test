<template>
  <div id="app">
    <TheSideBar />
    <div class="row">
      <div class="col-12">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheSideBar from "./components/TheSideBar";
export default {
  name: "app",
  components: {
    TheSideBar,
  },
};
</script>

<style lang="scss">
//override bootstrap
#app {
  
  // causing wierd glitch when opening side bar
  .row {
    margin: 0;
  }
  .container {
    max-width: 850px;
  }
}

.header-title {
  margin: 30px;
  text-align: center;
  color: green;
}
</style>
