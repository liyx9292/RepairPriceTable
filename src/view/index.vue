<template>
  <div class="layout">
    <Category />
  </div>
</template>
<script>
import Category from '../components/Category'
export default {
  name: 'layout',
  components: {
    Category
  },
}
</script>
<style scoped>
.layout {
  padding-top: 1rem;
  box-sizing: border-box;
}
</style>

