
<style>
  * {  box-sizing: border-box;  }
  .header {
    background-color: purple; padding: 30px 30px;
    color: yellow; text-align: center;
  }
  .header:after {
    content: ""; display: table; clear: both;
  }
</style>

<template>
  <div id="todolistapp">
    <div id="header" class="header">
      <h2>Todo List App</h2>
      <input-todo></input-todo>
    </div>
    <list-component></list-component>
  </div>
</template>

<script>
import InputTodo from "@/components/inputTodo";
import ListComponent from "@/components/ListComponent";

export default {
  name: "todo-list",
  components: {InputTodo, ListComponent}
}
</script>
