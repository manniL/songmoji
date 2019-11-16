<template>
  <div class="min-h-screen flex flex-col font-sans">
    <nuxt class="flex-grow container mx-auto text-2xl" />
    <TeamOverview class="text-2xl pb-4" />
  </div>
</template>

<script>
import TeamOverview from '~/components/TeamOverview'

export default {
  components: {
    TeamOverview
  }
}
</script>
