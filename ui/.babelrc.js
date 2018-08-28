// this is a temporary workaround until Babel 7.0 lands
// which automatically reads from .browserlistrc

const fs = require('fs')
const browserslist = require('browserslist')

const browsers = browserslist()

const config = {
    presets: [
        ['env', {
            targets: { browsers },
            modules: false
        }],
        'react',
        'stage-2'
    ],
    env: {
        production: {
            presets: ['react-optimize']
        },
        node: {
            presets: [['env']],
            plugins: [
                ["dynamic-import-node"]
            ]
        },
        test: {
            presets: [['env']],
            plugins: [
                ["dynamic-import-node"]
            ]
        }
    }
}

fs.writeFileSync('.babelrc', JSON.stringify(config, null, '  '))
