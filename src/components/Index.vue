<template>
  <div id="index">
    <div class="search-cont">
      <div class="input-cont">
        <div class="search">
          <span class="search-icon"></span>
          <span class="placeholder-text"></span>
        </div>
        <input class="input"  type="text">
      </div>
        <a class="playing">
          <i class="one"></i>
          <i class="two"></i>
          <i class="three"></i>
          <i class="four"></i>
        </a>
    </div>
    <mt-swipe :auto="4000" class="swiper-contain">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <div class="btn-cont">
      <router-link to="/Index" class="recommend">
        <p class='icon'></p>
        <p class='text'>每日推荐</p>
      </router-link>
      <router-link to="/SongList" class="song-list">
        <p class='icon'></p>
        <p class='text'>歌单</p>
      </router-link>
      <router-link to="/BoardList" class="board">
        <p class='icon'></p>
        <p class='text'>排行榜</p>
      </router-link>
    </div>
    <div class="recommend-list">
      <div class="recommend-header">
        <div class="text">推荐歌单</div>
        <router-link to="/SongList" class="list-page">歌单广场</router-link>
      </div>
      <div class="list-cont">
          <a class='list-btn'>
              <div class='cover-cont'>
                <img src="">
                <div class='play-count'>
                  <p class="count-cont">
                      <span class="icon"></span>215wan
                  </p>
                </div>
              </div>
              <p class="btn-name">撒旦法大师傅阿斯蒂芬</p>
          </a>
            <a class='list-btn'>
              <div class='cover-cont'>
                <img src="">
                <div class='play-count'>
                  <p class="count-cont">
                      <span class="icon"></span>215wan
                  </p>
                </div>
              </div>
              <p class="btn-name">撒旦法大师傅阿斯蒂芬</p>
          </a>
            <a class='list-btn'>
              <div class='cover-cont'>
                <img src="">
                <div class='play-count'>
                  <p class="count-cont">
                      <span class="icon"></span>215wan
                  </p>
                </div>
              </div>
              <p class="btn-name">撒旦法大师傅阿斯蒂芬</p>
          </a>
            <a class='list-btn'>
              <div class='cover-cont'>
                <img src="">
                <div class='play-count'>
                  <p class="count-cont">
                      <span class="icon"></span>215wan
                  </p>
                </div>
              </div>
              <p class="btn-name">撒旦法大师傅阿斯蒂芬</p>
          </a>
            <a class='list-btn'>
              <div class='cover-cont'>
                <img src="">
                <div class='play-count'>
                  <p class="count-cont">
                      <span class="icon"></span>215wan
                  </p>
                </div>
              </div>
              <p class="btn-name">撒旦法大师傅阿斯蒂芬</p>
          </a>
            <a class='list-btn'>
              <div class='cover-cont'>
                <img src="">
                <div class='play-count'>
                  <p class="count-cont">
                      <span class="icon"></span>215wan
                  </p>
                </div>
              </div>
              <p class="btn-name">撒旦法大师傅阿斯蒂芬</p>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#index{
  width: 100%;
  height: auto;
  .search-cont{
    width: 100%;
    height: .72rem;
    margin: .4rem auto .3rem;
  }
  .input-cont{
    width:5.24rem;
    height: .72rem;
    border-radius: .36rem;
    background: #f7f7f7;
    margin-left: 1rem;
    position: relative;
    float: left;
    .search{
      width: auto;
      height: .72rem;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      .search-icon{
        display: inline-block;
        vertical-align: middle;
        width: .37rem;
        height: .72rem;
        background: url('../assets/img/search_icon.png')no-repeat center;
        background-size: 100% auto;
      }
      .placeholder-text{
        font-size: .3rem;
        line-height: .72rem;
        display: inline-block;
        height: .72rem;
        vertical-align: middle;
        color: #777;
      }
    }
    .input{
      width: 90%;
      height: .72rem;
      border: 0;
      background: none;
      margin: 0 auto;
      display: block;
      font-size: .3rem;
      line-height:.72rem;
    }
  }
  .playing{
    display: flex;
    position: relative;
    float: left;
    justify-content: space-between;
    align-items: flex-end;
    width: .46rem;
    height: .45rem;
    margin: .1rem 0 0 .2rem;
    i{
      display: block;
      position: absolute;
      bottom: 0;
      width: .05rem;
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
  .swiper-contain{
    width: 95%;
    height: 3.7rem;
    margin: .2rem auto;
    .mint-swipe-item{
      width: 100%;
      height: 100%;
      border-radius: .2rem;
      // margin: 0 .1rem;
    }
    .mint-swipe-item:first-child{
      background: orange;
    }
    .mint-swipe-item:nth-child(2){
      background: orangered;
    }
    .mint-swipe-item:last-child{
      background: blue;
    }
  }
  .btn-cont{
    width: 95%;
    height: 1.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    border-bottom: 0.01rem solid #dfdfdf;
    a{
      display: block;
      width: 1.1rem;
      height: 1.7rem;
      text-decoration: none;
      .icon{
        width:.93rem;
        height:.93rem;
        margin:0 auto;
      }
      .text{
        width:100%;
        height:.76rem;
        line-height:.76rem;
        font-size : .24rem;
        color:#555;
        text-decoration: none;
        margin:0;
      }
    }
    .recommend{
      .icon{
         background: url('../assets/img/today_btn.png')no-repeat center;
          background-size: 100% auto;
      }
    }
    .song-list{
      .icon{
      background: url('../assets/img/song_list.png')no-repeat center;
      background-size: 100% auto;
      }

    }
    .board{
      .icon{
        background: url('../assets/img/broad_btn.png')no-repeat center;
        background-size: 100% auto;
      }
    }
  }
    .recommend-list{
      width: 95%;
      height: auto;
      margin:0 auto;
      .recommend-header{
        width: 100%;
        height: 1.15rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .text{
          font-size: .36rem;
          font-weight: bold;
          line-height: 1rem;
          margin-top: .15rem;
          color: #000;
        }
        .list-page{
          width: 1.54rem;
          height: .54rem;
          border: .015rem solid #cacaca;
          padding: 0 .1rem;
          border-radius: .27rem;
          line-height: .54rem;
          text-align: center;
          margin-top: .15rem;
          color: #222;
          text-decoration:none;
        }
      }
      .list-cont{
        width: 100%;
        height:  auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .list-btn{
          display: block;
          width: 2.2rem;
          height: 3.1rem;
          flex: 0 0 auto;
          position: relative;
          // margin: 0 .1rem;
          .cover-cont{
            width: 2.2rem;
            height: 2.2rem;
            border-radius: .2rem;
            position: relative;
            overflow: hidden;
            img{
              display: block;
              width: 100%;
              height: 100%;
              background:#364856;
            }
            .play-count{
              width: 100%;
              height: .36rem;
              background: #99999902;
              position: absolute;
              top: 0;
              left: 0;
              .count-cont{
                position: absolute;
                top: 0 ;
                right: 0;
                height: .36rem;
                line-height: .36rem;
                color: #fff;
                font-size: .22rem;
                padding-right: .13rem;
                font-weight: bold;
                margin: .02rem 0;
                .icon{
                  display: inline-block;
                  vertical-align: middle;
                  width: .19rem;
                  height: .23rem;
                  background: url('../assets/img/play_02.png')no-repeat center;
                  background-size: 100% auto;
                }
              }
            }
          }
          .btn-name{
            width: 100%;
            height: .6rem;
            // padding: .rem 0 ;
            line-height: .3rem;
            font-size: .22rem;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-align: left;
            word-break: break-all;
          }
        }
      }
    }
}
</style>
