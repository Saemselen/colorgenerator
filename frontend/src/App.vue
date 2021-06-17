<template>
    <Header @pageChanged="changePage($event)"/>
    <Generate v-if="data.pageActive == 0"/>
    <Browse v-if="data.pageActive == 1"/>
</template>

<script>
import { reactive } from "vue"

import Header from "./components/Header"
import Generate from "./components/Generate"
import Browse from "./components/Browse"

export default {
  name: 'App',
  components: {
    Header,
    Generate,
    Browse
  },
  setup(props, context) {
    const data = reactive({pageActive:0})
    const changePage = (e) => {
      data.pageActive = e
    }
    return { data,changePage }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
* {
    margin:0;
    padding:0;
    font-family: Roboto;
}
</style>
