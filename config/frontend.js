require('dotenv').config();

module.exports = {
    env: {

    },

    head: {
        titleTemplate: '%s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },

    render: {
        etag: { strong: true },
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    },

    //loading: '',

    css: [],

    router: {
        middleware: []
    },

    build: {
        extractCSS: true,

        vendor: []
    },

    generate: {
        routes: []
    },

    modules: [],

    plugins: [],

    
};

