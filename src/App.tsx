import "./index.css";
import gradientBg from "./assets/gradients/gradient2.avif";
import Home from "./routes/Home";

const App = () => {
  return (
    <main
      className={`absolute inset-0 bg-[url('')] size-full bg-cover bg-center -z-10 mix-blend-darken`}
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <Home />
    </main>
  );
};

export default App;
