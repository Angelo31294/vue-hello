"use strict"

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao VueJS!',
            Image: 'https://kinsta.com/it/wp-content/uploads/sites/2/2020/10/tipos-de-arquivo-de-imagem.png'
        }
    }
}).mount('#app');