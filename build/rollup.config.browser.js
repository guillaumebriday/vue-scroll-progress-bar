import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'
import pkg from '../package.json'

const config = Object.assign({}, base, {
  output: {
    file: pkg.unpkg,
    format: 'iife',
    ...base.output
  }
})

config.plugins.push(terser())

export default config
