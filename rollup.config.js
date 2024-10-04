import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import eslint from '@rollup/plugin-eslint';
import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.exports['.'].require,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.exports['.']['import'],
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      eslint({
        throwOnError: false,
        include: ['src/**/*.ts', 'src/**/*.tsx'],
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      terser({ keep_fnames: true }),
      postcss({
        modules: true,
      }),
      image(),
    ],
    external: ['react', 'react-dom', 'process', 'viem', 'wagmi', 'ethers'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/types.d.ts', format: 'es' }],
    plugins: [dts.default()],
  },
];
