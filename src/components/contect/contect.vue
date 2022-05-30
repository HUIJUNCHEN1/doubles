<template>
  <div class="contect">
    <div class="code">
      <div class="add">
        <h4>地址📍</h4>
        <p>三亚市海棠区江林路33号保利C+商业中心102室</p>
        <h4>联系电话📞</h4>
        <p>176 0841 5921</p>
        <p>186 6517 7222</p>
      </div>
      <div class="qr">
        <img src="../../../src/assets/img/contect/contect.jpg" alt="" />
      </div>
    </div>
    <div class="back">
      <img src="../../../src/assets/img/contect/IMG_0373.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Contect",
};
</script>

<style scoped>
.contect {
  width: 100%;
  height: 350px;
  margin-top: 25px;
}
.code {
  display: flex;
  height: 150px;
  width: 100%;
}
.add {
  width: 50%;
  height: 100%;
  padding-left: 35px;
  background-color: #fff;
}
h4 {
  font-weight: normal;
}
p {
  text-indent: 1em;
  color: rgb(105, 105, 105);
}
.qr {
  width: 50%;
  height: 100%;
}
.qr img {
  position: absolute;
  width: 250px;
  right: 115px;
  z-index: 99;
}
.back {
  width: 100%;
  height: 200px;
}
.back img {
  width: 100%;
  height: 200px;
}
</style>