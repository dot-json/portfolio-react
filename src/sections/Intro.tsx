import { useTranslation } from "react-i18next";
import Button from "../components/ui/button";
import { ScrollText } from "lucide-react";
import { GitHub } from "../components/ui/logos/github";
import { LinkedIn } from "../components/ui/logos/linkedin";
import { useReveal } from "../components/reveal";

const Intro = () => {
  const { t } = useTranslation();
  const { isFirstLoad } = useReveal();

  return (
    <section
      className="flex flex-col gap-4 opacity-0"
      style={{
        animation: "sectionIn 1000ms ease forwards",
        animationDelay: isFirstLoad ? "2200ms" : "0ms",
      }}
    >
      <div className="grid gap-8 sm:grid-cols-[auto_1fr]">
        <img
          src="/images/profile_no_bg.png"
          alt="profile"
          className="size-48 border backdrop-blur-3xl"
        />
        <div className="flex flex-col gap-2 sm:gap-4">
          <h1 className="text-4xl font-bold sm:text-5xl">{t("intro.title")}</h1>
          <p className="text-foreground-muted sm:text-lg">
            {t("intro.description")}
          </p>
        </div>
      </div>
      <div className="flex w-48 justify-between">
        <Button
          variant="outline"
          aria-label={t("intro.resumeAria")}
          href="/doc/CV.pdf"
          target="_blank"
        >
          <ScrollText />
          <span className="text-sm">{t("intro.resume")}</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label={t("intro.githubAria")}
          href="https://github.com/dot-json"
          target="_blank"
        >
          <GitHub />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label={t("intro.linkedinAria")}
          href="https://www.linkedin.com/in/zsombor-gazdag/"
          target="_blank"
        >
          <LinkedIn />
        </Button>
      </div>
    </section>
  );
};

export default Intro;
