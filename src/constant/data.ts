import hotelHimalaya from "../assets/img/portfolio/hotel-himalaya.png";

export const portfolioData = [
  {
    id: 1,
    title: "Portfolio",
    heading: "A collection of my best projects",
    description: "Lorem20",
    portfolioDetails: [
      {
        id: "hotel-himalaya",
        title: "Hotel Himalaya",
        logoSrc: "https://hotelhimalaya.pages.dev/assets/logo-s4LMycLK.svg",
        portfolioUrl: "hotel-himalaya",
        description:
          "Nestled within 6.58 acres of exquisitely landscaped grounds, Hotel Himalaya is conveniently located 8 km away from the Tribhuvan International Airport and only 2 km from the Kathmandu city center. ",
        landingImage: [
          {
            url: hotelHimalaya,
            alt: "Swimming Pool 1",
            colSpan: 2,
          },
          {
            url: hotelHimalaya,
            alt: "Swimming Pool 2",
            colSpan: 3,
          },
          {
            url: hotelHimalaya,
            alt: "Swimming Pool 3",
            colSpan: 3,
          },
          {
            url: hotelHimalaya,
            alt: "Swimming Pool 4",
            colSpan: 2,
          },
        ],
        technologies: [
          "Figma",
          "React.js",
          "TailwindCSS",
          "API",
          "React Router",
          "TypeScript",
          "HSTS",
          "Google Fonts API",
          "Cloudflare",
          "Lenis",
        ],
        technologiesColor: "#00daff42",
      },
    ],
  },
];
