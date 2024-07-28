import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface Testimonial {
  feedback: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi molestias at accusantium libero quas omnis magni perspiciatis commodi numquam, provident officia minima.",
    name: "John Doe",
    position: "CEO",
  },
  {
    feedback:
      "This is another testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    position: "CTO",
  },
  {
    feedback:
      "Yet another testimonial. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Alice Johnson",
    position: "Manager",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
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
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`size-2 bg-white/50 hover:bg-white/90 rounded-full cursor-pointer transition-all duration-300 ease-linear ${
            idx === activeIndex
              ? "outline outline-1 outline-offset-2 outline-white bg-white"
              : ""
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
          <p className="text-justify text-sm text-gray-300">
            {testimonial.feedback}
          </p>
          <div className="flex items-center justify-between mt-4">
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
