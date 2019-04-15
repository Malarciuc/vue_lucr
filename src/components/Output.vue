<template>
  <div class="hello">
    Output
    <br>
    Suma X + Y = <span>{{parseInt($store.getters.getX)  + parseInt($store.getters.getY)}}</span>
  </div>
</template>

<script>
export default {
  name: 'Output',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
