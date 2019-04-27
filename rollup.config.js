import pkg from './package.json'
import typescript2 from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    plugins: [resolve({ browser: true }), typescript2()],
    output: { file: pkg.module, format: 'esm' }
  },
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    plugins: [resolve({ browser: true }), typescript2({ target: 'es5' })],
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'ReactMetaElements',
      globals: { react: 'React', 'react-dom': 'ReactDOM' }
    }
  }
]
