<template>
  <div class="designer">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="(item, index) in designer" :key="index">
        <h3>
          <img
            :src="require('../../../src/assets/img/designer/' + item)"
            alt=""
          />
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "designer",
  props: {
    designer: {
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
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
  background-color: black;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.designer {
  width: 80%;
  margin: 20px auto;
}
.designer img {
  max-height: 500px;
}
.name {
  /* position: absolute; */
  font-size: 25px;
  background-color: #fff;
  height: 25px;
  /* left: 15px; */
}
</style>