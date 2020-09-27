<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://static6.depositphotos.com/1003229/609/v/450/depositphotos_6096843-stock-illustration-circuit-board-vector-background.jpg"
      title="First"
      previewText="First post"
      :is-admin="isAdmin"
    />

    <PostPreview
      id="2"
      thumbnail="https://static6.depositphotos.com/1003229/609/v/450/depositphotos_6096843-stock-illustration-circuit-board-vector-background.jpg"
      title="Second"
      previewText="Second post"
      :is-admin="isAdmin"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  PostPreview,

  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
