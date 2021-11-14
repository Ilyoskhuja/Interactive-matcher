<template>
<ul class="list-group list-group-flush">
  <li class="mt-4" v-for="item in inputs" :key="item.title">
  <div class="card" @click="findMatch(item)">
    <div class="card-body">
      <h5 style="">{{ item.title }}</h5>
      <p>{{item.artist}}</p>
      <div style="display:flex; justify-content: space-between;">
      <h6>{{item.isrc}}</h6> <h6>{{item.duration |formatTime}}</h6>
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
export default {
     data() {
    return{
      
    }
  },
  computed:{
    inputs() {
                return this.$store.state.inputs;
            },
  },
  methods:{
    findMatch(item){
      const options = {
   keys: ['artist', 'title','iscr']
        }
  
this.$search(item.artist,this.$store.state.recordings, options).then(results => {
  this.$store.state.results = results
})
}
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
}
</script>