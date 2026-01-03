// mockup
import hotelHimalayaMockup from '../assets/img/portfolio/hotel-himalaya/mockup.avif';
import hotelDayatraMockup from '../assets/img/portfolio/hotel-dayatra/mockup.avif';
import mithilaMockup from '../assets/img/portfolio/mithila/mockup.avif';
import ichchhaMockup from '../assets/img/portfolio/hotel-ichchha/mockup.avif';
import baberMahalMockup from '../assets/img/portfolio/baber-mahal-vilas/mockup.avif';
import himalayanFlavoursMockup from '../assets/img/portfolio/himalayan-flavours/himalayanflavours-mockup.webp';
import satprayasNepalMockup from '../assets/img/portfolio/satprayas-nepal/satprayas-nepal-mockup.webp';

// ui presentation
import hotelHimalayaUI from '../assets/img/portfolio/hotel-himalaya/himalaya-ui.webp';
import mithilaUI from '../assets/img/portfolio/mithila/mithila-ui.avif';
import hotelIchchhaUI from '../assets/img/portfolio/hotel-ichchha/hotel-ichchha-ui.avif';
import babermahalUI from '../assets/img/portfolio/baber-mahal-vilas/babermahalUI.webp';
import himalayanFlavoursUI from '../assets/img/portfolio/himalayan-flavours/himalayan-flavours-ui.webp';
import satprayasNepalUI from '../assets/img/portfolio/satprayas-nepal/satprayasnepal-ui.webp';

// lander
import satprayasLander from '../assets/img/portfolio/satprayas-nepal/satprayasnepal.webp';

// journey
import projectJourney from '../assets/img/portfolio/hotel-himalaya/project-journey.svg';

import heroNoise from '../assets/img/hero_noise.avif';
import portfolio from '../assets/img/nav/portfolio.svg';
import services from '../assets/img/nav/services.svg';
import contact from '../assets/img/nav/contact.svg';

export const portfolioData = [
  {
    id: 1,
    title: 'Portfolio',
    heading: 'A collection of my best projects',
    description:
      'From early stage startups to renowned brands, from latest brand building to revamping existing ones, I have worked on a variety of projects. Here are some of my best works. Click on the project to witness the journey.',
    portfolioDetails: [
      {
        id: 'satprayas-nepal',
        title: 'Satprayas Nepal',
        logoSrc: 'https://satprayas.purnashrestha.com.np/assets/logo.svg',
        portfolioUrl: 'satprayas-nepal',
        description:
          'Satprayas Nepal is a service oriented non-profit organization that works for the well being and welfare of physically and mentally challenged children. It is registered in Bhaktapur District and has been providing services to children of Bhaktapur and has been providing services to children of Bhaktapur and nearby cities.',

        portfolioWebsite: {
          deployUrl: 'https://satprayas.purnashrestha.com.np/',
          mockup: satprayasNepalMockup,
          role: 'Design & Development',
          year: '2025',
          credits: 'Longtail e-Media',
          titleImage: satprayasLander,
          backgroundImage: satprayasLander,
          uiPresentation: satprayasNepalUI,
          iframePages: [
            {
              url: 'https://satprayas.purnashrestha.com.np/',
              title: 'Satprayas Nepal Home Page',
            },
            {
              url: 'https://satprayas.purnashrestha.com.np/contact',
              title: 'Satprayas Nepal Contact Page',
            },
            {
              url: 'https://satprayas.purnashrestha.com.np/gallery',
              title: 'Satprayas Nepal Gallery Page',
            },
          ],
        },
        caseStudy: {
          problemStatement:
            'Satprayas Nepal needed a website that would effectively communicate its mission and vision to a wider audience. The site needed to highlight the organization’s work with physically and mentally challenged children while encouraging donations and volunteer participation.',
          solutionOverview:
            'The website design focused on creating a visually engaging platform that showcased the organization’s work and impact. The site was optimized for speed and user-friendly navigation, ensuring visitors could easily learn about Satprayas Nepal’s initiatives and get involved.',
          projectJourney: { projectJourney },
          journeyOverview:
            'This timeline illustrates the step-by-step process from identifying the initial problem to achieving the final goals.',
          projectOutcome:
            'The website successfully raised awareness about Satprayas Nepal’s work, leading to a 50% increase in donations and a 30% rise in volunteer sign-ups within the first month.',
          toolsUsed: [
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
              title: 'Figma',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
              title: 'React',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
              title: 'TailwindCSS',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
              title: 'Cloudflare',
            },
          ],
          feedback: {
            clientReview:
              '“The new website has been a game-changer for Satprayas Nepal. It has helped us reach a wider audience and increase donations and volunteer sign-ups. We’ve seen a 50% increase in donations and a 30% rise in volunteer participation within the first month. The site’s design and functionality have exceeded our expectations.”',
            author: 'Satprayas Nepal',
          },
          galleryImages: [
            {
              src: 'https://satprayas.purnashrestha.com.np/assets/images/gallery/11.webp',
              alt: 'Satprayas Nepal',
            },
            {
              src: 'https://satprayas.purnashrestha.com.np/assets/images/gallery/6.webp',
              alt: 'Satprayas Nepal',
            },
            {
              src: 'https://satprayas.purnashrestha.com.np/assets/images/gallery/13.webp',
              alt: 'Satprayas Nepal',
            },
            {
              src: 'https://satprayas.purnashrestha.com.np/assets/images/gallery/10.webp',
              alt: 'Satprayas Nepal',
            },
          ],
        },
      },
      {
        id: 'himalayan-flavours',
        title: 'Himalayan Flavours',
        logoSrc:
          'https://mayurstay.com/himalayanflavours/backend/images/preference/CPM4u-logo.svg',
        portfolioUrl: 'himalayan-flavours',
        // description:
        //   "Nestled within 6.58 acres of exquisitely landscaped grounds, Hotel Himalaya is conveniently located 8 km away from the Tribhuvan International Airport and only 2 km from the Kathmandu city center. ",
        description:
          "Himalayan Flavours is more than just a restaurant; it's a celebration of the rich and diverse culinary heritage of the Himalayan region. Nestled in the heart of Victoria, B.C., our restaurant offers an authentic taste of India, Nepal, and China, bringing together the vibrant and bold flavors that define the cultures.",

        portfolioWebsite: {
          deployUrl: 'https://himalayan-flavours.com/',
          mockup: himalayanFlavoursMockup,
          role: 'Design & Development',
          year: '2024',
          credits: 'Longtail e-Media',
          titleImage:
            'https://mayurstay.com/himalayanflavours/assets/bg_cuisine-CXN14gmB.png',
          backgroundImage:
            'https://mayurstay.com/himalayanflavours/assets/bg_cuisine-CXN14gmB.png',
          uiPresentation: himalayanFlavoursUI,
          iframePages: [
            {
              url: 'https://mayurstay.com/himalayanflavours/',
              title: 'Himalayan Flavours Home Page',
            },
            {
              url: 'https://mayurstay.com/himalayanflavours/about',
              title: 'Himalayan Flavours About Page',
            },
            {
              url: 'https://mayurstay.com/himalayanflavours/gallery',
              title: 'Himalayan Flavours Gallery Page',
            },
          ],
        },
        caseStudy: {
          problemStatement:
            'Himalayan Flavours required a website that reflected the restaurant’s unique blend of Indian, Nepalese, and Chinese cuisine. The site needed to capture the essence of the restaurant’s diverse menu while providing an engaging user experience for customers.',
          solutionOverview:
            'The website design focused on creating a visually appealing platform that showcased the restaurant’s vibrant and bold flavors. The site was optimized for speed and user-friendly navigation, ensuring customers could easily explore the menu and make reservations.',
          projectJourney: { projectJourney },
          journeyOverview:
            'This timeline illustrates the step-by-step process from identifying the initial problem to achieving the final goals.',
          projectOutcome:
            'The website increased website visitors by 80%, boosted user engagement by 30%, and led to a 40% increase in order from the website within the first month.',
          toolsUsed: [
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
              title: 'Figma',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
              title: 'React',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
              title: 'TailwindCSS',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
              title: 'Cloudflare',
            },
          ],
          feedback: {
            clientReview:
              "The Himalayan Flavours website was a collaborative effort. The new site has increased our online presence and customer engagement. We've seen an 80% increase in website visitors, a 30% boost in engagement, and a 40% rise in online orders within the first month.",
            author: 'Himalayan Flavours',
          },
          galleryImages: [
            {
              src: 'https://mayurstay.com/himalayanflavours/assets/bg_cuisine-CXN14gmB.png',
              alt: 'Himalayan Flavours',
            },
            {
              src: 'https://mayurstay.com/himalayanflavours/assets/bg_cuisine-CXN14gmB.png',
              alt: 'Himalayan Flavours',
            },
            {
              src: 'https://mayurstay.com/himalayanflavours/assets/bg_cuisine-CXN14gmB.png',
              alt: 'Himalayan Flavours',
            },
            {
              src: 'https://mayurstay.com/himalayanflavours/assets/bg_cuisine-CXN14gmB.png',
              alt: 'Himalayan Flavours',
            },
          ],
        },
      },
      {
        id: 'hotel-himalaya',
        title: 'Hotel Himalaya',
        logoSrc:
          'https://hotelhimalaya.purnashrestha.com.np/assets/logo-s4LMycLK.svg',
        portfolioUrl: 'hotel-himalaya',
        // description:
        //   "Nestled within 6.58 acres of exquisitely landscaped grounds, Hotel Himalaya is conveniently located 8 km away from the Tribhuvan International Airport and only 2 km from the Kathmandu city center. ",
        description:
          'Hotel Himalaya is conveniently located 8 km away from the Tribhuwan International Airport and only 2 km from the Kathmandu city center. The stay at Hotel Himalaya means enjoying every moment.',

        portfolioWebsite: {
          deployUrl: 'https://hotelhimalaya.purnashrestha.com.np/',
          mockup: hotelHimalayaMockup,
          role: 'Design & Development',
          year: '2024',
          credits: 'Longtail e-Media',
          titleImage:
            'https://hotelhimalaya.purnashrestha.com.np/images/hero/1.webp',
          backgroundImage:
            'https://hotelhimalaya.purnashrestha.com.np/images/banner/about.webp',
          uiPresentation: hotelHimalayaUI,
          iframePages: [
            {
              url: 'https://hotelhimalaya.purnashrestha.com.np/',
              title: 'Hotel Himalaya Website Home Page',
            },
            {
              url: 'https://hotelhimalaya.purnashrestha.com.np/stay',
              title: 'Hotel Himalaya Website Stay Page',
            },
            {
              url: 'https://hotelhimalaya.purnashrestha.com.np/gallery',
              title: 'Hotel Himalaya Website Gallery Page',
            },
          ],
        },
        caseStudy: {
          problemStatement:
            'The Hotel Himalaya website needed a complete redesign to improve user engagement and streamline the booking process.',
          solutionOverview:
            'The redesign focused on creating a clean, modern interface with an intuitive booking system and responsive design.',
          projectJourney: { projectJourney },
          journeyOverview:
            'This timeline illustrates the step-by-step process from identifying the initial problem to achieving the final goals.',
          projectOutcome:
            'The redesigned website increased website visitors by 80%, boosted user engagement by 30%, and led to a 20% increase in bookings within the first month.',
          toolsUsed: [
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
              title: 'Figma',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
              title: 'React',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
              title: 'TailwindCSS',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
              title: 'Cloudflare',
            },
          ],
          feedback: {
            clientReview:
              "We partnered with Purna to revamp our website, and the results were exceptional. The redesign modernized our site and led to an 80% increase in visitors, a 30% boost in engagement, and a 20% rise in bookings within the first month. Purna & the teams' meticulous attention to detail and seamless execution exceeded our expectations.",
            author: 'Hotel Himalaya',
          },
          galleryImages: [
            {
              src: 'https://hotelhimalaya.purnashrestha.com.np/images/hero/1.webp',
              alt: 'Hotel Himalaya',
            },
            {
              src: 'https://hotelhimalaya.purnashrestha.com.np/images/stay/js2.webp',
              alt: 'Hotel Himalaya',
            },
            {
              src: 'https://hotelhimalaya.purnashrestha.com.np/images/banner/dine.webp',
              alt: 'Hotel Himalaya',
            },
            {
              src: 'https://hotelhimalaya.purnashrestha.com.np/images/banner/swimming.webp',
              alt: 'Hotel Himalaya',
            },
          ],
        },
      },
      {
        id: 'baber-mahal-vilas',
        title: 'Baber Mahal Vilas',
        logoSrc: 'https://babermahalvilas.purnashrestha.com.np/img/logo.svg',
        portfolioUrl: 'baber-mahal-vilas',
        description:
          'Baber Mahal Vilas is a luxury boutique hotel in Kathmandu, Nepal. The hotel is a fusion of modern luxury and traditional architecture, offering a unique experience to its guests.',
        portfolioWebsite: {
          deployUrl: 'https://babermahalvilas.purnashrestha.com.np/',
          mockup: baberMahalMockup,
          role: 'Design & Development',
          year: '2024',
          credits: 'Longtail e-Media',
          titleImage:
            'https://babermahalvilas.purnashrestha.com.np/img/banner/12.webp',
          backgroundImage:
            'https://babermahalvilas.purnashrestha.com.np/img/banner/2.webp',
          uiPresentation: babermahalUI,
          iframePages: [
            {
              url: 'https://babermahalvilas.purnashrestha.com.np/home',
              title: 'Baber Mahal Vilas Website Home Page',
            },
            {
              url: 'https://babermahalvilas.purnashrestha.com.np/accommodation',
              title: 'Baber Mahal Vilas Website Stay Page',
            },
            {
              url: 'https://babermahalvilas.purnashrestha.com.np/dine',
              title: 'Baber Mahal Vilas Website Dine Page',
            },
          ],
        },
        caseStudy: {
          problemStatement:
            "Baber Mahal Vilas required a website that reflected the hotel's unique blend of modern luxury and traditional architecture. The site needed to capture the essence of the hotel's design and ambiance while providing a seamless user experience for guests.",
          solutionOverview:
            "The new website design focused on creating a visually appealing platform that showcased the hotel's luxurious amenities and traditional architecture. The site was optimized for speed and user-friendly navigation, ensuring guests could easily explore the hotel's offerings and make bookings.",
          projectJourney: { projectJourney },
          journeyOverview:
            'This timeline illustrates the step-by-step process from identifying the initial problem to achieving the final goals.',
          projectOutcome:
            "The redesigned website successfully captured the essence of Baber Mahal Vilas, attracting more visitors and increasing online bookings. The site's visual appeal and user-friendly design led to a 50% increase in website traffic and a 30% rise in direct bookings within the first month.",
          toolsUsed: [
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
              title: 'Figma',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
              title: 'React',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
              title: 'TailwindCSS',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
              title: 'Cloudflare',
            },
          ],
          feedback: {
            clientReview:
              "“We wanted our website to reflect the unique blend of modern luxury and traditional architecture that defines Baber Mahal Vilas. Since launching, we've seen a 50% increase in website traffic and a 30% rise in direct bookings. The site's visual appeal and user-friendly design have exceeded our expectations.”",
            author: 'Baber Mahal Vilas',
          },
          galleryImages: [
            {
              src: 'https://babermahalvilas.purnashrestha.com.np/img/banner/2.webp',
              alt: 'Baber Mahal Vilas',
            },
            {
              src: 'https://babermahalvilas.purnashrestha.com.np/img/banner/3.webp',
              alt: 'Baber Mahal Vilas',
            },
            {
              src: 'https://babermahalvilas.purnashrestha.com.np/img/banner/6.webp',
              alt: 'Baber Mahal Vilas',
            },
            {
              src: 'https://babermahalvilas.purnashrestha.com.np/img/banner/8.webp',
              alt: 'Baber Mahal Vilas',
            },
          ],
        },
      },
      {
        id: 'hotel-dayatra',
        title: 'Hotel Dayatra',
        logoSrc: 'https://dayatra.purnashrestha.com.np/assets/img/logo.svg',
        portfolioUrl: 'hotel-dayatra',
        description:
          'Hotel Dayatra Courtyard is a luxury hotel of amazing service and perfect for unwinding. The hotel is located in the heart of the pokhara, just 5 minutes away from the airport.',
        portfolioWebsite: {
          deployUrl: 'https://dayatra.purnashrestha.com.np/',
          mockup: hotelDayatraMockup,
          role: 'Design & Development',
          year: '2024',
          credits: 'Longtail e-Media',
          titleImage:
            'https://dayatra.purnashrestha.com.np/assets/img/slider/building.webp',
          backgroundImage:
            'https://dayatra.purnashrestha.com.np/assets/img/banner/about.webp',
          iframePages: [
            {
              url: 'https://dayatra.purnashrestha.com.np/',
              title: 'Hotel Da Yatra Website Home Page',
            },
            {
              url: 'https://dayatra.purnashrestha.com.np/accommodation',
              title: 'Hotel Da Yatra Website Stay Page',
            },
            {
              url: 'https://dayatra.purnashrestha.com.np/gallery',
              title: 'Hotel Da Yatra Website Gallery Page',
            },
          ],
        },
        caseStudy: {
          problemStatement:
            'After a beautiful renovation, Hotel Da Yatra realized their outdated website no longer reflected their new image and needed a modern upgrade to enhance user engagement and support their growing customer base.',
          solutionOverview:
            "The redesign introduced a fresh, modern interface with an intuitive navigation system and a responsive design. It focused on highlighting the renovated hotel's offerings while optimizing the booking process for a seamless user experience.",
          projectJourney: { projectJourney },
          journeyOverview:
            "This timeline illustrates the step-by-step process from understanding the client's needs post-renovation to delivering a sleek, responsive, and modern website.",
          projectOutcome:
            'The revamped website attracted more users, with a 70% increase in website traffic, a 40% rise in user engagement, and a 25% boost in direct bookings in the first three months after launch.',
          toolsUsed: [
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
              title: 'Figma',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
              title: 'React',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
              title: 'TailwindCSS',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
              title: 'Cloudflare',
            },
          ],
          feedback: {
            clientReview:
              'We reached out to Purna after our hotel renovation, knowing our old website no longer matched the fresh, modern look of our brand. The new website transformed not only the visual appeal but also how our customers engage with our services. Purna and his team brought our vision to life, resulting in a significant boost in traffic and bookings.',
            author: 'Hotel Da Yatra',
          },
          galleryImages: [
            {
              src: 'https://dayatra.purnashrestha.com.np/assets/img/slider/building.webp',
              alt: 'Hotel Da Yatra',
            },
            {
              src: 'https://dayatra.purnashrestha.com.np/assets/img/rooms/drs2.webp',
              alt: 'Hotel Da Yatra',
            },
            {
              src: 'https://dayatra.purnashrestha.com.np/assets/img/slider/welcome.webp',
              alt: 'Hotel Da Yatra',
            },
            {
              src: 'https://dayatra.purnashrestha.com.np/assets/img/daYatraEntry.webp',
              alt: 'Hotel Da Yatra',
            },
          ],
        },
      },
      {
        id: 'mithila-yatri-niwas',
        title: 'Mithila Yatri Niwas',
        logoSrc: 'https://www.mithilayatriniwas.com/assets/logo-BoMl5AAK.svg',
        portfolioUrl: 'mithila-yatri-niwas',
        description:
          'Mithila Yatri Niwas - A luxurious retreat in Janakpur, just a 10-minute walk from the sacred Janaki Temple where you can experience the rich cultural & traditional heritage of the city.',
        portfolioWebsite: {
          deployUrl: 'https://www.mithilayatriniwas.com',
          mockup: mithilaMockup,
          role: 'Design & Development',
          year: '2024',
          credits: 'Longtail e-Media',
          titleImage:
            'https://mithila-yatri.pages.dev/assets/mithila-BauZmQvB.webp',
          backgroundImage:
            'https://mithila-yatri.pages.dev/assets/room1-Dq4x4xNH.webp',
          uiPresentation: mithilaUI,
          iframePages: [
            {
              url: 'https://mithila-yatri.pages.dev/',
              title: 'Mithila Yatri Niwas Website Home Page',
            },
            {
              url: 'https://mithila-yatri.pages.dev/accommodation',
              title: 'Mithila Yatri Niwas Website Stay Page',
            },
            {
              url: 'https://mithila-yatri.pages.dev/gallery',
              title: 'Mithila Yatri Niwas Website Gallery Page',
            },
          ],
        },
        caseStudy: {
          problemStatement:
            "Mithila Yatri Niwas required a new website that not only showcased the hotel's luxurious amenities but also highlighted the rich cultural heritage of Janakpur, particularly the sacred Janaki Temple and local traditions. The website needed to stand out from other hospitality offerings in the region by reflecting both modern comforts and the legacy of the city.",
          solutionOverview:
            "The new website was designed to integrate key hospitality features, ensuring an easy-to-navigate interface for bookings, services, and amenities. A strong emphasis was placed on visually capturing the essence of Janakpur's culture and its connection to the Janaki Temple, setting Mithila Yatri Niwas apart from competitors in the area.",
          projectJourney: { projectJourney },
          journeyOverview:
            'This timeline illustrates the step-by-step process from identifying the initial problem to achieving the final goals.',
          projectOutcome:
            "The website redesign led successfully positioned Mithila Yatri Niwas as a cultural and luxurious destination. It led to a 50% increase in online inquiries and a notable rise in direct bookings through the site. The visual representation of Janakpur's heritage resonated with both local and international guests, improving engagement and brand visibility.",
          toolsUsed: [
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
              title: 'Figma',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
              title: 'React',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
              title: 'TailwindCSS',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
              title: 'Cloudflare',
            },
          ],
          feedback: {
            clientReview:
              "“We wanted our website to reflect the culture of Janakpur while highlighting the luxury we offer. Thank You Purna and his team for delivering exactly that. The new site truly captures the spirit of the Janaki Temple and our city, helping us stand out. Since launching, we've seen a 50% increase in bookings and a lot of positive feedback from guests.”",
            author: 'Mithila Yatri Niwas',
          },
          galleryImages: [
            {
              src: 'https://mithila-yatri.pages.dev/assets/mithila_night-BP4wXxoQ.webp',
              alt: 'Mithila Yatri Niwas',
            },
            {
              src: 'https://mithila-yatri.pages.dev/assets/mithila2-CMWD05R9.webp',
              alt: 'Mithila Yatri Niwas',
            },
            {
              src: 'https://mithila-yatri.pages.dev/assets/room3-CGyEWjdq.webp',
              alt: 'Mithila Yatri Niwas',
            },
            {
              src: 'https://mithila-yatri.pages.dev/assets/hall1-VaKC5fnP.webp',
              alt: 'Mithila Yatri Niwas',
            },
          ],
        },
      },
      {
        id: 'hotel-ichchha',
        title: 'Hotel Ichchha',
        logoSrc: 'https://hotelichchha.com/assets/logo-DU4e6XTo.svg',
        portfolioUrl: 'hotel-ichchha',
        description:
          "Being a top hospitality provider & Nepal's First 5-Star Hotel in Simara, Bara, Nepal, we guarantee our finest offerings due to its convenient location, it is a great option for business, leisure, and pilgrimage trips.",
        portfolioWebsite: {
          deployUrl: 'https://hotel-ichchha.pages.dev',
          mockup: ichchhaMockup,
          role: 'Design & Development',
          year: '2024',
          credits: 'Longtail e-Media',
          titleImage:
            'https://hotel-ichchha.pages.dev/assets/dlx3-CMsmsEgx.webp',
          backgroundImage:
            'https://hotel-ichchha.pages.dev/assets/ichchha1-CmqxPbFg.webp',
          uiPresentation: hotelIchchhaUI,
          iframePages: [
            {
              url: 'https://hotel-ichchha.pages.dev/',
              title: 'Hotel Ichchha Website Home Page',
            },
            {
              url: 'https://hotel-ichchha.pages.dev/accommodation/executive-suite',
              title: 'Hotel Ichchha Website Stay Page',
            },
            {
              url: 'https://hotel-ichchha.pages.dev/events',
              title: 'Hotel Ichchha Website Gallery Page',
            },
          ],
        },
        caseStudy: {
          problemStatement:
            'After achieving 5-star status in Simara, Bara, Nepal, Hotel Ichchha underwent significant updates to the property. To properly showcase these new offerings and increase online bookings, the hotel required a faster, more efficient website compared to their previous one.',
          solutionOverview:
            "The new website design focused on delivering an enhanced user experience with high-quality visuals and an intuitive booking system. The site was optimized for speed and responsiveness, ensuring potential guests could seamlessly explore the hotel's new amenities and easily make bookings.",
          projectJourney: { projectJourney },
          journeyOverview:
            'This timeline illustrates the step-by-step process from identifying the initial problem to achieving the final goals.',
          projectOutcome:
            "The revamped website led to a 60% increase in website visitors, a 40% rise in online bookings, and improved engagement with the hotel's updated facilities.",
          toolsUsed: [
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
              title: 'Figma',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
              title: 'React',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
              title: 'TailwindCSS',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
              title: 'Cloudflare',
            },
          ],
          feedback: {
            clientReview:
              '“After our transition to a 5-star hotel, we needed a website that could reflect our new standards and facilities. Purna and the team delivered a site that not only showcases our updated amenities but also performs exceptionally well. Our online bookings have surged by 40%, and guest interactions with the site have been overwhelmingly positive. The attention to detail and performance improvements exceeded our expectations.”',
            author: 'Hotel Ichchha',
          },
          galleryImages: [
            {
              src: 'https://hotel-ichchha.pages.dev/assets/g19-DES27q-W.webp',
              alt: 'Hotel Ichchha',
            },
            {
              src: 'https://hotel-ichchha.pages.dev/assets/g18-CQ4_uG3Z.webp',
              alt: 'Hotel Ichchha',
            },
            {
              src: 'https://hotel-ichchha.pages.dev/assets/g8-D7SpBndT.webp',
              alt: 'Hotel Ichchha',
            },
            {
              src: 'https://hotel-ichchha.pages.dev/assets/g23-D93mm9YZ.webp',
              alt: 'Hotel Ichchha',
            },
          ],
        },
      },
    ],
  },
];

export const navLinks = [
  {
    id: 'About',
    title: 'About',
    routing: '/about',
    picture: heroNoise,
  },
  {
    id: 'Portfolio',
    title: 'Portfolio',
    routing: '/portfolio',
    picture: portfolio,
    // subLinks: [
    //   {
    //     id: 'hotel-himalaya',
    //     title: 'Hotel Himalaya',
    //     routing: '/portfolio/hotel-himalaya',
    //     picture: hotelHimalayaMockup,
    //   },
    //   {
    //     id: 'hotel-ichchha',
    //     title: 'Hotel Ichchha',
    //     routing: '/portfolio/hotel-ichchha',
    //     picture: ichchhaMockup,
    //   },
    //   {
    //     id: 'hotel-dayatra',
    //     title: 'Hotel Dayatra',
    //     routing: '/portfolio/hotel-dayatra',
    //     picture: hotelDayatraMockup,
    //   },
    //   {
    //     id: 'mithila',
    //     title: 'Mithila',
    //     routing: '/portfolio/mithila-yatri-niwas',
    //     picture: mithilaMockup,
    //   },
    // ],
  },
  {
    id: 'Services',
    title: 'Services',
    routing: '/services',
    picture: services,
  },
  {
    id: 'Contact',
    title: 'Contact',
    routing: '/contact',
    picture: contact,
  },
  {
    id: 'Satprayas Nepal',
    title: 'Satprayas Nepal',
    routing: '/portfolio/satprayas-nepal',
    picture: satprayasNepalMockup,
  },
  {
    id: 'Himalayan Flavours',
    title: 'Himalayan Flavours',
    routing: '/portfolio/himalayan-flavours',
    picture: himalayanFlavoursMockup,
  },
  {
    id: 'baber-mahal-vilas',
    title: 'Baber Mahal Vilas',
    routing: '/portfolio/baber-mahal-vilas',
    picture: baberMahalMockup,
  },
  {
    id: 'hotel-himalaya',
    title: 'Hotel Himalaya',
    routing: '/portfolio/hotel-himalaya',
    picture: hotelHimalayaMockup,
  },
  {
    id: 'hotel-ichchha',
    title: 'Hotel Ichchha',
    routing: '/portfolio/hotel-ichchha',
    picture: ichchhaMockup,
  },
  {
    id: 'hotel-dayatra',
    title: 'Hotel Dayatra',
    routing: '/portfolio/hotel-dayatra',
    picture: hotelDayatraMockup,
  },
  {
    id: 'mithila',
    title: 'Mithila',
    routing: '/portfolio/mithila-yatri-niwas',
    picture: mithilaMockup,
  },
];
