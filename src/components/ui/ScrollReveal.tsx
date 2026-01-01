import gsap from 'gsap';
import SplitType from 'split-type';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollRevealProps {
  heading: string;
  styles: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ heading, styles }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll<HTMLElement>('.reveal-type');

    splitTypes.forEach((splitType) => {
      const text = new SplitType(splitType, {
        types: 'chars,words',
        tagName: 'span',
      });

      const chars = text.chars;
      const elements = chars ? Array.from(chars) : [];
      gsap.from(elements as HTMLElement[], {
        scrollTrigger: {
          trigger: splitType,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  });

  return <h4 className={`${styles} reveal-type`}>{heading}</h4>;
};

export default ScrollReveal;
