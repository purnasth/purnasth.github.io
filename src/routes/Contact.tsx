import React from 'react';
import NavbarBreadCrumb from '../components/NavbarBreadCrumb';
import SEO from '../utils/SEO';
import Footer from '../layout/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact - Purna Shrestha"
        description="Get in touch with Purna Shrestha for web design, development, and software project inquiries."
        keywords="contact Purna Shrestha, UI/UX designer, web developer, project inquiries, collaboration"
        url="https://www.purnashrestha.com.np/contact"
      />
      <NavbarBreadCrumb page="Contact" />
      {/* <main className="size-full bg-dark text-white">

        <div className="md:container">
          <div className="max-w-3xl">
            <h3 className="flex flex-col gap-1 text-pretty text-xl leading-relaxed drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-7xl md:leading-tight">
              Interested in collaborating? <br />
            </h3>
            <p className="text-base text-light/60 flex items-center gap-4">
              Let's schedule a chat—coffee's on me.
              <img
                src="https://ugokawaii.com/wp-content/uploads/2022/10/hot-coffee.gif"
                alt="Coffee"
                className="size-12 object-contain"
              />
            </p>
          </div>
        </div>
      </main> */}
      <Footer />
    </>
  );
};

export default Contact;
