import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
export default {
  input: './src',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true, // 保留模块结构
      sourcemap: false, // 是否输出sourcemap
      plugins: [terser()],
      exports: 'named', // 指定导出模式（自动、默认、命名、无）
      preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
    },
    {
      dir: 'lib',
      format: 'esm',
      entryFileNames: '[name].mjs',
      preserveModules: true, // 保留模块结构
      sourcemap: false, // 是否输出sourcemap
      plugins: [terser()],
      name: 'index',
      exports: 'named', // 指定导出模式（自动、默认、命名、无）
      preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
    },
  ],
  external: [/node_modules/],
  plugins: [
    json(),
    del({ targets: ['lib'] }),
    resolve({ extensions: ['.js', '.ts'] }),
    commonjs(),
    typescript({ module: 'ESNext', sourceMap: false }),
  ],
};
