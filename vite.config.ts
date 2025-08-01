import { defineConfig } from 'vite'
import { resolve } from 'path'

// Itt vizsgáljuk, hogy buildelünk vagy develünk
const isBuild = process.env.BUILD === 'true'

export default defineConfig({
    root: isBuild ? '.' : 'test', // dev alatt a teszt mappa legyen root, buildnél a projekt gyökér
    publicDir: false,
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'PuffinDrac',
            fileName: () => 'index.js',
            formats: ['es']
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
        },
        target: 'esnext', // vagy 'es2015' ha régebbi böngészőket is támogatni kell
        minify: true
    },
    server: {
        open: '/index.html'
    }
})
