<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const { login } = useAuth()
const signInWithOtp = async () => {
  /*  const {
     error,
     data: { user },
   } = await supabase.auth.signInWithPassword({
     email: email.value,
     password: password.value,
   });
   console.log(user);
   if (user) navigateTo("/");
   if (error) alert(error.message); */
  login(email.value, password.value)
}

</script>
<template>
  <div class="title">
    <h1>Login</h1>
  </div>
  <form class="mt-3 flex flex-col items-center" @submit.prevent="signInWithOtp">
    <div mb-3>
      <label flex for="email">Email</label>
      <input v-model="email" type="email" />
    </div>
    <div mb-3>
      <label flex for="password">Password</label>
      <input type="password" v-model="password" />
    </div>

    <div mt-3>
      <button bg-blue-4 border-1 px-6 py-2 text-white hover:bg-blue-6 @click="signInWithOtp">
        Login
      </button>
    </div>
  </form>
</template>
