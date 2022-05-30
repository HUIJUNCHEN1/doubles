<template>
  <div class="Dcase">
    <h1>中式</h1>
    <ul class="photo">
      <li><img src="../../assets/img/detail/01.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/02.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/03.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/04.jpg" alt="" /></li>
    </ul>
    <h1>Loft</h1>
    <ul class="photo">
      <li><img src="../../assets/img/detail/05.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/06.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/07.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/08.jpg" alt="" /></li>
    </ul>
    <h1>现代</h1>
    <ul class="photo">
      <li><img src="../../assets/img/detail/09.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/10.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/11.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/12.jpg" alt="" /></li>
    </ul>
    <h1>广东 卢浮原著</h1>
    <ul class="photo">
      <li><img src="../../assets/img/detail/13.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/14.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/15.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/16.jpg" alt="" /></li>
    </ul>
    <h1>广东万达华府</h1>
    <ul class="photo">
      <li><img src="../../assets/img/detail/17.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/18.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/19.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/20.jpg" alt="" /></li>
    </ul>
    <h1>湖南 长沙</h1>
    <ul class="photo">
      <li><img src="../../assets/img/detail/21.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/22.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/23.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/24.jpg" alt="" /></li>
    </ul>
    <h1>广东 惠州</h1>
    <ul class="photo">
      <li><img src="../../assets/img/detail/25.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/26.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/27.jpg" alt="" /></li>
      <li><img src="../../assets/img/detail/28.jpg" alt="" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dcase",
};
</script>

<style scoped>
h1 {
  font-weight: normal;
  margin-top: 10px;
  color: rgb(95, 95, 94);
  font-size: 20px;
}
.Dcase {
  width: 100%;
  padding: top 5px;
}
.photo {
  height: 400px;
  border-bottom: 1px solid rgb(95, 95, 94);
}
.photo li {
  float: left;
  width: 23.5%;
  height: 300px;
  margin-right: 15px;
  list-style: none;
  background-color: #fff;
}
.photo li img {
  width: 100%;
  height: 100%;
}
.photo li img:hover {
  transform: scale(1.01);
}
</style>
