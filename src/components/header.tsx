import { useState } from "react";
import { useReveal } from "./reveal";
import Button from "./ui/button";
import LanguageToggle from "./ui/language-toggle";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { isFirstLoad } = useReveal();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="border-b-border bg-background sticky top-0 z-40 flex h-16 items-center justify-between border-b border-dashed p-4">
      <h1
        className="bg-[url('/tx1.gif')] bg-cover bg-clip-text bg-top text-xl tracking-[0.5em] text-transparent uppercase font-stretch-extra-expanded opacity-0 grayscale"
        style={{
          animation: "dropIn 1000ms ease forwards",
          animationDelay: isFirstLoad ? "2200ms" : "0ms",
        }}
      >
        {t("header.title")}
      </h1>
      <div className="hidden items-center gap-7 lg:flex">
        <nav className="nav-with-anchor relative flex items-center gap-6">
          <Button
            variant="nav"
            size="nav"
            href="/"
            className={cn(
              "nav-item opacity-0",
              location.pathname === "/" && "active",
            )}
            style={{
              animation: "dropIn 1000ms ease forwards",
              animationDelay: isFirstLoad ? "calc(2200ms + 400ms)" : "400ms",
            }}
          >
            <span className="-mr-[0.4em] uppercase">
              {t("header.nav.home")}
            </span>
          </Button>
          <Button
            variant="nav"
            size="nav"
            href="/skills"
            className={cn(
              "nav-item opacity-0",
              location.pathname === "/skills" && "active",
            )}
            style={{
              animation: "dropIn 1000ms ease forwards",
              animationDelay: isFirstLoad ? "calc(2300ms + 600ms)" : "600ms",
            }}
          >
            <span className="-mr-[0.4em] uppercase">
              {t("header.nav.skills")}
            </span>
          </Button>
          <span
            className="nav-anchor-line opacity-0"
            style={{
              animation: "fadeIn 1000ms ease forwards",
              animationDelay: isFirstLoad ? "calc(2200ms + 800ms)" : "800ms",
            }}
          />
        </nav>
        <LanguageToggle />
      </div>
      <button
        className="group grid aspect-square h-full place-items-center lg:hidden"
        onClick={() => setOpen((prevState) => !prevState)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <svg
          className="pointer-events-none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L20 12"
            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
          />
          <path
            d="M4 12H20"
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
          />
          <path
            d="M4 12H20"
            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
          />
        </svg>
      </button>
      <div
        className={cn(
          "fixed inset-0 top-16 left-0 grid",
          !open && "pointer-events-none",
        )}
      >
        <div className="grid size-full grid-cols-7 grid-rows-11 [grid-area:1/1]">
          {Array.from({ length: 77 }, (_, i) => {
            const row = Math.floor(i / 7);
            const col = i % 7;
            const distanceFromTopRight = Math.sqrt(
              row * row + (6 - col) * (6 - col),
            );
            const maxDistance = Math.sqrt(10 * 10 + 6 * 6);
            const delayPerUnit = 40;

            const delay = open
              ? distanceFromTopRight * delayPerUnit
              : (maxDistance - distanceFromTopRight) * delayPerUnit;

            return (
              <div
                key={i}
                className={cn(
                  "bg-background opacity-0 transition-all",
                  open && "opacity-100",
                )}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
