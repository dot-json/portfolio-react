import type { ReactNode } from "react";
import { useReveal } from "./reveal";

const InfiniteMarquee = ({
  direction = "up",
  text,
}: {
  text: string[];
  direction?: "up" | "down";
}) => {
  const animationClass =
    direction === "down" ? "animate-marquee-down" : "animate-marquee-up";

  const repeatedText = Array(10)
    .fill(null)
    .flatMap(() => text);
  const duplicatedItems = [...repeatedText, ...repeatedText];

  return (
    <div className="max-h-[100vh-4rem] w-full overflow-hidden">
      <div
        className={`flex h-full w-full items-center justify-center font-mono ${animationClass}`}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="text-foreground-muted shrink-0 p-2 text-xs font-semibold tracking-wider whitespace-nowrap opacity-60 select-none"
            style={{
              transform: direction === "up" ? "rotate(180deg)" : "none",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const BodyContent = ({ children }: { children?: ReactNode }) => {
  const { isFirstLoad } = useReveal();

  return (
    <main className="grid min-h-[calc(100vh-4rem)] grid-cols-1 bg-[repeating-linear-gradient(315deg,var(--border-muted)_0,var(--border-muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] md:grid-cols-1">
      <div
        className="bg-background fixed top-16 left-0 hidden h-[calc(100vh-4rem)] w-16 overflow-hidden border-r border-dashed opacity-0 lg:block"
        style={{
          animation: "slideInLeft 1000ms ease forwards",
          animationDelay: isFirstLoad ? "2200ms" : "0ms",
        }}
      >
        <InfiniteMarquee text={["771", "/ / / / /"]} direction="up" />
      </div>
      <div className="bg-background mx-auto w-full border-dashed lg:max-w-4xl lg:border-x">
        {children}
      </div>
      <div
        className="bg-background fixed top-16 right-0 hidden h-[calc(100vh-4rem)] w-16 overflow-hidden border-l border-dashed opacity-0 lg:block"
        style={{
          animation: "slideInRight 1000ms ease forwards",
          animationDelay: isFirstLoad ? "2200ms" : "0ms",
        }}
      >
        <InfiniteMarquee text={["771", "/ / / / /"]} direction="down" />
      </div>
    </main>
  );
};

export default BodyContent;
