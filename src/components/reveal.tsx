import { createContext, useContext, useEffect, useRef, useState } from "react";

interface RevealContextType {
  isFirstLoad: boolean;
}

const RevealContext = createContext<RevealContextType>({
  isFirstLoad: false,
});

export const useReveal = () => useContext(RevealContext);

interface RevealProps {
  children: React.ReactNode;
}

const Reveal = ({ children }: RevealProps) => {
  const wordRef = useRef<HTMLSpanElement>(null);
  const iterationRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstLoadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const scrambleWord = () => {
    const word = "771.NETWORK";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    iterationRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (wordRef.current) {
        const currentIteration = iterationRef.current;
        const newText =
          wordRef.current.textContent
            ?.split("")
            .map((_letter, id) => {
              if (id < currentIteration) {
                return word[id];
              }

              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("") || "";

        wordRef.current.textContent = newText;

        if (currentIteration >= word.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
        iterationRef.current += 1 / 2;
      }
    }, 70);
  };

  useEffect(() => {
    if (wordRef.current) {
      document.body.style.overflow = "hidden";

      wordRef.current.textContent = "000.0000000";
      scrambleWord();

      firstLoadTimeoutRef.current = setTimeout(() => {
        setIsFirstLoad(false);
      }, 4000);

      timeoutRef.current = setTimeout(() => {
        document.body.style.overflow = "";
      }, 2500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (firstLoadTimeoutRef.current) {
        clearTimeout(firstLoadTimeoutRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <RevealContext.Provider value={{ isFirstLoad }}>
      {children}
      <div
        id="reveal"
        className="bg-background text-foreground-muted pointer-events-none fixed top-0 left-0 z-9999 grid h-screen w-screen place-items-center font-mono text-4xl font-semibold tracking-widest sm:text-5xl"
      >
        <span ref={wordRef}>000.0000000</span>
      </div>
    </RevealContext.Provider>
  );
};

export default Reveal;
