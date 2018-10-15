import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userDetails from '@/components/userDetails'
import PostList from '@/components/Post'
import detailPost from '@/components/detailPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/post',
      name: 'Post',
      component: PostList
    },
    {
      path: '/user/:id',
      name: 'userDetails',
      component: userDetails
    },
    {
      path: '/post/:id',
      name: 'detailPost',
      component: detailPost
    }
  ]
})
