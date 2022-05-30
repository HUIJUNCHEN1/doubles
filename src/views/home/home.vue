<template>
  <div class="home">
    <Hswiper
      class="Hswiper"
      :Image="[
        'IMG_0713.jpg',
        'IMG_0781.jpg',
        'IMG_0784.jpg',
        'IMG_0786.jpg',
        'IMG_0787.jpg',
      ]"
    ></Hswiper>
    <h1 class="case">案例</h1>
    <h3 class="cases">CASE</h3>
    <Hcase class="Hcase"></Hcase>
    <h1 class="case">设计师</h1>
    <h3 class="cases">DESIGNER</h3>
    <designer
      :designer="['Alyssa.jpg', 'Lisa.jpg', 'Ouyang.jpg', 'xhl.jpg']"
    ></designer>
    <h1 class="case">关于</h1>
    <h3 class="cases">ABOUT</h3>
    <About></About>
    <h1 class="case">现场</h1>
    <h3 class="cases">SCENE</h3>
    <Scene
      class="Sswiper"
      :Image="['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg']"
    ></Scene>
  </div>
</template>

<script>
import Hswiper from "../../../src/components/swiper/Hswiper.vue";
import Hcase from "../../../src/components/case/Hcase.vue";
import designer from "../../../src/components/design/designer.vue";
import Htabbar from "../../../src/components/tabbar/Htabbar.vue";
import About from "../../../src/components/about/About.vue";
import Scene from "../../components/scene/Scene.vue";
export default {
  name: "home",
  components: {
    Htabbar,
    Hswiper,
    Hcase,
    designer,
    About,
    Scene,
  },
};
</script>

<style scoped>
.Hswiper {
  margin: 20px auto;
  width: 85%;
}
.Sswiper {
  margin: 20px auto;
  width: 85%;
}
.case {
  display: inline-block;
  margin-left: 20px;
  font-weight: normal;
  color: black;
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