import "./index.css";
import Hero from "./components/Hero";
import gradientBg from "./assets/gradients/gradient2.avif";
import ProfileNav from "./components/ProfileNav";

const App = () => {
  return (
    <main
      className={`bsolute inset-0 bg-[url('')] size-full bg-cover bg-center -z-10 mix-blend-darken`}
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <ProfileNav />
      <Hero />
    </main>
  );
};

export default App;
