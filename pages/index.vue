<template>
    <h1>salaaam</h1>
    <button @click="logout">deconnecta</button>
</template>

<script setup>
const store = useAuthStore();
    function logout(){
        store.clearAuth();
    }
</script>