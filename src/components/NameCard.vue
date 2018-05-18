<template>
  <article>
    <header>
      평가자
      <slot></slot>
    </header>
    <template v-if="approved">
      <input placeholder="이름" v-model="user.name" readonly/>
      <input placeholder="소속부서" v-model="user.department" readonly/>
    </template>
    <template v-else>
      <input placeholder="이름" v-model="user.name"/>
      <input placeholder="소속부서" v-model="user.department"/>
    </template>
  </article>
</template>

<script>
  export default {
    name: "name-card",
    props: ['user', 'approved']
  }
</script>

<style scoped>
  article {
    width: 300px;
    height: 52px;
    margin: auto;
    border-bottom: 1px solid #e8e8ec;
    padding-top: 12px;
  }

  article > header {
    font-size: 12px;
    font-weight: bold;
    color: #888888;
  }

  input {
    border: 0;
    font-size: 16px;
    width: 144px;
    height: 36px;
    padding: 0;
  }

  input:nth-of-type(1) {
    margin-right: 7px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #b2b2b2;
    font-size: 16px;
    font-weight: 400;

  }

</style>
