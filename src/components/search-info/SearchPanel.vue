<template>
  <div class="row">
    <div class="col">
      <input
        type="text"
        class="form-control my-3 mx-1"
        placeholder="Search book"
        :value="term"
        @input="changeHandler"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    updateTermHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      term: "",
    };
  },
  methods: {
    changeHandler(e) {
      this.term = e.target.value;
      this.updateTermHandler(this.term);
    },
  },
};
</script>

<style></style>
