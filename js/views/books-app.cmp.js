import { bookService } from '../services/books.service.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'

export default {
  template: `
            <book-filter @filtered="filter"></book-filter>
            <book-list :books="booksToShow" ></book-list>
      
             <router-link to="/book/edit">Add a book...</router-link>
            `,
  data() {
    return {
      books: null,
      filterBy: null,
    }
  },
  created() {
    bookService.query().then((books) => {
      this.books = books
    })
  },
  methods: {
    filter(filterBy) {
      console.log(filterBy)
      this.filterBy = filterBy
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books
      const regex = new RegExp(this.filterBy.title, 'i')
      return this.books.filter(
        ({ title, listPrice: { amount } }) =>
          regex.test(title) && amount > this.filterBy.fromPrice
      )
    },
  },
  components: {
    bookFilter,
    bookList,
  },
}
