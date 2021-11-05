<template>
  <div id="hello" class="hello">
    <h1>{{ msg }}</h1>
    <div class="wrapper" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <b-collapse id="collapse-4" v-model="visible" class="mt-2">
        <b-card>{{ post.body }}</b-card>
      </b-collapse>
      <b-button
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible = !visible"
        >Hide and show
      </b-button>

      <div class="btn-wrapper">
        <h4>{{ "Jack Sparrow" }}</h4>
        <b-button variant="outline-primary">Delete post</b-button>
      </div>
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
  margin: 3% 0 5% 0;
}
.hello h1 {
  margin: 10% 2%;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

.wrapper {
  max-width: 40vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 2%;
  margin: 2% 0;
}

.btn-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 5% 0;
  padding: 0 10%;
}
</style>
