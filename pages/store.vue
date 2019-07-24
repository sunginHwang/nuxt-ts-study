<template>
    <div>
        <p>store fetch data</p>
        <p>{{placeholder.id}}</p>
        <p>{{placeholder.completed}}</p>
        <p>{{placeholder.title}}</p>
        <p>{{placeholder.userId}}</p>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'nuxt-property-decorator';
    import Component from 'vue-class-component'
    import {Action, State} from 'vuex-class';


    const namespace: string = 'jsonPlaceHolder';

    @Component
    export default class store extends Vue {
        @Action('getJsonPlaceHolder', {namespace}) getJsonPlaceHolder;
        @State('placeholder',{namespace}) placeholder;

        mounted() {
            this.getJsonPlaceHolder(1);
        }

    }
</script>

