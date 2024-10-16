import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/assets/cv-OJ9zbfqs.pdf', changefreq: 'monthly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/portfolio/hotel-himalaya', changefreq: 'weekly', priority: 0.7 },
  { url: '/portfolio/hotel-dayatra', changefreq: 'weekly', priority: 0.7 },
  { url: '/portfolio/mithila-yatri-niwas', changefreq: 'weekly', priority: 0.7 },
  { url: '/portfolio/hotel-ichchha', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },

  // Subdomain links
  { url: 'https://hotelhimalaya.purnashrestha.com.np/', changefreq: 'weekly', priority: 0.7 },
  { url: 'https://dayatra.purnashrestha.com.np/', changefreq: 'weekly', priority: 0.7 },
  { url: 'https://mithilayatriniwas.purnashrestha.com.np/', changefreq: 'weekly', priority: 0.7 },
  { url: 'https://hotelichchha.purnashrestha.com.np/', changefreq: 'weekly', priority: 0.7 },
];

const hostname = 'https://www.purnashrestha.com.np'; // Your domain
const stream = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(stream).then(() => {
  console.log('Sitemap successfully generated');
});

links.forEach(link => stream.write(link));
stream.end();
stream.pipe(writeStream);
