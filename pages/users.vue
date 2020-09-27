<template>
  <div>
    <div>
      <router-link to="/users/123">user 123</router-link>
    </div>

    <div>
      <router-link to="/users/456">user 456</router-link>
    </div>

    <div>
      <input type="text" v-model="userId" />
      <button @click="onLoadUser">Go</button>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: "Users",

  layout: 'users',

  data() {
    return {
      userId: ""
    };
  },

  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    }
  }
};
</script>

<style></style>
