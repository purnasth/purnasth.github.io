import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio/hotel-himalaya', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio/hotel-dayatra', changefreq: 'weekly', priority: 0.9 },
  {
    url: '/portfolio/mithila-yatri-niwas',
    changefreq: 'weekly',
    priority: 0.9,
  },
  { url: '/portfolio/hotel-ichchha', changefreq: 'weekly', priority: 0.9 },
  {
    url: 'https://hotelhimalaya.purnashrestha.com.np/',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: 'https://dayatra.purnashrestha.com.np/',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: 'https://mithilayatriniwas.purnashrestha.com.np/',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: 'https://hotelichchha.purnashrestha.com.np/',
    changefreq: 'weekly',
    priority: 0.9,
  },
];

const hostname = 'https://www.purnashrestha.com.np';
const stream = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');

links.forEach((link) => stream.write(link));

stream.end();

stream.pipe(writeStream).on('finish', () => {
  console.log('Sitemap successfully generated');
});
