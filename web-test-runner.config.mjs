import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  plugins: [
    esbuildPlugin({
      ts: true, // Transpile TypeScript
      target: 'es2020', // Modern JavaScript
    }),
  ],
  nodeResolve: true,
};
