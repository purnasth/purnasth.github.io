// Sitemap.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import globe from '../assets/img/svg/globe.gif';
import { Link } from 'react-router-dom';
import SEO from '../utils/SEO';

const Sitemap: React.FC = () => {
  const [urls, setUrls] = useState<any[]>([]);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await axios.get('/sitemap.xml'); // Adjust the path as necessary
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, 'text/xml');
        const urlElements = xmlDoc.getElementsByTagName('url');

        const urlData = Array.from(urlElements).map((urlElement: Element) => {
          return {
            loc: urlElement.getElementsByTagName('loc')[0]?.textContent,
            changefreq:
              urlElement.getElementsByTagName('changefreq')[0]?.textContent,
            priority:
              urlElement.getElementsByTagName('priority')[0]?.textContent,
          };
        });

        setUrls(urlData);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    };

    fetchSitemap();
  }, []);

  return (
    <>
      <SEO
        title="Sitemap - Purna Shrestha"
        description="Navigate through Purna Shrestha's portfolio website with ease. Explore sections like About, Services, Portfolio, and Contact to discover web design and development projects."
        keywords="sitemap, Purna Shrestha, web design, portfolio, navigation"
      />
      <main className="relative flex h-screen flex-col items-center justify-center gap-2 p-0 text-light">
        <img
          src={globe}
          alt="Globe"
          className="absolute inset-0 -z-10 h-screen w-full object-cover"
        />
        <div className="overlay -z-10 bg-dark/50" />
        {/* <h1 className="mb-4 text-3xl font-bold">Sitemap</h1> */}
        <table className="container w-full border-collapse border border-light/20 p-8 backdrop-blur">
          <thead>
            <tr className="border-b border-light/20 bg-light/20">
              <th className="px-4 py-2 text-left">Page</th>
              <th className="px-4 py-2 text-left">URL</th>
              <th className="px-4 py-2 text-left">Change Frequency</th>
              <th className="px-4 py-2 text-left">Priority</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url, index) => (
              <tr
                key={index}
                className="transition-300 border-b border-light/20 text-light/80 hover:bg-light/20"
              >
                <td className="px-4 py-2">{url.loc.split('/').pop()}</td>
                <td className="px-4 py-2">
                  <Link
                    to={url.loc}
                    className="transition-300 font-medium hover:text-light hover:underline"
                    aria-label={url.loc}
                  >
                    {url.loc}
                  </Link>
                </td>
                <td className="px-4 py-2">{url.changefreq}</td>
                <td className="px-4 py-2">{url.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Sitemap;
