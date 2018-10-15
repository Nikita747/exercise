<template>
	<div id="detailPost">
		<div v-if="post.id">
			<h1>
				{{post.title}}
			</h1>
			<div>
				{{post.body}}
			</div>
			<div style="text-align: right;color:#7a3f97">
				<span v-if="userdetail.id">
					<a @click="gotoUserDetails(userdetail.id)">@{{userdetail.username}} ({{userdetail.name}})</a>
				</span>
			</div>
			<hr>
			<div v-if="comments.length > 0">
				<div v-for="comment in comments">
						{{comment.body}}
						<hr>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detailPost',
  data () {
  	return {
  		jsonUrl: 'https://jsonplaceholder.typicode.com/',
  		post: {},
  		comments: [],
  		userdetail: {}
  	}
  },
  mounted () {
  	this.init(this.$route.params.id)
  },
  methods: {
  	init (id) {
  		axios.get(this.jsonUrl + 'posts/' + id).then(res => {
        this.post = res.data
        axios.get(this.jsonUrl + 'comments?postId=' + this.post.id).then(resp => {
        	this.comments = resp.data
        }).catch(e => {
        	console.log('e', e)
        })
        axios.get(this.jsonUrl + 'users/' + this.post.userId).then(userRes => {
        	this.userdetail = userRes.data
        }).catch(errr => {
        	console.log('errr', errr)
        })
      }).catch(err => {
        console.log('err', err)
      })
  	},
  	gotoUserDetails(id) {
  		this.$router.push('/user/' + id)
  	}
  }
}
</script>

<style>
#detailPost {
	/*padding: 0 80px 0 80px;*/
	padding: 20px 80px 20px 80px;
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.1);
  transition: 0.3s;
  border-radius: 5px;
}
a {
  cursor: pointer ;
}
</style>