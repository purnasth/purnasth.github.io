import "./index.css";
import Hero from "./components/Hero";
import gradientBg from "./assets/gradients/gradient1.avif";

const App = () => {
  return (
    <main
      className={`pointer-events-none absolute inset-0 bg-[url('')] size-full bg-cover bg-center -z-10 mix-blend-darken`}
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <Hero />
    </main>
  );
};

export default App;
