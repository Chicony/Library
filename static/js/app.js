Vue.component('app-nav', {
    props: ['nav'],
    template: '<li class="nav-item"><a class="nav-link" :href="nav.url">{{ nav.name }}</a></li>'
})

new Vue ({
    el: '#app',
    data: {
        nav: [
            { id: 0, name: 'Главная', url: '/'},
            { id: 1, name: 'Список книг', url: '/list'}
        ],
        books: []
    },
    created: function () {
        const vm = this;
        axios.get('/api/books/')
        .then(function(response){
            vm.books = response.data
        })
    }
})