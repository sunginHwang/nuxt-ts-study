<template>
    <div>
        <p>store fetch data</p>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'nuxt-property-decorator';
    import Component from 'vue-class-component'
    import {Action} from 'vuex-class';


    const namespace: string = 'jsonPlaceHolder';

    @Component
    export default class store extends Vue {
        @Action('getJsonPlaceHolder', {namespace}) getJsonPlaceHolder: any;

        mounted() {
            this.getJsonPlaceHolder(1);
        }

    }
</script>

