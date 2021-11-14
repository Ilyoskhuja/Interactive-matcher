<template>
  <ul class="list-group list-group-flush">
    <div>Inputs: {{ inputs.length }}</div>
    <li class="mt-4" v-for="item in inputs" :key="item.id">
      <div class="card " v-bind:class="{isActive:activeItem===item}" @click="findMatch(item)">
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
.isActive{
  border:18px solid #e19eae ;
}
</style>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      activeItem:null
    };
  },
  computed: {
    inputs() {
      return this.$store.state.inputs;
    },
  },
  methods: {
    ...mapMutations(["SET_STATE","S_INPUT"]),

    findMatch(item) {
      console.log(item);
      this.activeItem=item;
     this.S_INPUT({item});
     console.log("selected+++++:",this.$store.state.selectedInputsItem) 
    //   const options = {
    //     keys: ["artist", "title"],
    //   };
    //   var t=[]
    //  this.$search(item.artist, this.$store.state.recordings, options).then(
    //     (results) => {
    //       console.log("results:",results)
    //       t = results;
    //     }
    //   );
   
      console.log("findMatch item", JSON.stringify(item, null, 2));
      const targetFields =(item.title.toUpperCase()+' '+item.artist.toUpperCase() +(item.isrc?' ' + item.isrc?.toUpperCase():'')).split(' ');
      //[(item.isrc||'').toString().toUpperCase(),item.title.toUpperCase(),item.artist.toUpperCase()];
      
      const t = this.$store.state.recordings.filter((elem) => {
         const ele=(elem.title.toUpperCase()+' '+elem.artist.toUpperCase() +' '+elem.isrc?.toUpperCase()).split(' ');
       
         return ele.filter(field=> targetFields.includes(field)).length>0;
          // (targetFields.includes(elem.title.toUpperCase()) ||  targetFields.includes(elem.artist.toUpperCase()) || (elem.isrc && targetFields.includes(elem.isrc.toString().toUpperCase())));
      //  return  targetFields.includes(elem.artist)  ;
      });

      console.log("t", JSON.stringify(t, null, 2));

    

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