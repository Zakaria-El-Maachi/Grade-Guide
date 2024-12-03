<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from '~/stores/auth';
  
  const authStore = useAuthStore();
  const username = ref('');
  const password = ref('');
  
  const login = async () => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
    const data = await response.json();
  
    if (response.ok) {
      authStore.setToken(data.token);
    } else {
      alert(data.message);
    }
  };
  </script>
  