
<script lang="ts" setup>

const user =  useSupabaseUser()
console.log(user
)
</script>  
<template>
  <div v-if="user">
    <ul>
      <li>
        {{ user.id }}
      </li>
      <li>
        {{user.created_at}}
      </li>
      <li>
        {{user.email}}
      </li>
    </ul>
    
  </div>
</template>