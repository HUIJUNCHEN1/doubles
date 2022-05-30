<template>
  <el-carousel indicator-position="outside" height="500px">
    <el-carousel-item v-for="(item, index) in Image" :key="index">
      <h3>
        <img :src="require('../../../src/assets/img/sence/' + item)" alt="" />
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Scene",
  props: {
    Image: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  max-height: 500px;
}
</style>