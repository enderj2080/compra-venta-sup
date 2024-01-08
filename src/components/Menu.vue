<template>
  <div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
      <nuxt-link v-if="user" to="/dashboard">Dashbord</nuxt-link>
      <nuxt-link v-if="user" to="/clientes">Clientes</nuxt-link>
      <nuxt-link v-if="user" to="/product">Productos</nuxt-link>
      <button
        class="bg-gray-700 border-1 text-gray-200 px-4 py-1 hover:bg-gray-600"
        v-if="user"
        ml-3
        @click="signOut"
      >
        signOut
      </button>
      <button-dark />
    </nav>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
  margin-left: 1rem;
}
</style>
<script lang="ts" setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  navigateTo("/login");
};
</script>
