<template>
	<div id="Post">
		<!-- Post List -->
		<div v-for="post in list" style="" class="custom1">
			<h2>
				<a @click="mypostdetail(post)" style="color:#7a3f97">
					<u>{{post.title}}</u>
				</a>
			</h2>
			<br>
			<div style="font-size:16px" :title="post.body">
				{{post.body | setBody}}
			</div>
			<br>
			<div v-if="post.user" style="text-align:right;color:#7a3f97">
				
				<a @click="userdetailPage(post.userId)">
					<u>
						<span v-if="users[post.userId]!== undefined">
							@{{post.user.username}}	.
						</span>
						<span v-if="users[post.userId] !== undefined">
							({{post.user.name}})	
						</span>
					</u>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Post',
  data () {
  	return {
  		jsonUrl: 'https://jsonplaceholder.typicode.com/',
  		list: [],
  		users: {}
  	}
  },
  filters: {
  	setBody: function (body) {
  		if (!body) return ''
  		if (body.length > 100) {
  			return body.substring(0, 100) + '...'
  		}
  		return body
  	}
  },
  mounted () {
  	this.init()
  },
  methods: {
  	init () {
		axios.get(this.jsonUrl + 'posts').then (res => {
			this.list = res.data
			for (let [inx, post] of res.data.entries()) {
				post.user = {
					username: '',
					name: ''
				}
			   this.getUserDetails(post.userId, inx)
			}
		}).catch(err => {
			console.log('error', err)
		})
  	},
  	mypostdetail (post) {
  		this.$router.push('post/' + post.id)
  	},
  	getUserDetails (id, inx) {
  		if (!this.users.hasOwnProperty(id)) {
	  		axios.get(this.jsonUrl + 'users/' + id).then(resp => {
		  		this.users[id] = resp.data
		  		let mdata = this.list[inx]
		  		mdata.user = resp.data
		  		this.list.splice(inx, 0)
		  		this.list.splice(inx, 1, mdata)
		  	}).catch(err => {
		  		console.log('error', err)
		  	})
  		} else {
  			let mdata = this.list[inx]
	  		mdata.user = resp.data
	  		this.list.splice(inx, 0)
	  		this.list.splice(inx, 1, mdata)
  		}
  	},
  	userdetailPage (id) {
  	    this.$router.push('user/' + id)
  	}
  }
}
</script>

<style>
#Post {
}
.custom1 {
  padding: 20px 80px 20px 80px;
  margin: 10px 0 10px 0; 
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.1);
  transition: 0.3s;
  border-radius: 5px;
}
a {
  cursor: pointer ;
}
</style>