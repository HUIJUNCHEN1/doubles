<template>
  <div class="app">
    <Htabbar></Htabbar>
    <router-view></router-view>
    <h1 class="case">联系我们</h1>
    <h3 class="cases">CONTECT US</h3>
    <Contect></Contect>
  </div>
</template>

<script>
import Htabbar from "../src/components/tabbar/Htabbar.vue";
import Contect from "../src/components/contect/contect.vue";

export default {
  name: "App",
  components: {
    Htabbar,
    Contect,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  /* background-color: black; */
}
.Hswiper {
  margin: 20px auto;
  width: 85%;
}
.case {
  display: inline-block;
  margin-left: 20px;
  font-weight: normal;
  border-bottom: 1px solid rgb(100, 100, 100);
}
.cases {
  display: inline-block;
  margin-left: 5px;
  color: rgb(95, 95, 94);
}
.Hcase {
  margin: 20px auto;
  width: 85%;
}
</style>