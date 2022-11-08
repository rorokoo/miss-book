export default {
  props: ['book'],
  template: `
        <section class="book-details">
            <h2>{{ book.title }}</h2>
            <h3>{{ book.listPrice.amount }}</h3>
        </section>
    `,
}
