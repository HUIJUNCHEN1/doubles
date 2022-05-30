<template>
  <div class="detail">
    <Dcase> </Dcase>
  </div>
</template>

<script>
import Dcase from "../../components/detail/Dcase.vue";
export default {
  name: "detail",
  components: {
    Dcase,
  },
};
</script>

<style scoped>
.detail {
  width: 85%;
  margin: 20px auto;
}
</style>