<template>
  <div id="play">
    <div class="header-cont">
        <div class="back"></div>
        <div class="song-msg">
            <p class="song-name"></p>
            <p class="singer-name"></p>
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
            <p class="now"></p>
            <div class="line">
                <div class="played-line"></div>
                <div class="circle"></div>
            </div>
            <p class="total-time"></p>
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
    .song-msg{
      width: auto;
      height: .88rem;
      display: flex;
      flex-direction: column;
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
      position: absolute;
      top: 50%;
      margin-top: -5.75rem;
      .gan{
        width: 2.14rem;
        height: 3.32rem;
        position: absolute;
        left: 50%;
        margin-left: -0.32rem;
      }
      .changpian{
        width: 6.2rem;
        height:6.2rem;
        margin: 0 auto;
        top: 1.7rem;
        position: relative;
        img{
          display: block;
          position: absolute;
          width: 3.8rem;
          height: 3.8rem;
          top: 50%;
          left: 50%;
          margin: -1.9rem 0 0 -1.9rem;
        }
      }
    }
    .controll-cont {
      width: 7.25rem;
      // height: .44rem;
      margin:  0 auto;
      position: relative;
      .process-cont{
        width: 100%;
        height: .44rem;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
          overflow: hidden;
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
            background: url()no-repeat center;
            background-size: 100% auto;
            position: absolute;
          }
          .touch-bar-circle{
            background: url()no-repeat center;
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
          width: .4rem;
          height: .5rem;
          background: url()no-repeat center;
          background-size: 100% auto;
        }
        .next{
          width: .4rem;
          height: .5rem;
          background: url()no-repeat center;
          background-size: 100% auto;
        }
        .pause{
          width: 1.22rem;
          height: 1.22rem;
          background: url()no-repeat center;
          background-size: 100% auto;

        }
        .play{
            background: url()no-repeat center;
            background-size: 100% auto;
        }
      }
    }
}
</style>
