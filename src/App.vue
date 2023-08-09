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
    <div class="wrapper mt-5">
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
      booklist: [
        {
          favourite: true,
          name: "To Kill a Mockingbird",
          author: "Harper Lee",
          rating: 4.2,
          info: "To Kill a Mockingbird is a novel that addresses racial injustice and moral issues in the Southern United States of the 1930s.",
          likes: 50,
          genre: "artistic",
          id: 1,
          url: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
          new: true,
        },
        {
          favourite: true,
          name: "1984",
          author: "George Orwell",
          rating: 4.6,
          info: "1984 is a dystopian novel about a totalitarian regime that controls every aspect of its citizens' lives, written by George Orwell.",
          likes: 50,
          genre: "artistic",
          id: 2,
          url: "https://target.scene7.com/is/image/Target/GUEST_f0bc34a6-e4a2-4b71-b133-44fb400fed5b?wid=488&hei=488&fmt=pjpeg",
          new: false,
        },
        {
          favourite: false,
          name: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          rating: 3.9,
          info: "The Great Gatsby is a novel set in the Jazz Age of the 1920s, exploring themes of wealth, love, and the corrupted American Dream.",
          likes: 50,
          genre: "artistic",
          id: 3,
          url: "https://images.penguinrandomhouse.com/cover/9780593201060",
          new: true,
        },
        {
          favourite: true,
          name: "Pride and Prejudice",
          author: "Jane Austen",
          rating: 4.2,
          info: "Pride and Prejudice follows the journey of Elizabeth Bennet as she navigates societal norms, love, and class in Regency England.",
          likes: 50,
          genre: "artistic",
          id: 4,
          url: "https://m.media-amazon.com/images/I/51EEPG81WVL._AC_UF894,1000_QL80_.jpg",
          new: true,
        },
        {
          favourite: true,
          name: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          rating: 4.4,
          info: "The Lord of the Rings is an epic high-fantasy trilogy that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
          likes: 50,
          genre: "world",
          id: 5,
          url: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
          new: false,
        },
        {
          favourite: true,
          name: "To the Lighthouse",
          author: "Virginia Woolf",
          rating: 3.7,
          info: "To the Lighthouse is a modernist novel that explores the inner lives of the Ramsay family and the passage of time.",
          likes: 50,
          genre: "world",
          id: 6,
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/ToTheLighthouse.jpg/640px-ToTheLighthouse.jpg",
          new: false,
        },
        {
          favourite: false,
          name: "Moby-Dick",
          author: "Herman Melville",
          rating: 3.4,
          info: "Moby-Dick is an epic tale of Captain Ahab's obsession with hunting a great white whale, exploring themes of fate, nature, and vengeance.",
          likes: 50,
          genre: "popular",
          id: 7,
          url: "https://mpd-biblio-covers.imgix.net/9781466804128.jpg",
          new: true,
        },
        {
          favourite: false,
          name: "The Catcher in the Rye",
          author: "J.D. Salinger",
          rating: 3.8,
          info: "The Catcher in the Rye follows the rebellious teenager Holden Caulfield in his journey of self-discovery and coming-of-age.",
          likes: 50,
          genre: "popular",
          id: 8,
          url: "https://miro.medium.com/v2/resize:fit:1358/1*uT4rXgLcHJb3W4kESH9bRA.jpeg",
          new: false,
        },
        {
          favourite: false,
          name: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          rating: 4.0,
          info: "One Hundred Years of Solitude is a landmark novel in magical realism, depicting generations of the Buendía family in the town of Macondo.",
          likes: 50,
          genre: "artistic",
          id: 9,
          url: "https://m.media-amazon.com/images/I/71IWwBoDNsL._AC_UF894,1000_QL80_.jpg",
          new: false,
        },
        {
          favourite: false,
          name: "Brave New World",
          author: "Aldous Huxley",
          rating: 4.0,
          info: "Brave New World is a dystopian novel set in a futuristic society where technological advancements and conditioning shape humanity.",
          likes: 50,
          genre: "world",
          id: 10,
          url: "https://dwcp78yw3i6ob.cloudfront.net/wp-content/uploads/2016/12/12111228/BraveNewWorld1946HiRes_Reduced.jpg ",
          new: false,
        },
      ],
      term: "",
      filter: "all",
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
