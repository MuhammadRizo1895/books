<template>
  <div class="">
    <h2 class="text-uppercase text-center">Hello book reader</h2>
    <p class="text-end">Kitoblar soni: {{ allBookCount }}</p>
    <p class="text-end">Yangi kitoblar: {{ newBookCount }}</p>
  </div>
</template>

<script>
export default {
  props: {
    allBookCount: {
      type: Number,
      required: true,
    },
    newBookCount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
