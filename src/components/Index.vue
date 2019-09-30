<template>
  <div id="index">
    <div class="search-cont">
      <div class="input-cont">
        <div class="search">
          <span class="seach-icon"></span>
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
      <a href="javascript:;" class="recommend"></a>
      <a href="javascript:;" class="song-list"></a>
      <a href="javascript:;" class="board"></a>
    </div>
    <div class="recommend-list">
      <div class="recommend-header">
        <div class="text">推荐歌单</div>
        <a href="javascript:;" class="list-page">歌单广场</a>
      </div>
      <div class="list-cont">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index Page',
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
    width:7rem;
    height: .72rem;
    border-radius: .36rem;
    background: #f7f7f7;
    margin-left: 1.2rem;
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
    display: block;
    position: relative;
    float: left;
    width: .7rem;
    height: .45rem;
    margin: .13rem 0 0 .5rem;
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
      width: .93rem;
      height: .93rem;
    }
    .recommend{
      background: url('../assets/img/today_btn.png')no-repeat center;
      background-size: 100% auto;
    }
    .song-list{
      background: url('../assets/img/song_list.png')no-repeat center;
      background-size: 100% auto;
    }
    .board{
      background: url('../assets/img/broad_btn.png')no-repeat center;
      background-size: 100% auto;
    }
    .recommend-list{
      width: 95%;
      height: auto;
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
          width: 1.53rem;
          height: .53rem;
          border: .01rem solid #888;
          border-radius: .27rem;
          line-height: .53rem;
          text-align: center;
          margin-top: .15rem;
        }
      }
      .list-cont{
        width: 100%;
        height:  auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

  }
}
</style>
