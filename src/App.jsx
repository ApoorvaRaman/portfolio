import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";
export default function App() {
  const [theme, setTheme] = useTheme();
  return (
    <>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}
