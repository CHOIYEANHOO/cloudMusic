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
              <img src="" alt="">
              <p class="text">每天更新</p>
          </div>
          <div class="board-top-three">
            <a href=""><p>{{}}</p></a>
            <a href=""><p>{{}}</p></a>
            <a href=""><p>{{}}</p></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search Page",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#songList {
  width: 100%;
  height: auto;
  .header-cont{
    width: 100%;
    height: .88rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .back{
      width: .27rem;
      height: .88rem;
      margin-left: .32rem;
    }
    .title{
      width: auto;
      height: .88rem;
      text-align: center;
      margin: 0 auto;
      font-size: .36rem;
      color: #fff;
    }
    .playing{
      display: block;
      position: relative;
      float: left;
      width: .7rem;
      height: .45rem;
      margin: .13rem 0 0 .3rem;
      i{
        display: block;
        position: absolute;
        bottom: 0;
        width: .1rem;
        background: #000;
      }
      .one{
        left: 0;
        height: .3rem;
      }
      .two{
        left: .2rem;
        height:.2rem;
      }
      .three{
        left: 0.4rem;
        height: .45rem;
      }
      .four{
        left: 0.6rem;
        height: .1rem;
      }
    }
  }
  .song-list-cont{
    width: 6.9rem;
    height: auto;
    margin: 0 auto;
    .list-title{
      width: 100%;
      height: .45rem;
      line-height: .45rem;
      font-size: .38rem;
      color: #000;
      text-align: left;
    }
    .board-li{
      width: 100%;
      height: 2.18rem;
      display: flex;
      flex-direction: row;
      align-items: center;

      .img-title{
        width: 2.18rem;
        height: 2.18rem;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
        .text{
          width: 100%;
          height: .54rem;
          background: #00000010;
          color: #fff;
          line-height: .54rem;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .board-top-three{
        width: 4.35rem;
        height: 1.7rem;
        p{
          font-size: .3rem;
          line-height: .55rem;
          height: .55rem;
          text-align: left;
          color: #888;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
