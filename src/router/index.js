import Vue from 'vue'
import Router from 'vue-router'
import Books from '../components/Books'
import CreateBook from '../components/CreateBook'
import CreateAuthor from '../components/CreateAuthor'
import BookDetails from '../components/BookDetails'
import Authors from '../components/Authors'
import EditBook from '../components/EditBook'
import EditAuthor from '../components/EditAuthor'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/books',
            component: Books,
            name: 'books'
        },
        {
            path: '/book/:id',
            component: BookDetails,
            name: 'book'
        },
        {
            path: '/editbook/:id',
            component: EditBook,
            name: 'editbook'
        },
        {
            path: '/book',
            component: CreateBook
        },
        {
            path: '/author',
            component: CreateAuthor
        },
        {
            path: '/authors',
            component: Authors,
            name: 'authors'
        },
        {
            path: '/editauthor/:id',
            component: EditAuthor,
            name: 'editauthor'
        }
    ]
})