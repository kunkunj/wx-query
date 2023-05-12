import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
//压缩工具
const { terser } = require('rollup-plugin-terser');
const packageJson = require('./package.json');
//清除工具
import clear from 'rollup-plugin-clear';
export default [{
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      sourcemap: false,
      name: packageJson.name,
    },
    {
      file: 'package/sdk/index.js',
      format: 'es',
      sourcemap: false,
      name: packageJson.name,
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    terser(),
    clear({
      targets: ['dist'], // 项目打包编译生成的目录
      watch: true, // 实时监听文件变化
    }),
  ],
}];
