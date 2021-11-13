<template>
<ul class="list-group list-group-flush">
 <li class="mt-4" v-for="item in items" :key="item.title">
  <div class="card">
    <div class="card-body">
      <h5 style="">{{ item.title }}</h5>
      <p>{{item.artist}}</p>
      <div style="display:flex; justify-content: space-between;">
      <h6>{{item.isrc}}</h6> <h6>{{item.duration | formatTime }}</h6>
      </div>
    </div>
  </div>
  </li>
</ul>  
</template>
<script>
import db from "../../assets/sound_recordings.csv"
export default {
  data() {
    return{
      items:db
    }
  },
  mounted() {
 
  },
  filters: {
    formatTime(time) {  
    if(time>0)
    {var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var ret = "";
    ret += "0" + mins + "m" +" "+ (secs < 10 ? "0" : "");
    ret += "" + secs+"s";
    return ret;}
    else
    return ""
   }

  },
  methods: {
  
  }  
}
</script>
<style scoped>
ul {
    list-style-type: none;
    overflow: scroll;
    overflow-x: hidden;
    height: 80vh;
}
</style>