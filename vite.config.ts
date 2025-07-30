import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

// Itt vizsgáljuk, hogy buildelünk vagy develünk
const isBuild = process.env.BUILD === 'true'

export default defineConfig({
    root: isBuild ? '.' : 'test', // dev alatt a teszt mappa legyen root, buildnél a projekt gyökér
    publicDir: false,
    plugins: [tsconfigPaths()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'PuffinDrac',
            fileName: () => 'index.js',
            formats: ['umd']
        },
        outDir: resolve(__dirname, 'bin'), // mindig a projekt gyökerébe megy
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: ['@fm2/puffin'],
            output: {
                globals: {
                    '@fm2/puffin': 'Puffin'
                }
            }
        }
    },
    server: {
        open: '/index.html'
    }
})
