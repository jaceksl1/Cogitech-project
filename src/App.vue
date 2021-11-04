<template>
  <div id="hello" class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p class="card-text">{{ post.body }}</p>
      <div>
        <button v-b-toggle:my-collapse>
          <span class="when-open">Close</span
          ><span class="when-closed">Open</span> My Collapse
        </button>
        <b-collapse id="my-collapse"> {{ post.body }} </b-collapse>
      </div>
      <h4>{{ "Jack Sparrow" }}</h4>
      <button>Delete post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Cogitech - task for job interview",
      visible: true,
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>
<style>
body {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.hello {
  max-width: 50vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3%;
}
.hello h1 {
  margin: 10% 2%;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
