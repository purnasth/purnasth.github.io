import hotelHimalaya from "../assets/img/portfolio/hotel-himalaya.png";
import hotelDayatra from "../assets/img/portfolio/hotel-dayatra.png";
import mithilaYatriNiwas from "../assets/img/portfolio/mithila.png";
import hotelIchchha from "../assets/img/portfolio/hotel-ichchha.png";

// mockup
import hotelHimalayaMockup from "../assets/img/portfolio/hotel-himalaya/hotelhimalaya_mockup.png";
import hotelHDayatraMockup from "../assets/img/portfolio/hotel-dayatra/mockup.png";
import mithilaMockup from "../assets/img/portfolio/mithila/mockup.png";
import ichchhaMockup from "../assets/img/portfolio/hotel-ichchha/mockup.png";

// journey
import projectJourney from "../assets/img/portfolio/hotel-himalaya/project-journey.svg";

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
        // description:
        //   "Nestled within 6.58 acres of exquisitely landscaped grounds, Hotel Himalaya is conveniently located 8 km away from the Tribhuvan International Airport and only 2 km from the Kathmandu city center. ",
        description:
          "Hotel Himalaya is conveniently located 8 km away from the Tribhuwan International Airport and only 2 km from the Kathmandu city center. The stay at Hotel Himalaya means enjoying every moment.",
        landingImage: [
          {
            url: hotelHimalaya,
            alt: "Hotel Himalaya",
          },
        ],
        portfolioWebsite: {
          deployUrl: "https://hotelhimalaya.pages.dev",
          mockup: hotelHimalayaMockup,
          role: "Design & Development",
          year: "2024",
          credits: "Longtail e-Media",
          titleImage: "https://hotelhimalaya.pages.dev/images/hero/1.webp",
          backgroundImage:
            "https://hotelhimalaya.pages.dev/images/banner/about.webp",
          iframePages: [
            {
              url: "https://hotelhimalaya.pages.dev/",
              title: "Hotel Himalaya Website Home Page",
            },
            {
              url: "https://hotelhimalaya.pages.dev/stay",
              title: "Hotel Himalaya Website Stay Page",
            },
            {
              url: "https://hotelhimalaya.pages.dev/gallery",
              title: "Hotel Himalaya Website Gallery Page",
            },
          ],
        },
        caseStudy: {
          problemStatement:
            "The Hotel Himalaya website needed a complete redesign to improve user engagement and streamline the booking process.",
          solutionOverview:
            "The redesign focused on creating a clean, modern interface with an intuitive booking system and responsive design.",
          projectJourney: { projectJourney },
          journeyOverview:
            "This timeline illustrates the step-by-step process from identifying the initial problem to achieving the final goals.",
          projectOutcome:
            "The redesigned website increased website visitors by 80%, boosted user engagement by 30%, and led to a 20% increase in bookings within the first month.",
          toolsUsed: [
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
              title: "Figma",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
              title: "React",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              title: "TailwindCSS",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg",
              title: "Cloudflare",
            },
          ],
          feedback: {
            clientReview:
              "We partnered with Purna to revamp our website, and the results were exceptional. The redesign modernized our site and led to an 80% increase in visitors, a 30% boost in engagement, and a 20% rise in bookings within the first month. Purna & the teams' meticulous attention to detail and seamless execution exceeded our expectations.",
            author: "Hotel Himalaya",
          },
          galleryImages: [
            {
              src: "https://hotelhimalaya.pages.dev/images/hero/1.webp",
              alt: "Hotel Himalaya",
            },
            {
              src: "https://hotelhimalaya.pages.dev/images/stay/js2.webp",
              alt: "Hotel Himalaya",
            },
            {
              src: "https://hotelhimalaya.pages.dev/images/banner/dine.webp",
              alt: "Hotel Himalaya",
            },
            {
              src: "https://hotelhimalaya.pages.dev/images/banner/swimming.webp",
              alt: "Hotel Himalaya",
            },
          ],
        },
      },
      {
        id: "hotel-dayatra",
        title: "Hotel Dayatra",
        logoSrc: "https://www.purnashrestha.com.np/dayatra/assets/img/logo.svg",
        portfolioUrl: "hotel-dayatra",
        description:
          "Hotel Dayatra Courtyard is a luxury hotel of amazing service and perfect for unwinding. The hotel is located in the heart of the pokhara, just 5 minutes away from the airport.",
        landingImage: [
          {
            url: hotelDayatra,
            alt: "Hotel Da Yatra",
          },
        ],
        portfolioWebsite: {
          deployUrl: "https://www.purnashrestha.com.np/dayatra/",
          mockup: hotelHDayatraMockup,
          role: "Design & Development",
          year: "2024",
          credits: "Longtail e-Media",
          titleImage:
            "https://www.purnashrestha.com.np/dayatra/assets/img/slider/building.webp",
          backgroundImage:
            "https://www.purnashrestha.com.np/dayatra/assets/img/banner/about.webp",
          iframePages: [
            {
              url: "https://www.purnashrestha.com.np/dayatra/index.html",
              title: "Hotel Da Yatra Website Home Page",
            },
            {
              url: "https://www.purnashrestha.com.np/dayatra/accommodation.html",
              title: "Hotel Da Yatra Website Stay Page",
            },
            {
              url: "https://www.purnashrestha.com.np/dayatra/gallery.html",
              title: "Hotel Da Yatra Website Gallery Page",
            },
          ],
        },
        caseStudy: {
          problemStatement:
            "After a beautiful renovation, Hotel Da Yatra realized their outdated website no longer reflected their new image and needed a modern upgrade to enhance user engagement and support their growing customer base.",
          solutionOverview:
            "The redesign introduced a fresh, modern interface with an intuitive navigation system and a responsive design. It focused on highlighting the renovated hotel's offerings while optimizing the booking process for a seamless user experience.",
          projectJourney: { projectJourney },
          journeyOverview:
            "This timeline illustrates the step-by-step process from understanding the client's needs post-renovation to delivering a sleek, responsive, and modern website.",
          projectOutcome:
            "The revamped website attracted more users, with a 70% increase in website traffic, a 40% rise in user engagement, and a 25% boost in direct bookings in the first three months after launch.",
          toolsUsed: [
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
              title: "Figma",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
              title: "React",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              title: "TailwindCSS",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg",
              title: "Cloudflare",
            },
          ],
          feedback: {
            clientReview:
              "We reached out to Purna after our hotel renovation, knowing our old website no longer matched the fresh, modern look of our brand. The new website transformed not only the visual appeal but also how our customers engage with our services. Purna and his team brought our vision to life, resulting in a significant boost in traffic and bookings.",
            author: "Hotel Da Yatra",
          },
          galleryImages: [
            {
              src: "https://www.purnashrestha.com.np/dayatra/assets/img/slider/building.webp",
              alt: "Hotel Da Yatra",
            },
            {
              src: "https://www.purnashrestha.com.np/dayatra/assets/img/rooms/drs2.webp",
              alt: "Hotel Da Yatra",
            },
            {
              src: "https://www.purnashrestha.com.np/dayatra/assets/img/slider/welcome.webp",
              alt: "Hotel Da Yatra",
            },
            {
              src: "https://www.purnashrestha.com.np/dayatra/assets/img/daYatraEntry.webp",
              alt: "Hotel Da Yatra",
            },
          ],
        },
      },
      {
        id: "mithila-yatri-niwas",
        title: "Mithila Yatri Niwas",
        logoSrc: "https://www.mithilayatriniwas.com/assets/logo-BoMl5AAK.svg",
        portfolioUrl: "mithila-yatri-niwas",
        description:
          "Mithila Yatri Niwas - A luxurious retreat in Janakpur, just a 10-minute walk from the sacred Janaki Temple. Discover the allure of Janakpur at Mithila Yatri Niwas, where luxury meets legacy just steps away from the divine Janaki Temple and the peaceful Dashrath Lake. Nestled in the city’s vibrant heart, our hotel is a sanctuary of modern comforts, offering unparalleled access to sacred sites and cultural treasures.",
        landingImage: [
          {
            url: mithilaYatriNiwas,
            alt: "Swimming Pool 1",
          },
          {
            url: mithilaYatriNiwas,
            alt: "Swimming Pool 2",
          },
          {
            url: mithilaYatriNiwas,
            alt: "Swimming Pool 3",
          },
          {
            url: mithilaYatriNiwas,
            alt: "Swimming Pool 4",
          },
        ],
        portfolioWebsite: {
          deployUrl: "https://www.mithilayatriniwas.com",
          mockup: mithilaMockup,
          role: "Design & Development",
          year: "2024",
          credits: "Longtail e-Media",
          titleImage:
            "https://mithila-yatri.pages.dev/assets/mithila-BauZmQvB.webp",
          backgroundImage:
            "https://mithila-yatri.pages.dev/assets/room1-Dq4x4xNH.webp",
          iframePages: [
            {
              url: "https://mithila-yatri.pages.dev/",
              title: "Mithila Yatri Niwas Website Home Page",
            },
            {
              url: "https://mithila-yatri.pages.dev/accommodation",
              title: "Mithila Yatri Niwas Website Stay Page",
            },
            {
              url: "https://mithila-yatri.pages.dev/gallery",
              title: "Mithila Yatri Niwas Website Gallery Page",
            },
          ],
        },
      },
      {
        id: "hotel-ichchha",
        title: "Hotel Ichchha",
        logoSrc: "https://hotelichchha.com/assets/logo-DU4e6XTo.svg",
        portfolioUrl: "hotel-ichchha",
        description:
          "Nepal's First 5-Star Hotel in Simara Epitomizes luxury and sophistication, offering exceptional comfort, convenience, enjoyment, and services. Being a top hospitality provider, we guarantee our finest offerings due to its convenient location, it is a great option for business, leisure, and pilgrimage trips. The ideal option for a destination wedding that will enhance the memory of your special moments. Hotel Ichchha is perfectly suited for all your needs with a total of 100 rooms.",

        landingImage: [
          {
            url: hotelIchchha,
            alt: "Swimming Pool 1",
          },
          {
            url: hotelIchchha,
            alt: "Swimming Pool 2",
          },
          {
            url: hotelIchchha,
            alt: "Swimming Pool 3",
          },
          {
            url: hotelIchchha,
            alt: "Swimming Pool 4",
          },
        ],
        portfolioWebsite: {
          deployUrl: "https://hotel-ichchha.pages.dev",
          mockup: ichchhaMockup,
          role: "Design & Development",
          year: "2024",
          credits: "Longtail e-Media",
          titleImage:
            "https://hotel-ichchha.pages.dev/assets/dlx3-CMsmsEgx.webp",
          backgroundImage:
            "https://hotel-ichchha.pages.dev/assets/ichchha1-CmqxPbFg.webp",
          iframePages: [
            {
              url: "https://hotel-ichchha.pages.dev/",
              title: "Hotel Ichchha Website Home Page",
            },
            {
              url: "https://hotel-ichchha.pages.dev/accommodation/executive-suite",
              title: "Hotel Ichchha Website Stay Page",
            },
            {
              url: "https://hotel-ichchha.pages.dev/events",
              title: "Hotel Ichchha Website Gallery Page",
            },
          ],
        },
      },
    ],
  },
];
