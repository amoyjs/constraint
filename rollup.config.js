import minify from 'rollup-plugin-babel-minify'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'

const isProd = process.env.NODE_ENV === 'production'
const { moduleName, name } = require('./package.json')
const fileName = 'index'
const getFilePath = (type = '') => `dist/${fileName}${type == '' ? '' : '.'}${type}.js`
const output = options => ({
    exports: 'named',
    name: moduleName,
    sourcemap: true,
    ...options,
    globals: {
        'eventemitter3': 'EventEmitter',
        'pixi.js': 'PIXI',
    },
})

const configure = {
    input: 'src/index.ts',
    output: [output({
        file: getFilePath(),
        format: 'umd',
    }), output({
        file: getFilePath('es'),
        format: 'es',
    })],
    plugins: [
        typescript(),
        commonjs(),
        resolve(),
    ],
    external: ['eventemitter3', 'pixi.js'],
}

if (isProd) {
    configure.output = configure.output.map(output => {
        const format = output.format == 'umd' ? '' : `.${output.format}`
        output.file = `dist/${fileName}${format}.min.js`
        return output
    })
    configure.plugins.push(minify())
}

module.exports = configure
