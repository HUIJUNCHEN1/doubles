<template>
  <div class="about">
    <div class="left">
      <h1 class="aboutus">关于我们</h1>
      <p class="title">
        专注中国高端定制设计美学，由国内一流团队联袂打造，倾注才华、美学精雕细琢。通过设计、品质、技术、工艺上的创新，实现设计意境。<br />
      </p>
      <p class="title">
        为客户提供从家居产品到全方位空间解决方案，为高端人群打造梦想之家：缔尚建筑以强大的设计实现能力，为品味独到者量身定制独特的订制体验；设计师手法多方适配，从心出发，只为满足客户不同需求。对待客户的个性需求，我们会一直坚持创造传世精品，在中国树立顶级定制典范。
      </p>
      <!-- <detail>zhankai</detail> -->
      <el-button type="primary" plain class="more">了解更多</el-button>
    </div>
    <div class="right">
      <Aswiper
        class="Aswiper"
        :Image="['IMG_6347.jpg', 'IMG_6351.jpg']"
      ></Aswiper>
    </div>
  </div>
</template>

<script>
import Detail from "../../views/detail/detail.vue";
import Aswiper from "./aboutchidren/Aswiper.vue";
export default {
  name: "About",
  components: {
    Aswiper,
    Detail,
  },
};
</script>

<style scoped>
.about {
  width: 85%;
  height: 450px;
  margin: 20px auto;
  display: flex;
}
.left {
  width: 40%;
  height: 100%;
}
.right {
  width: 60%;
  height: 100%;
}
.aboutus {
  font-weight: normal;
  margin-top: 15px;
  margin-left: 15px;
}
.title {
  font-size: 17px;
  text-indent: 1em;
  margin-left: 15px;
  margin-top: 55px;
  margin-right: 5px;
  color: rgb(105, 105, 105);
}
.more {
  margin-top: 25px;
  margin-left: 25px;
  color: rgb(158, 154, 154);
}
.Aswiper {
  margin-top: 55px;
  height: 430px;
}
</style>