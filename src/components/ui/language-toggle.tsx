import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { useReveal } from "../reveal";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const { isFirstLoad } = useReveal();

  return (
    <div
      className="relative flex items-center gap-2 opacity-0"
      style={{
        animation: "dropIn 1000ms ease forwards",
        animationDelay: isFirstLoad ? "calc(2300ms + 800ms)" : "800ms",
      }}
    >
      <button
        className={cn(
          "w-6 transition-opacity [clip-path:polygon(0_0,100%_0,56%_100%,0%_100%)]",
          i18n.language !== "en" &&
            "cursor-pointer opacity-50 hover:opacity-75",
        )}
        onClick={() => i18n.changeLanguage("en")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-sh"
          viewBox="0 0 640 480"
        >
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
          />
          <path
            fill="#C8102E"
            d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
          />
          <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
          <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
        </svg>
      </button>
      <div className="bg-foreground/80 absolute top-1/2 left-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2 rotate-30"></div>
      <button
        className={cn(
          "-ml-1 w-6 origin-[center_left] transition-opacity [clip-path:polygon(44%_0,100%_0,100%_100%,0%_100%)]",
          i18n.language !== "hu" &&
            "cursor-pointer opacity-50 hover:opacity-75",
        )}
        onClick={() => i18n.changeLanguage("hu")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-hu"
          viewBox="0 0 640 480"
        >
          <g fillRule="evenodd">
            <path fill="#fff" d="M640 480H0V0h640z" />
            <path fill="#388d00" d="M640 480H0V320h640z" />
            <path fill="#d43516" d="M640 160.1H0V.1h640z" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default LanguageToggle;
