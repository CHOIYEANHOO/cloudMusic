import axios from '@/utils/http'

const song = {
  // 音乐详情
  songDetail (id) {
    return axios.get('/song', {
      id: id
    })
  },
  // 音乐播放地址
  songUrl (params) {
    return axios.get('/url', {
      params: params
    })
  },
  // 音乐歌词
  songLyric (id) {
    return axios.get('/lrc', {
      id: id
    })
  },
  // 音乐歌单
  songList (id) {
    return axios.get('/songList', {
      id: id
    })
  },
  // 搜索
  searchSong (keyword) {
    return axios.get('/search', {
      keyword: keyword
    })
  },
  // 首页轮播图
  banner () {
    return axios.get('/banner')
  },
  // 最新音乐
  newest () {
    return axios.get('/newest')
  },
  // 热门歌单
  hotList (num = 50) {
    return axios.get('/songLIst/hot?orderType=hot', {
      pageSize: num
    })
  },
  // 歌手排行榜
  singerList () {
    return axios.get('/artist/top')
  },
  // 歌手歌曲
  singerSong (id) {
    return axios.get('/song/artist', {
      id: id
    })
  },
  // 歌手信息
  singerInfo (id) {
    return axios.get('artist/info', {
      id: id
    })
  }
}

export default song
