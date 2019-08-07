<template>
    <div>
        <p>fetch data</p>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'nuxt-property-decorator';
    import Component from 'vue-class-component'
    import {moduleNames} from '~/store/mutationType';
    import {Action} from 'vuex-class';


    @Component
    export default class index extends Vue {
        @Action('getAsyncPlaceHolder', {namespace: moduleNames.jsonPlaceHolder}) getAsyncPlaceHolder: any;

        mounted() {
            this.getAsyncPlaceHolder(1);
        }

    }
</script>

