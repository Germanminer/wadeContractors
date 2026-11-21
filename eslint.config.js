const nextPlugin = require('@next/eslint-plugin-next');

module.exports = [
  {
    ignores: ['node_modules/', '.next/', 'next-env.d.ts', 'out/'],
  },
];
