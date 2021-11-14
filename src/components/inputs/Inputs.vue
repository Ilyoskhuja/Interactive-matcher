<template>
  <ul class="list-group list-group-flush">
    <div>Inputs: {{ inputs.length }}</div>
    <li class="mt-4" v-for="item in inputs" :key="item.id">
      <div class="card" @click="findMatch(item)">
        <div class="card-body">
          <h5 style="">{{ item.title }}</h5>
          <p>{{ item.artist }}</p>
          <div style="display: flex; justify-content: space-between">
            <h6>{{ item.isrc }}</h6>
            <h6>{{ item.duration | formatTime }}</h6>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<style scoped>
ul {
  list-style-type: none;
  overflow: scroll;
  overflow-x: hidden;
  height: 80vh;
}
</style>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    inputs() {
      return this.$store.state.inputs;
    },
  },
  methods: {
    ...mapMutations(["SET_STATE"]),

    findMatch(item) {
      // const options = {
      //   keys: ["artist", "title", "isrc"],
      // };

      console.log("findMatch item", JSON.stringify(item, null, 2));
      const targetFields = [item.isrc];

      const t = this.$store.state.recordings.filter((elem) => {
        return targetFields.includes(elem.isrc);
      });

      console.log("t", JSON.stringify(t, null, 2));

      // const newList = this.$store.state.results.filter(
      //   (item) => item.id !== this.$store.state.selectedResultsItem.id
      // );

      // this.SET_STATE({
      //   records: newList || [],
      // });

      this.SET_STATE({
        results: t || [],
      });

      // this.$search(item.artist, this.$store.state.recordings, options).then(
      //   (results) => {
      //     this.$store.state.results = results;
      //   }
      // );
    },
  },
  filters: {
    formatTime(time) {
      if (time > 0) {
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        var ret = "";
        ret += "0" + mins + "m" + " " + (secs < 10 ? "0" : "");
        ret += "" + secs + "s";
        return ret;
      } else return "";
    },
  },
};
</script>