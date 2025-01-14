<template>
  <div>
<!--    <h1>hello</h1>-->
<!--    <m-button></m-button>-->
    <m-page1></m-page1>
  </div>
</template>

<script>
import MyLayout from '@/components/layout.vue'
import MyButton from '@/components/button.vue'
import MyPage from '@/components/page.vue'
import MyPage1 from '@/components/page1.vue'

export default {
  components: {
    'm-layout': MyLayout,
    'm-button': MyButton,
    'm-page': MyPage,
    'm-page1': MyPage1
  }
}
</script>

<style scoped>

</style>
