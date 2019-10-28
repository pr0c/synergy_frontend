import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Book from '../components/Book.vue'
import Books from '../components/Books.vue'
import CreateBook from '../components/CreateBook'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/books',
            component: Books
        },
        {
            path: '/book/:id',
            component: Book,
            name: 'book'
        },
        {
            path: '/book',
            component: CreateBook
        }
    ]
})