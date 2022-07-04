<template>
  <div id="app">
    <speach-box :header-text="A.header" :footer-text="A.footer">
      <div>
        <p>
          {{A.message}}
        </p>
      </div>
    </speach-box>

    <speach-box class="sanders" :headerText="B.header" :footer-text="B.footer">
      <div>
        <p class="sanders-content">
          {{B.message}}
        </p>
      </div>
    </speach-box>

  </div>
</template>

<script>

import SpeachBox from "@/components/SpeachBox";
export default {
  name: 'App',
  components: {
    SpeachBox
  },
  data : function () {
    return {
      A : {
        header : "오바마 대통령 고별 연설문",
        footer : "2017-01-10 - 시카고",
        message : `저의 동료 국민 여러분, .....(지면관계상 생략)`
      },
      B : {
        header : "버니샌더스 경선 패배 연설문",
        footer : "2016-07-25 - 필라델피아 웰스파고",
        message : `감사합니다. 여러분 정말 감사합니다. ......(지면 관계상 생략)`
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
  .sanders { background-color: antiquewhite; }
  .sanders-content { font-family: 굴림; text-decoration: underline; }
</style>
