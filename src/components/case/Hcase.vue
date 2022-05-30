<template>
  <div class="Hcase">
    <ul class="case" @click="btnclick">
      <li>
        <span>中式</span>
        <img src="../../assets/img/Hcase/chinese/IMG_0740.jpg" alt="" />
      </li>
      <li>
        <span>Loft</span>
        <img src="../../assets/img/Hcase/loft/IMG_0231.jpg" alt="" />
      </li>
      <li>
        <span>现代</span>
        <img src="../../assets/img/Hcase/modern/IMG_0346.jpg" alt="" />
      </li>
    </ul>
    <el-button class="detail" type="primary" plain @click="btnclick"
      >点击查看更多案例</el-button
    >
  </div>
</template>

<script>
export default {
  name: "Hcase",
  methods: {
    btnclick() {
      this.$router.push("/detail");
    },
  },
};
</script>

<style scoped>
.Hcase {
  width: 85%;
  height: 380px;
}
.case {
  display: flex;
}
.case li {
  flex: 1;
  list-style: none;
  height: 300px;
  margin: 5px;
}
li img {
  display: block;
  width: 100%;
  height: 100%;
}
li img:hover {
  transform: scale(1.01);
}
span {
  color: rgb(158, 154, 154);
}
li:hover span {
  border-bottom: 1px solid black;
  color: black;
}
.detail {
  position: relative;
  color: rgb(158, 154, 154);
  left: 88%;
  top: 8%;
}
</style>