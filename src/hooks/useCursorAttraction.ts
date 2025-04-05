import { useEffect } from 'react';

const useCursorAttraction = (
  selector: string,
  attractionRadius: number = 150,
  strength: number = 0.3,
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const handleMouseMove = (event: MouseEvent) => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const distanceX = event.clientX - elementCenterX;
        const distanceY = event.clientY - elementCenterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < attractionRadius) {
          const attractionStrength = 1 - distance / attractionRadius; // Closer = stronger attraction
          const translateX = distanceX * attractionStrength * strength;
          const translateY = distanceY * attractionStrength * strength;

          (element as HTMLElement).classList.add('attracted');
          (element as HTMLElement).style.transform =
            `translate(${translateX}px, ${translateY}px)`;
        } else {
          (element as HTMLElement).classList.remove('attracted');
          (element as HTMLElement).style.transform = '';
        }
      });
    };

    const handleMouseLeave = () => {
      elements.forEach((element) => {
        (element as HTMLElement).classList.remove('attracted');
        (element as HTMLElement).style.transform = '';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [selector, attractionRadius, strength]);
};

export default useCursorAttraction;
