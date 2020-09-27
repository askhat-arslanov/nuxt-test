<template>
  <div>
    <router-link to="/users">&larr;back</router-link>
    <div>User with ID {{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  name: "UserId",

  layout: "users",

  validate(data) {
    const { id } = data.params;
    return /^\d+$/.test(id);
  }
};
</script>
