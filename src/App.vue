<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Index />
  </div>
</template>

<script>
import Index from './view/index'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F0F0F2;
  width: 100%;
  height: 100vh;
}
table {
  width: 100% !important;
  border: 2px solid #DCDDE0 !important;
  border-radius: 10px;
  overflow: hidden;
}
tbody tr:first-child {
  background: #f2f0f0;
}
tbody tr:first-child {
    background: rgba(240,240,242,1);
    border: unset !important;
}
tbody tr:first-child td{
  color: #212121 !important;
  font-size: 0.4rem !important;
  border: unset !important;
}
tbody tr:first-child td {
  border-top: unset !important;
}
tr td {
  font-size: 0.3rem;
  padding: 0.4rem 0;
}
tr td:last-child {
  color: #FD9E47;
  border-right: unset !important;
}
td {
    width: 33% !important;
    border: 1px solid #DCDDE0 !important;
    border-left: unset !important;
    border-top: unset !important;
    box-sizing: border-box;
    font-size: 0.34rem;
    text-align: center;
}
tbody tr:last-child td{
  border-bottom: unset !important;
}
tr td:first-child {
  width: 18% !important;
}
tr td:last-child {
  width: 18% !important;
}
</style>
