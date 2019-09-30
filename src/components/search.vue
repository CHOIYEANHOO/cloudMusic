<template>
  <div id="search">
    <div class="seach-cont">
        <div class="input-cont">
            <span class="seach-icon"></span>
            <input type="text" placeholder="{{placeholder}}">
        </div>
        <div class="btn-cont">
            <div class="cancel-btn">取消</div>
            <a class="playing"></a>
        </div>
    </div>
    <div class="searching-history">
        <p class="text">搜索历史</p>  
        <div class="history">
            <p>jjj</p>
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
#index{
  width: 100%;
  height: auto;
  .search-cont{

  }
}
</style>
