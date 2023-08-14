<template>
  <div class="row">
    <error-msg></error-msg>
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
import ErrorMsg from '../../globalComponents/errorMsg.vue';
import BookListItem from "./BookListItem.vue";
export default {
  components: {
    BookListItem,
    ErrorMsg,
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
