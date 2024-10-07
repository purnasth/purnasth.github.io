import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface Testimonial {
  feedback: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    feedback:
      "We partnered with Purna to revamp our website, and the results were exceptional. The redesign modernized our site and led to an 80% increase in visitors, a 30% boost in engagement, and a 20% rise in bookings within the first month. Purna & the teams' meticulous attention to detail and seamless execution exceeded our expectations.",
    name: 'Hotel Himalaya',
    position: 'HH',
  },
  {
    feedback:
      'We wanted our website to reflect the culture of Janakpur while highlighting the luxury we offer. Thank You Purna and his team for delivering exactly that. The new site truly captures the spirit of the Janaki Temple and our city, helping us stand out. Since launching, we ve seen a 50% increase in bookings and a lot of positive feedback from guests.',
    name: 'Mithila Yatri Niwas',
    position: 'MYN',
  },
  {
    feedback:
      'After our transition to a 5-star hotel, we needed a website that could reflect our new standards and facilities. Purna and the team delivered a site that not only showcases our updated amenities but also performs exceptionally well. Our online bookings have surged by 40%, and guest interactions with the site have been overwhelmingly positive. The attention to detail and performance improvements exceeded our expectations.',
    name: 'Hotel Ichchha',
    position: 'HI',
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

interface DotsProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface TestimonialsProps {
  activeIndex: number;
}

export const ReviewSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setActiveIndex((pv) => (pv === testimonials.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && activeIndex < testimonials.length - 1) {
      setActiveIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && activeIndex > 0) {
      setActiveIndex((pv) => pv - 1);
    }
  };

  return (
    <>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${activeIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Testimonials activeIndex={activeIndex} />
      </motion.div>

      <Dots activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </>
  );
};

const Dots: React.FC<DotsProps> = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {testimonials.map((_, idx) => (
        <button
          type="button"
          key={idx}
          title={`Feedback ${idx + 1}`}
          aria-label={`Feedback ${idx + 1}`}
          onClick={() => setActiveIndex(idx)}
          className={`size-2 cursor-pointer rounded-full bg-white/50 transition-all duration-300 ease-linear hover:bg-white/90 ${
            idx === activeIndex
              ? 'bg-white/80 outline outline-1 outline-offset-2 outline-white'
              : ''
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({ activeIndex }) => {
  return (
    <>
      {testimonials.map((testimonial, idx) => (
        <motion.div
          key={idx}
          className="w-full shrink-0"
          animate={{
            scale: activeIndex === idx ? 1 : 0.75,
            opacity: activeIndex === idx ? 1 : 0,
          }}
          transition={SPRING_OPTIONS}
        >
          <p className="max-h-24 overflow-y-auto text-pretty text-justify text-sm text-gray-300">
            {testimonial.feedback}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <h4 className="text-sm font-bold text-white/90">
              {testimonial.name}
            </h4>
            <span className="text-xs italic text-white/90">
              - {testimonial.position}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
};
