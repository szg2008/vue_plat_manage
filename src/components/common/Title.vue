<template>
    <div class="title">
        <h3>{{title}}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    props:["title"]
}
</script>

<style lang="scss">
    .title{
        height: 80px;
    }
    hr{
        margin-top: 6px;
        border:1px solid #d9d9d9;
    }
</style>
