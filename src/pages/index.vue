<template>
    <div class="title">
        <h1>Compara Venta Sup</h1>
    </div>
    
</template>
<script lang="ts" setup>
const supabase = useSupabaseClient()

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
  navigateTo('/login')
}

</script>