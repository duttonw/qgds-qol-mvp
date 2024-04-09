import { defineConfig } from "vite";
import { resolve } from 'path'

export default defineConfig ({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: "../dist",
        emptyOutDir: "true"
    },
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        hot: true
    }
})