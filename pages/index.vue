<template>
    <div>
        <p>fetch data</p>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'nuxt-property-decorator';
    import Component from 'vue-class-component'
    import {Action} from 'vuex-class';


    const namespace: string = 'jsonPlaceHolder';

    @Component
    export default class index extends Vue {
        @Action('getAsyncPlaceHolder', {namespace}) getAsyncPlaceHolder: any;

        mounted() {
            console.log('mounted');
            this.getAsyncPlaceHolder(1);
        }

    }
</script>

