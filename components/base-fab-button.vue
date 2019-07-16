<template>
    <div class="wrapper">
        <div class="header">
            testArea
        </div>
        <div class="content">
            <p class="text"> {{content}}</p>
        </div>
        <div class="footer">
            <button>버튼입니다.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'nuxt-property-decorator';


    export default class BaseFabButton extends Vue {
        content: string = 'content'
    }
</script>

<style>
    .wrapper {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #fff;
        padding: 0 30px;
    }

    .header {
        margin: 30px 0;
        height: 52px;
        width: 100%;
        background-color: #41b883;
        color: #fff;
    }

    .content {
        width: 100%;
        border: 1px solid #41b883;
        flex: auto;
        margin-bottom: 30px;

    }

    .text {
        width: 100%;
        height: 100%;
    }

    .footer {
        height: 52px;
        width: 100%;
        color: #fff;
        margin-bottom: 30px;
        background-color: orangered;
    }
</style>
