<template>
 <div>
  <button class="btn btn-outline-primary" @click="register"><i class="fa fa-arrow-right"></i> Register</button>
  </div>
</template>
<style scoped>
</style>
<script>

import { mapMutations } from "vuex";
export default {

  methods: {
    ...mapMutations(["SET_STATE"]),

    register() {
      console.log("selected:----",this.$store.state.selectedInputsItem);
      this.$store.commit('addInput')
    
    },
  },
};
</script>