<template>
 <div>
   <base-fab-button :content="`this is content`"/>
 </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator';
  import BaseFabButton from '~/components/base-fab-button';


  @Component({
    components:{
      BaseFabButton
    }
  })
  export default class IndexPage extends Vue {
    name: string = 'hello-nuxt-ts-decorator'
  }
</script>

