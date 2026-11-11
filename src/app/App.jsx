import { useEffect, useState } from "react";
import "./App.css";

import { Moon, Sun } from "lucide-react";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    document.documentElement.style.setProperty("--bg-light", "#f5f2eb");
    document.documentElement.style.setProperty("--text-light", "#292820");
    document.documentElement.style.setProperty(
      "--accent",
      theme === "dark" ? "#d98261" : "#a65e43",
    );

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const dark = theme === "dark";

  const muted = dark ? "text-[#a0a09a]" : "text-[#777267]";
  const line = dark ? "border-[#383832]" : "border-[#ded9ce]";
  const hover = "hover:text-[var(--accent)] transition-colors";

  return (
    <main className="mx-auto min-h-screen w-[min(100%-40px,850px)]">
      {/* Header */}
      <header
        className={`flex items-center justify-between border-b ${line} py-7`}
      >
        <span className="text-xl font-bold tracking-tight">gc-MayankPun</span>

        <div className="flex items-center gap-5 sm:gap-7">
          {/* Desktop navigation */}
          <nav className="hidden items-center gap-5 sm:flex sm:gap-7">
            <a
              href="https://github.com/gc-MayankPun"
              target="_blank"
              rel="noreferrer"
              className={`text-xs ${muted} ${hover}`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gc-mayankpun/"
              target="_blank"
              rel="noreferrer"
              className={`text-xs ${muted} ${hover}`}
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/gc_mayank/"
              target="_blank"
              rel="noreferrer"
              className={`text-xs ${muted} ${hover}`}
            >
              Instagram
            </a>
          </nav>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className={`flex items-center ${muted} ${hover}`}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      {/* Introduction */}
      <section className="pb-24 pt-28 sm:pt-25">
        <p className={`mb-7 text-xs tracking-widest ${muted}`}>
          HELLO, INTERNET.
        </p>

        <h1 className="text-5xl font-bold tracking-[-3px] sm:text-7xl">
          I'm Mayank Pun
        </h1>

        <h2
          className={`mt-7 max-w-162.5 text-xl leading-relaxed sm:text-2xl ${muted}`}
        >
          Developer, curious mind, and someone who likes figuring things out.
        </h2>

        <div
          className={`mt-9 max-w-155 space-y-5 text-sm leading-8 sm:text-base ${muted}`}
        >
          <p>
            I usually build things because something annoyed me enough that I
            wanted to fix it myself.
          </p>

          <p>
            That curiosity has taken me into web development, backend
            engineering, Linux, automation, developer tools and interactive
            experiences.
          </p>

          <p>
            I enjoy understanding how things work beneath the surface,
            experimenting with new technologies, and turning random ideas into
            something real.
          </p>

          <p>
            Still learning, still building, and probably exploring something new
            right now.
          </p>
        </div>
      </section>

      {/* Currently exploring */}
      <section className={`border-t ${line} py-9`}>
        <p className={`mb-5 text-xs tracking-widest ${muted}`}>
          CURRENTLY INTERESTED IN
        </p>

        <p className="max-w-162.5 text-sm leading-8 sm:text-base">
          Backend Engineering <span className={muted}>·</span> System Design{" "}
          <span className={muted}>·</span> Linux{" "}
          <span className={muted}>·</span> Developer Tooling{" "}
          <span className={muted}>·</span> APIs <span className={muted}>·</span>{" "}
          Creative Development <span className={muted}>·</span> Computer Vision
        </p>
      </section>

      {/* Footer */}
      <footer
        className={`mt-16 flex items-center justify-between gap-4 border-t ${line} py-7`}
      >
        {/* Mobile navigation */}
        <nav className="flex items-center gap-4 sm:hidden">
          <a
            href="https://github.com/gc-MayankPun"
            target="_blank"
            rel="noreferrer"
            className={`text-xs ${muted} ${hover}`}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gc-mayankpun/"
            target="_blank"
            rel="noreferrer"
            className={`text-xs ${muted} ${hover}`}
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/gc_mayank/"
            target="_blank"
            rel="noreferrer"
            className={`text-xs ${muted} ${hover}`}
          >
            Instagram
          </a>
        </nav>

        <a
          href="mailto:gcmayanktestapp@gmail.com"
          className={`ml-auto text-right text-xs ${hover}`}
        >
          Say hello ↗
        </a>
      </footer>
    </main>
  );
}

export default App;
