<template>
  <div class="row">
    <BookListItem
      v-for="book in booklist"
      :key="book.id"
      :book="book"
      @onToggle="$emit('onToggle', $event)"
      @onRemove="$emit('onRemove', $event)"
    />
  </div>
</template>

<script>
import BookListItem from "./BookListItem.vue";
export default {
  components: {
    BookListItem,
  },
  props: {
    booklist: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
