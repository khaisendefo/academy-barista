import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: './src',
  server: {
    port: 3000,
    open: true,
  },
  publicDir: './src/assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        comingSoon: './src/coming-soon.html',
        courses: './src/courses.html',
        baristaBase: './src/courses/barista-base.html',
        baristaAdvanced: './src/courses/barista-advanced.html',
        baristaProfessional: './src/courses/barista-professional.html',
        masterClassBaristaTakeAwau: './src/master-class/barista-v-take-away.html',
        masterClassYoungBarista: './src/master-class/young-barista.html',
        masterClassLatterArt: './src/master-class/latte-art.html',
        barnoeDeloVstryakhniIpoday: './src/barnoe-delo/vstryakhni-i-poday.html',
        barnoeDeloKoktelMetodomBild: './src/barnoe-delo/koktel-metodom-bild.html',
        barnoeDeloKoktelMetodomCtir: './src/barnoe-delo/metod-ctir.html',
        coursesUpravlyayushchiyKofeyni: './src/courses/upravlyayushchiy-kofeyni.html',
        masterClassDomashnyayaKofeynya: './src/master-class/domashnyaya-kofeynya.html',
        contact: './src/contact.html',
        baristaCourses: './src/courses/barista-courses.html',
        masterClass: './src/courses/master-class.html',
        barnoeDelo: './src/courses/barnoe-delo.html',
        thankYou: './src/thank-you.html'
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin({}),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
});


