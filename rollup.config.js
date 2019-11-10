import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  {
    input: 'src/main.js',
    output: {
      file: pkg.module,
      format: 'es',
      exports: 'named'
    },
    plugins: [
      resolve(),
      commonjs(),
      vue(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: pkg.main,
      format: 'iife',
      exports: 'named',
      name: 'VueScrollProgressBar'
    },
    plugins: [
      resolve(),
      commonjs(),
      vue({
        css: true,
        compileTemplate: true
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: pkg.unpkg,
      format: 'iife',
      exports: 'named',
      name: 'VueScrollProgressBar'
    },
    plugins: [
      resolve(),
      commonjs(),
      vue({
        css: true,
        compileTemplate: true
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  }
]
