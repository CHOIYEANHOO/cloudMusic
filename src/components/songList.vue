<template>
  <div id="songList">
     <div class="header-cont">
        <div class="back"></div>
        <p class="title">歌单</p>
        <div class="playing">
          <i class="one"></i>
          <i class="two"></i>
          <i class="three"></i>
          <i class="four"></i>
        </div>
    </div>
    <div class="list-msg">
        <div class="list-img-cont">
            <img src="" alt="" class="list-img">
            <div class="listen-count">
                <i class="icon"></i>
                <span class="num"></span>
            </div>
        </div>
        <div class="list-msg-cont">
            <p class="list-name"></p>
            <p class="list-desc"></p>
        </div>
    </div>
    <div class="song-list-cont">
        <div class="list-header">
            <i class="icon"></i>
            <p>播放全部<span>（共{{count}}首）</span></p>
        </div>
        <!-- <div class="song-list">
            <div class='song'>
              <p class="num">{{i}}</p>
              <div class="song-info">
                <p class="song-name">{{item.songName}}</p>
                <p class="singer-info">{{item.singerName}} - {{item.listName}}</p>
              </div>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#songList{
  width: 100%;
  height: auto;
  .header-cont{
    width: 100%;
    height: 0.88rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .back {
      width: 0.23rem;
      height: 0.88rem;
      margin-left: 0.32rem;
      background: url('../assets/img/back_02.png')no-repeat center;
      background-size: 100% auto;
    }
    .title {
      width: auto;
      height: 0.88rem;
      line-height: 0.88rem;
      text-align: center;
      margin: 0 auto;
      font-size: 0.36rem;
      color: #000;
      font-weight: bold;
    }
    .playing {
      display: flex;
      position: relative;
      float: left;
      justify-content: space-between;
      align-items: flex-end;
      width: 0.46rem;
      height: 0.45rem;
      margin: 0.1rem 0.2rem 0 0.2rem;
      i {
        display: block;
        position: absolute;
        bottom: 0;
        width: 0.05rem;
        background: #000;
      }
      .one {
        left: 0;
        height: 0.3rem;
      }
      .two {
        left: 0.15rem;
        height: 0.2rem;
      }
      .three {
        left: 0.3rem;
        height: 0.45rem;
      }
      .four {
        left: 0.45rem;
        height: 0.1rem;
      }
    }
  }
  .list-msg{
    width: 6.8rem;
    height: 4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .list-img-cont{
      width: 2.82rem;
      height: 2.82rem;
      border-radius: .2rem;
      overflow: hidden;
      img{
        display: block;
        width:100%;
        height: 100%;
        position: relative;
      }
      .listen-count{
        position: absolute;
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        right: .2rem;
        top: .05rem;
        .icon{
          width: .19rem;
          height: .24rem;
          display: block;
          background: url()no-repeat center;
          background-size: 100% auto;

        }
        .num{
          width: auto;
          height: .34rem;
          line-height: .34rem;
          font-size: .26rem;
          color: #fff;

        }
      }
    }
    .list-msg-cont{
      width: 3.65rem;
      height: 1.85rem;
    }
  }
  .song-list-cont {
    width: 100%;
    height: auto;
    border-radius: .3rem .3rem 0 0;
    background: #fff;
    .list-header{
      width: 100%;
      height: 1.1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon{
        display: block;
        width: .4rem;
        height: .4rem;
        background: url()no-repeat center;
        background-size: 100% auto;
        margin: 0 .2rem;
      }
      p{
        width: auto;
        height: 1.1rem;
        line-height: 1.1rem;
        font-size: .34rem;
        color: #000;
        font-weight: bold;

        span{
          line-height: 1.1rem;
          font-size: .3rem;
          color: #555;
        }
      }
    }
    .song-list{
      width: 100%;
      height: auto;
      .song{
        width: 100%;
        height: 1.26rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        .num{
          width: .85rem;
          height: 1.26rem;
          line-height: 1.26rem;
          font-size: .26rem;
          text-align: center;
        }
        .song-info{
          height: .9rem;
          width: auto;
          display: flex;
          flex-direction: column;
          .song-name{
            font-size: .34rem;
            line-height: .5rem;
            color: #000;
            height: .5rem;
          }
          .singer-info{
            font-size: .18rem;
            line-height: .4rem;
            height: .4rem;
            color: #555;
          }
        }
      }
    }
  }
}
</style>
