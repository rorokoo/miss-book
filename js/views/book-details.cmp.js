import { bookService } from '../services/books.service.js'

export default {
  template: `
        <section v-if="book" class="book-details">
            <h1>{{ book.title }}</h1>
            <h2>Author:</h2>
            <p v-for="author in book.authors">{{ author }}</p>
            <img :src="imgUrl" alt="">
            <h3>{{ readLength }}</h3>
            <h3>Published:</h3>
            <p>{{book.publishedDate}}</p>  

           <router-link to="/">Back</router-link>
         
        </section>
        <h3 v-else>Loading...</h3>
    `,
  data() {
    return {
      book: null,
    }
  },
  created() {
    const id = this.$route.params.id
    bookService.get(id).then((book) => (this.book = book))
  },
  methods: {},
  computed: {
    imgUrl() {
      return this.book.thumbnail
    },
    readLength() {
      const { pageCount } = this.book
      if (pageCount > 500) return 'Long Reading'
      else if (pageCount < 200) return 'Decent Reading'
      return 'Light Reading'
    },
  },
}
