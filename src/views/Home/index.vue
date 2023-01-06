<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer />
    <Recommand />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer";
import Recommand from "@/views/Home/Recommand";
import Rank from "@/views/Home/Rank";
import Like from "@/views/Home/Like";
import Floor from "@/views/Home/Floor";
import Brand from "@/views/Home/Brand";
import { mapState } from "vuex";

export default {
  components: {
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("home/floorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style></style>
