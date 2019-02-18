<template>
  <p v-on:click="reverseMessage">結果</p>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
     query: Array
  },
  methods: {
    reverseMessage: function (key) {
      console.log(this.$route.query)
      console.log(this.query)
    }
  }
}
</script>