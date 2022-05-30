<template>
  <div class="tabbar">
    <div class="logo"><img src="../../assets/img/logo/LOGO2.jpg" alt="" /></div>
    <div class="detail">
      <ul class="contain">
        <li @click="hclick">首页</li>
        <li>案例</li>
        <li>团队</li>
        <li>关于</li>
        <li>现场</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Htabbar",
  methods: {
    hclick() {
      this.$router.back(-1);
    },
  },
};
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 120px;
}
.logo {
  position: relative;
  width: 250px;
  height: 120px;
  margin-left: 25px;
}
.logo img {
  position: absolute;
  width: 100%;
  top: -65px;
}
.detail {
  position: absolute;
  width: 50%;
  height: 120px;
  left: 55%;
  top: 0;
}
.contain {
  position: absolute;
  margin-left: 10px;
  top: 40%;
}
.contain li {
  float: left;
  list-style: none;
  height: 50px;
  width: 80px;
  margin-left: 25px;
  font-size: 18px;
  text-align: center;
}
.contain li:hover {
  border-bottom: 1px solid black;
}
</style>