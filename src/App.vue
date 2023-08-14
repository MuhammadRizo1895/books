<template>
  <div class="container mt-5">
    <div class="info-wrapper my-3">
      <AppInfo
        :allBookCount="booklist.length"
        :newBookCount="booklist.filter((c) => c.new).length"
      />
    </div>
    <div class="wrapper">
      <SearchPanel :updateTermHandler="updateTermHandler" />
      <AppFilter
        :updateFilterHandler="updateFilterHandler"
        :filterName="filter"
      />
    </div>
    <div class="wrapper mt-5" v-if="!booklist.length && !isLoading">
      <error-msg>Kitoblar yo'q</error-msg>
    </div>
    <div class="wrapper mt-5 d-flex justify-content-center align-items-center" v-else-if="isLoading">
      <Loader />
    </div>
    <div v-else class="wrapper mt-5">
      <BookList
        :booklist="onFilterHandler(onSearchHandler(booklist, term), filter)"
        @onToggle="onToggleHandler"
        @onRemove="onRemoveHandler"
      />
    </div>
    <div class="wrapper my-3">
      <AddBook @createBook="createBook" />
    </div>
  </div>
</template>

<script>
import AppInfo from "./components/Appinfo/AppInfo.vue";
import SearchPanel from "./components/search-info/SearchPanel.vue";
import AppFilter from "./components/AppFilter/AppFilter.vue";
import BookList from "./components/BookList/BookList.vue";
import AddBook from "./components/BookAdd/AddBook.vue";
// import BookListes from "../database/BookListes.js";
import axios from "axios";
import Loader from "./globalComponents/Loader.vue";
export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    BookList,
    AddBook,
  },
  data() {
    return {
      booklist: [],
      term: "",
      filter: "all",
      combineData: [],
      apiEndpoints: [
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        "https://jsonplaceholder.typicode.com/users",
      ],
      isLoading: false,
    };
  },
  methods: {
    createBook(item) {
      this.booklist.push(item);
    },
    onToggleHandler({ id, prop }) {
      this.booklist = this.booklist.map((item) => {
        if (item.id == id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
    },
    onRemoveHandler(id) {
      this.booklist = this.booklist.filter((c) => c.id !== id);
    },
    onSearchHandler(arr, term) {
      if (term.length == 0) {
        return arr;
      }
      return arr.filter(
        (c) =>
          c.name.toLowerCase().indexOf(term) > -1 ||
          c.author.toLowerCase().indexOf(term) > -1
      );
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "new":
          return arr.filter((c) => c.new);
        case "favourite":
          return arr.filter((c) => c.favourite);
        case "artistic":
          return arr.filter((c) => c.genre === "artistic");
        case "world":
          return arr.filter((c) => c.genre === "world");
        case "popular":
          return arr.filter((c) => c.genre === "popular");
        default:
          return arr;
      }
    },
    updateTermHandler(term) {
      this.term = term;
    },
    updateFilterHandler(filter) {
      this.filter = filter;
    },
    async fetchData(url) {
      try {
        const { data } = await axios.get(url);
        return data;
      } catch (error) {
        alert("Error", error.message);
      }
    },
    async pupulateArrayWithAPIsdData() {
      try {
        this.isLoading = true;
        setTimeout(async () => {
          const apiResponses = await Promise.all(
            this.apiEndpoints.map(this.fetchData)
          );
          apiResponses.forEach((response) => {
            response.forEach((obj) => {
              const existingObj = this.combineData.find(
                (item) => item.id === obj.id
              );
              if (existingObj) {
                Object.assign(existingObj, obj);
              } else {
                this.combineData.push(obj);
              }
            });
          });

          const newArr = this.combineData.map((item) => ({
            favourite: false,
            name: item.title,
            author: item.name,
            rating: 3,
            info: item.body,
            likes: item.userId * 5,
            genre: "",
            id: item.id,
            url: "https://picsum.photos/200/300?random=" + String(item.id),
            new: false,
          }));
          this.booklist = newArr;
          this.isLoading = false;
        }, 3000);
      } catch (error) {
        alert(error.message);
      }
    },
  },
  mounted() {
    // BookListes.getBookses().then((data) => (this.booklist = data));    bu kod ham ishlaydi!
    this.pupulateArrayWithAPIsdData();
  },
};
</script>
<style>
.wrapper {
  padding: 12px;
  box-shadow: 11px 37px 56px 4px rgba(34, 60, 80, 0.2);
  background-color: rgb(255, 251, 242);
  border-radius: 10px;
}
</style>
