<template>
  <div class="hello">
    <div class="block">
      <div class="title-container">
        <img src="../assets/icon.png">
        <span>{{ $t("i18nView.title1") }}</span>
      </div>
      <div class="content">{{ $t("i18nView.content1") }}</div>
    </div>
    <div class="block">
      <div class="title-container">
        <img src="../assets/icon.png">
        <span>{{ $t("i18nView.title2") }}</span>
      </div>
      <div class="content">{{ $t("i18nView.content2") }}</div>
    </div>
    <div class="block">
      <div class="title-container">
        <img src="../assets/icon.png">
        <span>{{ $t("i18nView.title3") }}</span>
      </div>
      <div class="content index-content">
        <div class="index">1)</div>
        <div class="content-text">{{ $t("i18nView.content3_1") }}</div>
      </div>
      <div class="content index-content">
        <div class="index">2)</div>
        <div class="content-text">{{ $t("i18nView.content3_2") }}</div>
      </div>
      <div class="content index-content">
        <div class="index">3)</div>
        <div class="content-text">{{ $t("i18nView.content3_3") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.block{
  margin: 0 16px;
  .title-container{
    height: 21px;
    margin-top: 16px;
    margin-bottom: 8px;
    position: relative;
    >img{
      width: 16px;
      transform: translateY(2.5px);
    }
    >span{
      font-size: 15px;
      font-family: PingFang SC, PingFang SC-Semibold;
      font-weight: 600;
      line-height: 21px;
      color: #3a3b3d;
      padding-left: 8px;
    }
  }
  .content {
    margin-left: 24px;
    font-size: 13px;
    font-family: PingFang SC, PingFang SC-Medium;
    font-weight: 500;
    color: #6f7174;
    line-height: 19.5px;
  }
  .index-content{
    margin-bottom: 8px;
    .index{
      position: absolute;
    }
    .content-text{
      margin-left: 20px;
    }
  }
}
.block:last-child{
  margin-bottom: 30px;
}
</style>
