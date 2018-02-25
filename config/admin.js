require('dotenv').config();

const nodeExternals = require('webpack-node-externals')
//const resolve = (dir) => require('path').join(__dirname, dir)

const path = require('path')

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

    buildDir: '_admin',
    build: {
        babel: {
            plugins: [
                ["transform-imports", {
                    "vuetify": {
                        "transform": "vuetify/es5/components/${member}",
                        "preventFullImport": true
                    }
                }]
            ]
        },

        extractCSS: true,

        extend(config, ctx) {
            if (ctx.isServer) {
                // config.resolve.modules = [
                //     path.resolve(__dirname, '../node_modules'),
                //     path.resolve(__dirname, 'node_modules')
                // ]
                // config.resolveLoader.modules = [
                //     path.resolve(__dirname, '../node_modules'),
                //     path.resolve(__dirname, 'node_modules')
                // ]

                config.externals = [
                    // nodeExternals({
                    //     whitelist: [/^vuetify/]
                    // })
                ]
            }
        }
    },

    generate: {
        routes: []
    },

    modules: [
        'mana-ui-toolkit'
    ],

    plugins: [
        
    ],


};

