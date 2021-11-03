<template>
  <h1 id="app">Zadanie rekrutacyjne - Cogitech</h1>
  <div>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
