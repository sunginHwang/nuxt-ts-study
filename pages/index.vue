<template>
  <h1 class="title">
    {{ name }}
  </h1>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'
  import Logo from '~/components/Logo.vue'

  @Component({
    components: {
      Logo
    }
  })
  export default class IndexPage extends Vue {
    name: string = 'hello-nuxt-ts-decorator'
  }
</script>
