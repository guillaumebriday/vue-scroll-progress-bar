import base from './rollup.config.base'
import pkg from '../package.json'

const config = Object.assign({}, base, {
  output: {
    file: pkg.main,
    format: 'iife',
    ...base.output
  }
})

export default config
