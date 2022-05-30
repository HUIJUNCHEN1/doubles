<template>
  <div class="banner">
    <div class="logo"><img src="../../assets/img/logo/LOGO2.jpg" alt="" /></div>
    <ul class="detail">
      <li>首页</li>
      <li>案例</li>
      <li>团队</li>
      <li>关于</li>
      <li>联系我们</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style scoped>
.banner {
  position: fixed;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid rgb(139, 138, 138, 0.2);
}

.logo {
  display: inline-block;
  padding-left: 20px;
  line-height: 100px;
  width: 141px;
  height: 100px;
}

.logo img {
  width: 200px;
}

.detail {
  display: inline-block;
  list-style: none;
  margin-left: 45%;
}

.detail li {
  float: left;
  text-align: center;
  line-height: 100px;
  font-size: 18px;
  padding: 0 30px 0 30px;
}

.detail li:hover {
  border-bottom: 1px solid rgb(139, 138, 138);
}
</style>