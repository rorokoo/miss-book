const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter
import booksApp from './views/books-app.cmp.js'
import bookDetails from './views/book-details.cmp.js'
import bookEdit from './views/book-edit.cmp.js'
import bookAdd from './views/book-add.cmp.js'

const options = {
  template: `
        <router-view />
    `,
}

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: booksApp },
    { path: '/book/:id', component: bookDetails },
    { path: '/book/edit/:id', component: bookEdit },
    { path: '/book-add', component: bookAdd },
  ],
}

const router = createRouter(routerOptions)

const app = createApp(options)
app.use(router)
app.mount('#app')
