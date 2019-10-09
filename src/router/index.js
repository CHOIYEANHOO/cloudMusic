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
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Board',
      name: 'Board',
      component: Board
    },
    {
      path: '/BoardList',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/Play',
      name: 'Play',
      component: Play
    },
    {
      path: '/SongList',
      name: 'SongList',
      component: SongList
    },
    {
      path: '/',
      redirect: '/Index',
      component: Index
    }
  ]
})
