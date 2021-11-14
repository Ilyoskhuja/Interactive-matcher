<template>
  <div>
    <input type="text" v-model="search" placeholder="Search title.." />

    <div>Records: {{ recordings.length }}</div>
    <ul class="list-group list-group-flush">
      <li class="mt-4" v-for="item in recordings" :key="item.id">
        <div class="card">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    recordings() {
      return this.$store.state.results.filter((item) =>
        [item.isrc, item.artist, item.title].find((el) =>
          el && ~el.indexOf(this.search)
        )
      );
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
  methods: {
    //     findMatch: debounce(function (e) (){
    //       const options : {
    //   keys: ['artist', 'title','iscr']
    //         }
    // this.$search(this.search,this.$store.state.recordings, options).then(results => {
    //   console.log("search result:",results)
    //   this.$store.state.results = results
    // }) }, config.debouncers.default)
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  overflow: scroll;
  overflow-x: hidden;
  height: 80vh;
}
</style>