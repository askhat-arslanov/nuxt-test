<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },

  data() {
    return {
      loadedPost: {
        author: "I, me and myself",
        title: "Nothing new",
        thumbnailLink: "https://img5.goodfon.ru/wallpaper/nbig/d/da/synth-retrowave-synthwave-fon-new-retro-wave-sintveiv-ret-26.jpg",
        content: "Blah-blah-blah"
      }
    }
  },

  layout: "admin"
};
</script>

<style></style>
