import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm'],
    target: 'es2022',
    dts: true,
    entry: ['./src/index.ts'],
});
