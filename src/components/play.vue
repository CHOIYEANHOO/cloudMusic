<template>
  <div id="play">
    <div class="header-cont">
        <div class="back"></div>
        <div class="song-msg">
            <p class="song-name">afasdfasfas</p>
            <p class="singer-name">adsfasdf</p>
        </div>
    </div>
    <div class="middle-cont">
        <div class="gan"></div>
        <div class="changpian">
            <img src="" alt="" class="song-img">
        </div>
    </div>
    <div class="controll-cont">
        <div class="process-cont">
            <p class="now">00:00</p>
            <div class="line">
                <div class="played-line"></div>
                <div class="circle"></div>
            </div>
            <p class="total-time">03:40</p>
        </div>
        <div class="controll">
            <div class="prev"></div>
            <div class="pause"></div>
            <div class="next"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search Page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#play{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #71707350;
  .header-cont{
    width: 100%;
    height: .88rem;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    .back{
      width: 0.23rem;
      height: 0.88rem;
      margin-left: 0.32rem;
      background: url('../assets/img/back.png')no-repeat center;
      background-size: 100% auto;
      position: relative;

    }
    .song-msg{
      width: 100%;
      height: .88rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      left: 0;
      top: 0;
      .song-name{
        width: auto;
        text-align: center;
        margin: 0 auto;
        font-size: .36rem;
        color: #fff;
      }
      .singer-name{
        width: auto;
        text-align: center;
        margin: 0 auto;
        font-size: .2rem;
        color: #fff;
      }
    }
  }
  .middle-cont{
      width: 7.5rem;
      height: 8.5rem;
      // position: absolute;
      // top: 50%;
      // margin-top: -5.75rem;
      .gan{
        width: 3.26rem;
        height: 2.10rem;
        position: absolute;
        left: 50%;
        margin-left: -0.32rem;
        background: url('../assets/img/play_gun.png')no-repeat center;
        background-size: 100% auto;
      }
      .changpian{
        width: 5.72rem;
        height:5.72rem;
        margin: 0 auto;
        top: 1.7rem;
        position: relative;
        background: url('../assets/img/disk.png')no-repeat center;
        background-size: 100% auto;
        border-radius: 50%;
        border: 0.24rem solid #00000030;
        img{
          display: block;
          position: absolute;
          width: 3.82rem;
          height: 3.82rem;
          top: 50%;
          left: 50%;
          margin: -1.91rem 0 0 -1.91rem;
          background: #536672;
          border-radius: 50%;
        }
      }
    }
    .controll-cont {
      width: 7.25rem;
      // height: .44rem;
      margin:  0 auto;
      position: relative;
          padding-bottom: .5rem;
      .process-cont{
        width: 100%;
        height: .44rem;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items:  center;
        .now,.total-time{
          width: auto;
          font-size: .18rem;
          line-height: .44rem;
          height: .44rem;
          color: #8c99a1;
        }
        .line{
          width: 5.6rem;
          height: .06rem;
          background: #536672;
          border-radius: .03rem;
          // overflow: hidden;
          position: relative;
          .played-line{
            width: auto;
            height: .06rem;
            background: #8c99a1;
            position: absolute;
            left: 0;
            top: 0;
          }
          .circle{
            width: .16rem;
            height: .44rem;
            background: url('../assets/img/cur_circle.png')no-repeat center;
            background-size: 100% auto;
            position: absolute;
            top: 50%;
            margin-top: -0.22rem;
          }
          .touch-bar-circle{
            width: .30rem;
            background: url('../assets/img/cur_circle.png')no-repeat center;
            background-size: 100% auto;
          }
        }
      }
      .controll{
        width: 4.56rem;
        height: 1.25rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .prev{
          width: .34rem;
          height: 1.2rem;
          background: url('../assets/img/prev_song.png')no-repeat center;
          background-size: 100% auto;
        }
        .next{
          width: .34rem;
          height: 1.2rem;
          background: url('../assets/img/next_song.png')no-repeat center;
          background-size: 100% auto;
        }
        .pause{
          width: 1.22rem;
          height: 1.22rem;
          background: url('../assets/img/play_btn01.png')no-repeat center;
          background-size: 100% auto;

        }
        .play{
            background: url('../assets/img/play_btn01.png')no-repeat center;
            background-size: 100% auto;
        }
      }
    }
}
</style>
