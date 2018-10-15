<template>
  <div class="hello">
    <post></post>
  </div>
</template>

<script>
import Post from '@/components/Post'
export default {
  name: 'HelloWorld',
  components: {
    Post
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  cursor: pointer ;
}
</style>
