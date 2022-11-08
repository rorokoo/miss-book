export default {
  template: `
        <section class="books-filter">
            <label>Filter By Keywords:
              <input 
                @input="filter"
                v-model="filterBy.title" 
                type="text" 
                placeholder="Search">
              </label>
            <label> From Price: 
              <input
              @input="filter"
              v-model="filterBy.fromPrice" 
              type="number">
            </label>
        </section>
    `,
  data() {
    return {
      filterBy: { title: '', fromPrice: null },
    }
  },
  methods: {
    filter() {
      this.$emit('filtered', this.filterBy)
    },
  },
}
