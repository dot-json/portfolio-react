import { useTranslation } from "react-i18next";
import { useReveal } from "../components/reveal";

const Education = () => {
  const { t } = useTranslation();
  const { isFirstLoad } = useReveal();

  return (
    <section
      className="flex flex-col gap-6 opacity-0"
      style={{
        animation: "sectionIn 1000ms ease forwards",
        animationDelay: isFirstLoad ? "calc(2200ms + 600ms)" : "600ms",
      }}
    >
      <h2 className="text-3xl font-semibold sm:text-4xl">
        {t("education.title")}
      </h2>
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <img
          src="/images/elte.png"
          alt="Eötvös Loránd Tudományegyetem"
          className="cover size-10 sm:size-14"
        />
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl leading-5 font-medium sm:text-2xl sm:leading-7">
              {t("education.institution")}
            </h3>
            <p className="text-foreground-muted text-sm sm:text-base">
              {t("education.degree")}
            </p>
            <p className="text-foreground-muted/75 text-xs">
              {t("education.location")}
            </p>
          </div>
          <p className="text-sm sm:text-base">{t("education.dates")}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
