// file used to generate sitemap.xml
// 'npm run sitemap' to generate sitemap
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const sitemap = new SitemapStream({ hostname: 'https://www.swiftdrones.net' });

const links = [
  { url: '/#services', changefreq: 'daily', priority: 1.0 },
  { url: '/#about', changefreq: 'daily', priority: 0.8 },
  { url: '/faq', changefreq: 'weekly', priority: 0.7 },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const writeStream = createWriteStream(path.join(__dirname, '../public/sitemap.xml'));
    sitemap.pipe(writeStream);

    links.forEach(link => sitemap.write(link));
    sitemap.end();

    await streamToPromise(sitemap).then(sm => sm.toString());

    writeStream.on('finish', () => {
      console.log('Sitemap written successfully.');
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
})();
