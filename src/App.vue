<template>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    @import '../static/css/main.css';
</style>
