<template>
  <div id="songList">
    <div class="header-cont">
      <div class="back"></div>
      <p class="title">排行榜</p>
      <div class="playing">
        <i class="one"></i>
        <i class="two"></i>
        <i class="three"></i>
        <i class="four"></i>
      </div>
    </div>
    <div class="song-list-cont">
      <div class="list-title">官方榜</div>
      <div class="board-li">
        <div class="img-title">
          <img src alt />
          <p class="text">每天更新</p>
        </div>
        <div class="board-top-three">
          <!-- <a href=""><p>{{}}</p></a>
            <a href=""><p>{{}}</p></a>
          <a href=""><p>{{}}</p></a>-->
          <a href>
            <p></p>
          </a>
          <a href>
            <p></p>
          </a>
          <a href>
            <p></p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#songList {
  width: 100%;
  height: auto;
  .header-cont {
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
      margin: 0.1rem 0 0 0.2rem;
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
  .song-list-cont {
    width: 6.9rem;
    height: auto;
    margin: 0 auto;
    .list-title {
      width: 100%;
      height: 0.45rem;
      line-height: 0.45rem;
      font-size: 0.35rem;
      color: #000;
      font-weight: bold;
      text-align: left;
      margin-top: .3rem;
    }
    .board-li {
      width: 100%;
      height: 2.18rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: .2rem;
      .img-title {
        width: 2.18rem;
        height: 2.18rem;
        position: relative;
        border-radius: .08rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          display: block;
          background: blue;
        }
        .text {
          width: 100%;
          height: 0.54rem;
          background: #00000008;
          color: #fff;
          line-height: 0.54rem;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: absolute;
          bottom: 0;
          margin: 0;
        }
      }
      .board-top-three {
        width: 4.35rem;
        height: 1.7rem;
        p {
          font-size: 0.3rem;
          line-height: 0.55rem;
          height: 0.55rem;
          text-align: left;
          color: #888;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
        }
      }
    }
  }
}
</style>
