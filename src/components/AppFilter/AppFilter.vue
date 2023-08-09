<template>
  <div class="d-flex">
    <secondaryButton
      v-for="btn in filterButtons"
      :key="btn.name"
      @click="filterHandler(btn.name)"
      :class="[filterName == btn.name ? 'btn-secondary text-white' : '']"
      class="px-2 py-1 mx-2"
    >
      {{ btn.title }}
    </secondaryButton>
    <div class="mx-2">
      <select
        id="select"
        v-model="selectGenre"
        class="form-select"
        aria-label="Default select example"
        @change="filterHandler(selectGenre)"
      >
        <option selected>Open this select menu</option>
        <option value="artistic">Artistic</option>
        <option value="world">World literature</option>
        <option value="popular">Scientific - popular</option>
      </select>
    </div>
  </div>
</template>
<script>
import secondaryButton from "../../globalComponents/secondaryButton.vue";
export default {
  components: { secondaryButton },
  props: {
    updateFilterHandler: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filter: "all",
      selectGenre: "",
      filterButtons: [
        {
          title: "All",
          name: "all",
        },
        {
          title: "New",
          name: "new",
        },
        {
          title: "Favourite",
          name: "favourite",
        },
      ],
      //   genreoptions:['artistic', 'world', 'popular']
    };
  },
  methods: {
    filterHandler(filter) {
      this.filter = filter;
      this.updateFilterHandler(this.filter);
      //   console.log(this.filter);
    },
  },
};
</script>
<style>
.btn-filter {
  border: solid 1px gray;
}
.btn-filter:hover {
  border: solid 1px gray;
  background-color: gray;
  color: #fff;
}
</style>
