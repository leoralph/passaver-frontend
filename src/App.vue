<template>
    <router-view />
</template>

<script setup>
    import api from "./services/api";

    api.get("user").then(response => {
        console.log(response.data);
    });
</script>
