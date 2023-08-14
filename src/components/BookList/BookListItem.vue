<template>
  <div class="col-3 mt-3">
    <div class="card" style="width: 18rem">
      <div
        class="card-image"
        :style="{ backgroundImage: `url(${book.url})` }"
      ></div>
      <div class="card-body">
        <h5 class="card-title fs-6 fw-bold" style="height: 55px;">{{ book.name }}</h5>
        <p class="card-text">{{ book.info }}</p>
        <p class="my-2">
          <i>{{ book.author }}</i>
        </p>
        <div v-if="(book.rating * 10) % 10 >= 5" class="text-center my-3">
          <template v-for="i in Math.ceil(book.rating)" :key="i">
            <i class="fas fa-star text-warning"></i>
          </template>
        </div>
        <div v-else class="text-center my-3">
          <template v-for="i in Math.floor(book.rating)" :key="i">
            <i class="fas fa-star text-warning"></i>
          </template>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
          <a href="/src/components/BookInfo/BookInfo.vue" class="btn btn-primary">Go read</a>
          <!-- <router-link to="../BookInfo/BookInfo.vue">
            <primaryButton>Go read</primaryButton>
          </router-link> -->
          </div>
          <div class="flex">
            <button @click="$emit('onToggle', {id:book.id, prop:'likes' })" class=" px-2 btn btn-like">
              <template v-if="isLiked">
                <i class="fs-5 fa-solid fa-thumbs-up text-primary"></i>
              </template>
              <template v-else>
                <i class="fs-5 fa-regular fa-thumbs-up text-primary"></i>
              </template>
            </button>
            <span class="text-primary">{{ book.likes + likeCount }}</span>
            <button @click="$emit('onToggle', {id:book.id, prop:'favourite'})" type="submit" class=" px-2 btn btn-mark">
              <template v-if="book.favourite">
                <i class="fs-5 fa-solid fa-bookmark text-warning"></i>
              </template>
              <template v-else>
                <i class="fs-5 fa-regular fa-bookmark text-warning"></i>
              </template>
            </button>
            <button @click="$emit('onRemove', book.id)" type="trash" class="btn px-2 btn-like"><i class="fs-5 fas fa-trash text-danger"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLiked: false,
      isMarked: false,
      likeCount: 0,
    };
  },
};
</script>

<style>
.card-image {
  height: 180px;
  width: 100%;
  border-radius: inherit;
  background-size: cover;
  background-position: center;
  background-attachment: local;
}
.card-text {
  height: 70px;
  overflow: hidden;
}
.btn-like,
.btn-mark {
  border: none;
}
</style>
