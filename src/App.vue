<template>
  <div id="app">
    <FirstPage/>
    <!-- <SecondPage/> -->
  </div>
</template>

<script>
import './styles/global.css';
import './styles/index.css'
import  FirstPage  from './components/FirstPage';
// import SecondPage from './components/SecondPage'

export default {
  name: 'App',
  components: {
    FirstPage,
  },
}
</script>

<style>

</style>
