<template>
  <div>
    <p class="fs-4 text-uppercase">Add book</p>
    <form action="" class="mt-3" @submit.prevent>
      <div class="row">
        <!-- input book name -->
        <div class="col-4 my-3">
          <div class="input-wrap">
            <label for="name">Book name</label>
            <!-- <input
              type="text"
              id="name"
              placeholder="Book name"
              class="form-control"
              :value="name"
              @input="name = $event.target.value"
            /> -->
            <InputAdd
              type="text"
              id="name"
              placeholder="Book name"
              :value="name"
              @input="name = $event.target.value"
            ></InputAdd>
          </div>
        </div>
        <!-- input author -->
        <div class="col-4 my-3">
          <div class="input-wrap">
            <label for="author">The author of the book</label>
            <input
              type="text"
              id="author"
              placeholder="The author of the book"
              class="form-control"
              :value="author"
              @input="author = $event.target.value"
            />
          </div>
        </div>
        <!-- input book rating -->
        <div class="col-4 my-3">
          <div class="input-wrap">
            <label for="rating">Book rating</label>
            <input
              type="number"
              name="rating"
              id="rating"
              class="form-control"
              placeholder="Rating"
              min="1"
              max="5"
              :value="rating"
              @input="rating = $event.target.value"
            />
          </div>
        </div>
        <!-- input book info -->
        <div class="col-12 my-3">
          <div class="form-floating">
            <label for="bookinfo">Book Info</label>
            <textarea
              class="form-control"
              id="bookinfo"
              :value="info"
              style="height: 100px"
              @input="info = $event.target.value"
            ></textarea>
          </div>
        </div>
        <!-- input book image -->
        <div class="col-6 my-3">
          <div class="">
            <!-- <label for="url">Book image</label> -->
            <input
              class="form-control"
              type="text"
              id="url"
              placeholder="Image URL"
              :value="url"
              @input="url = $event.target.value"
            />
          </div>
        </div>
        <!-- book add -->
        <div class="col-4 my-3 d-flex align-items-center">
          <div class="input-wrap d-flex align-items-center" style="width: 100%">
            <!-- book status -->
            <div class="form-check" style="width: 50%">
              <label class="form-check-label" for="flexCheckIndeterminate">
                New Book
              </label>
              <input
                style="width: 20px; height: 20px"
                class="form-check-input me-3"
                type="checkbox"
                v-model="isChecked"
                id="flexCheckIndeterminate"
              />
            </div>
            <!-- book type -->
            <div style="width: 50%">
              <!-- <label for="select">Select genre</label> -->
              <select
                id="select"
                v-model="selectGenre"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="artistic">Artistic</option>
                <option value="2">World literature</option>
                <option value="3">Scientific - popular</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-2 my-3 d-flex align-items-center">
          <primaryButton type="submit" style="width: 100%" @click="addBook"
            >Add
          </primaryButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputAdd from "../../globalComponents/InputAdd.vue";
export default {
  components: { InputAdd },
  data() {
    return {
      name: "",
      author: "",
      rating: null,
      info: "",
      likes: null,
      url: "",
      isChecked: false,
      selectGenre: "",
    };
  },
  methods: {
    addBook() {
      if (!this.name && !this.author && !this.info) return;
      const newBook = {
        name: this.name,
        author: this.author,
        rating: this.rating,
        info: this.info,
        url: this.url,
        new: this.isChecked,
        likes: 0,
        genre: this.selectGenre,
        id: Date.now(),
      };
      this.$emit("createBook", newBook);
      (this.name = ""),
        (this.author = ""),
        (this.rating = ""),
        (this.info = ""),
        (this.url = ""),
        (this.isChecked = false),
        (this.selectGenre = "");
    },
  },
};
</script>

<style>
.input-wrap {
  width: 90%;
}
</style>
