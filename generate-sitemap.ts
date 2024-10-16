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
  { url: 'https://hotelhimalaya.purnashrestha.com.np/', changefreq: 'weekly', priority: 0.7 },
  { url: 'https://dayatra.purnashrestha.com.np/', changefreq: 'weekly', priority: 0.7 },
  { url: 'https://mithilayatriniwas.purnashrestha.com.np/', changefreq: 'weekly', priority: 0.7 },
  { url: 'https://hotelichchha.purnashrestha.com.np/', changefreq: 'weekly', priority: 0.7 }
];

// const hostname = 'https://www.purnashrestha.com.np';
// const stream = new SitemapStream({ hostname });
// const writeStream = createWriteStream('./public/sitemap.xml');

// writeStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
// writeStream.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

// links.forEach(link => stream.write(link));

// stream.end();

// stream.pipe(writeStream).on('finish', () => {
//   writeStream.write('</urlset>\n');
//   console.log('Sitemap successfully generated');
// });


const hostname = 'https://www.purnashrestha.com.np';
const stream = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');

// Remove manual XML declarations and urlset tags
links.forEach(link => stream.write(link));

stream.end();

stream.pipe(writeStream).on('finish', () => {
  console.log('Sitemap successfully generated');
});