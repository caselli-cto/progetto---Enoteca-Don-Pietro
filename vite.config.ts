import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carica le variabili d'ambiente in base al mode (development/production)
  // process.env sarà popolato con le variabili che iniziano con VITE_
  const env = loadEnv(mode, path.resolve(), '');

  return {
    plugins: [react()],
    
    // Base path: fondamentale per Nginx se il sito è nella root
    base: '/',
    
    resolve: {
      alias: {
        // Permette di usare '@' per importare dalla cartella src (es. '@/components/...')
        '@': path.resolve(__dirname, './'),
      },
    },

    server: {
      // Configurazione per lo sviluppo locale
      port: 3000,
      open: true, // Apre automaticamente il browser
      host: true, // Espone il server sulla rete locale
    },

    preview: {
      // Configurazione per 'vite preview' (simulazione produzione)
      port: 8080,
      open: true,
    },

    build: {
      // Cartella di output standard per deployment
      outDir: 'dist',
      // Pulisce la cartella dist prima di ogni build
      emptyOutDir: true,
      // Genera sourcemaps per il debug (disabilitare se non necessario in prod)
      sourcemap: false,
      
      // Ottimizzazioni per il caricamento
      minify: 'esbuild',
      
      rollupOptions: {
        output: {
          // Chunk splitting: separa le librerie (vendor) dal codice app
          // Questo aiuta il caching del browser e evita file JS giganti
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
          },
          // Naming pattern per i file generati (cache busting)
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },

    // Definizione costanti globali
    define: {
      // Assicura che la key sia accessibile nel codice client
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
  };
});