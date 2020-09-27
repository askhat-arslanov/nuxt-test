<template>
  <div class="admin-new-post-page">
    <AdminPostForm />
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },

  layout: "admin"
};
</script>
