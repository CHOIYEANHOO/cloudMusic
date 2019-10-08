<template>
  <div id="app">
    <SongList/>
  </div>
</template>

<script>
// import Index from './components/Index'
// import Board from './components/board'
// import BoardList from './components/boardList'
// import Index from '@/components/index'
// import Play from '@/components/play'
import SongList from '@/components/songList'

export default {
  name: 'App',
  components: {
    SongList
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
