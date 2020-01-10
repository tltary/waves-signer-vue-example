<template>
  <div>
    <Login />
    <Invoke />
    <Data />
    <Transfer />
  </div>
</template>

<script>

import Login from './components/Login.vue';
import Invoke from './components/Invoke.vue';
import Data from './components/Data.vue';
import Transfer from './components/Transfer.vue';

export default {
  name: 'app',
  components: {
    Login,
    Invoke,
    Data,
    Transfer
  },
}
</script>

<style lang="scss">
  body {
    padding: 50px;
    margin: 0px;
    text-align: center;
  }
  .test {
    &__row {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
    &__button {
      padding: 10px 30px;
      font-size: 14px;
      border: 1px #3e3e3e solid;
      outline: none;
      color: #3e3e3e;
      width: 250px;
      transition: color .3s ease-in-out, background-color .3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #3e3e3e;
        color: #fff;
      }
    }
  }
</style>
