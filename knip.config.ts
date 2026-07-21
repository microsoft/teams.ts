import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  workspaces: {
    '.': {
      ignoreDependencies: ['@turbo/gen'],
    },
    'packages/devtools': {
      // These are used but knip can't trace them through the Vite/React build pipeline
      ignoreDependencies: [
        'mdast-util-from-markdown',
        'mdast-util-gfm',
        'micromark-extension-gfm',
        'react-markdown',
        'remark-breaks',
        'react-refresh',
        'remark-gfm',
      ],
    },
  },
  // Only check for unused dependencies — unlisted/unresolved are too noisy in a monorepo
  include: ['dependencies', 'devDependencies'],
};

export default config;
