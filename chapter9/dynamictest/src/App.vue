<template>
  <div>

    <div class="header">
      <h1 class="headerText">(주) OpenSG</h1>

      <nav>
        <ul>
          <li>
            <a href="#" @click="changeMenu('home')">Home</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('about')">About</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('contact')">Contact</a>
          </li>
        </ul>
      </nav>

    </div>

    <div class="container">
      <keep-alive include="about-about, home-home">
        <component :is="currentView"></component>
      </keep-alive>
    </div>

  </div>
</template>

<script>

import home from "@/components/Home";
import about from "@/components/About";
import contact from "@/components/Contact";

export default {
  name: 'App',
  components: {
    home, about, contact
  },
  data () {
    return { currentView : 'home'}
  },
  methods : {
    changeMenu(view) {
      this.currentView = view
    }
  }
}
</script>

<style scoped>
  .header {
    background-color: aqua;
    padding: 10px 0px 0px 0px;
  }
  .headerText {
    padding: 0px 20px 0px 20px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: purple;
  }
  li {
    float: left;
  }
  li a {
    display: block;
    color: yellow;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover {
    background-color: aqua;
    color: black;
  }

</style>
