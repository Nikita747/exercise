<template>
	<div id="userDetails">
    <!-- User Details -->
    <div v-if="user.id">
      <div class="custom">
        <b>@{{user.username}}</b>
      </div>
      <div  class="custom" style="font-size:24px;">
        <b>{{user.name}}</b>
      </div>
      <div class="custom">
        {{user.email}}
      </div>
      <div class="custom">
        {{user.address.street}},&nbsp;{{user.address.suite}},&nbsp;{{user.address.city}},&nbsp;{{user.address.zipcode}}.
      </div>
      <div class="custom">
        {{user.phone}}
      </div>
      <div class="custom">
        {{user.website}}
      </div>
      <div class="custom">
        {{user.company.name}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'userDetails',
  data () {
    return {
      user: {},
      jsonUrl: 'https://jsonplaceholder.typicode.com/'
    }
  },
  mounted () {
    this.init(this.$route.params.id)
  },
  methods: {
    init (id) {
      axios.get(this.jsonUrl + 'users/' + id).then(res => {
        this.user = res.data
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style>
#userDetails {
  padding: 20px 80px 20px 80px;
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
}
.custom {
  padding-top: 20px;
  /*box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.2);*/
  /*transition: 0.3s;*/
  /*border-radius: 0px;  5px rounded corners */
}
</style>