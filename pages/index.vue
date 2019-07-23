<template>
    <div>
        <p>fetch data</p>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'nuxt-property-decorator';
    import {Action} from 'vuex-class';


    const namespace: string = 'jsonPlaceHolder';


    export default class IndexPage extends Vue {
        @Action('getJsonPlaceHolder', {namespace}) getJsonPlaceHolder: any;

        mounted() {
            console.log('mounted');
            this.getJsonPlaceHolder(1);
        }

    }
</script>

