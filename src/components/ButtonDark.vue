<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button class="bg-transparent border-none text-orange text-xl"  @click="toggleDark()">
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />

  </button>
</template>
<style scoped>

</style>