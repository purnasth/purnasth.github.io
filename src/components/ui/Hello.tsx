import React, { useState, useEffect } from 'react';

interface HelloProps {
  title: string;
}

const greetings: string[] = [
  'Hello',
  'नमस्कार', // Nepali
  'ज्वजलपा', // Newari
  'Hola', // Spanish
  'Bonjour', // French
  'Hallo', // German
  'Ciao', // Italian
  'こんにちは', // Japanese
  '안녕하세요', // Korean
  '你好', // Chinese
  'Olá', // Portuguese
  'مرحبا', // Arabic
];

const Hello: React.FC<HelloProps> = ({ title }) => {
  const [greeting, setGreeting] = useState<string>(greetings[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreeting((prevGreeting) => {
        const currentIndex = greetings.indexOf(prevGreeting);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 800);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <h1 className="transition-300 font-body text-3xl font-medium leading-snug md:text-7xl md:leading-snug">
      {greeting}, <br />
      {/* <strong className="transition-300 font-luxury font-extralight text-white/50 hover:text-white"> */}
      <span className="font-luxury font-extralight opacity-50">I'm</span>{' '}
      {/* </strong> */}
      <strong className="font-luxury font-extralight text-inherit">
        {title}
      </strong>
    </h1>
  );
};

export default Hello;
