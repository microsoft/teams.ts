#! /usr/bin/env node

import path from 'path';
import url from 'url';

export { generateTypes } from './types.js';
export { generateEndpoints } from './endpoints.js';
export { walk, fixEsmImports } from './fix-esm-import-paths.js';
export * from './utils.js';

export async function main(argv: string[] = []) {
    const args = argv.length > 0 ? argv : process.argv.slice(2);
    const command = args[0];

    if (!command || command === '--help' || command === '-h') {
        console.log(`
Graph Tools CLI

Usage: graph-tools <command> [options]

Commands:
  generate-types <spec> <output> <version>     Generate TypeScript types from OpenAPI spec
  generate-endpoints <spec> <output> <version> Generate API endpoints from OpenAPI spec
  fix-esm-imports [directory]                  Fix ESM import paths in TypeScript files

Options:
  --help, -h                                   Show this help message

Examples:
  graph-tools generate-types ./openapi.yaml ./src v1.0
  graph-tools generate-endpoints ./openapi.yaml ./src v1.0
  graph-tools fix-esm-imports ./src
        `);
        return;
    }

    switch (command) {
        case 'generate-types': {
            const [spec, output, version] = args.slice(1);
            if (!spec || !output || !version) {
                console.error('generate-types requires: <spec> <output> <version>');
                process.exit(1);
            }
            if (version !== 'v1.0' && version !== 'beta') {
                console.error('version must be "v1.0" or "beta"');
                process.exit(1);
            }
            const { generateTypes } = await import('./types.js');
            await generateTypes(version as 'v1.0' | 'beta', spec, output);
            break;
        }
        case 'generate-endpoints': {
            const [spec, output, version] = args.slice(1);
            if (!spec || !output || !version) {
                console.error('generate-endpoints requires: <spec> <output> <version>');
                process.exit(1);
            }
            if (version !== 'v1.0' && version !== 'beta') {
                console.error('version must be "v1.0" or "beta"');
                process.exit(1);
            }
            
            const templatesPath = path.dirname(url.fileURLToPath(import.meta.url));
            const { generateEndpoints } = await import('./endpoints.js');
            await generateEndpoints(version as 'v1.0' | 'beta', spec, output, templatesPath);
            break;
        }
        case 'fix-esm-imports': {
            const directory = args[1] || './dist';
            const { fixEsmImports } = await import('./fix-esm-import-paths.js');
            await fixEsmImports(directory);
            break;
        }
        default:
            console.error(`Unknown command: ${command}`);
            console.error('Run "graph-tools --help" for usage information');
            process.exit(1);
    }
}

// CLI execution - run main function when used as binary
const isRunningAsBinary = process.argv[1] && process.argv[1].endsWith('index.js');
if (isRunningAsBinary) {
    main().catch((error) => {
        console.error('Error:', error);
        process.exit(1);
    });
}
