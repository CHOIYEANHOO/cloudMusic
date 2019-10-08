import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/board'
import BoardList from '@/components/boardList'
import Index from '@/components/index'
import Play from '@/components/play'
import SongList from '@/components/songList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board
    },
    {
      path: '/',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Play',
      component: Play
    },
    {
      path: '/',
      name: 'SongList',
      component: SongList
    }
  ]
})
