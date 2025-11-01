import { useTranslation } from "react-i18next";
import { useReveal } from "../components/reveal";

const Work = () => {
  const { t } = useTranslation();
  const { isFirstLoad } = useReveal();

  const jobs = [
    {
      key: "oracle" as const,
      image: "/images/oracle.jpg",
      alt: "Oracle",
    },
    {
      key: "moonlabs" as const,
      image: "/images/moonlabs.jpeg",
      alt: "Moonlabs",
    },
  ];

  return (
    <section
      className="flex flex-col gap-6 opacity-0"
      style={{
        animation: "sectionIn 1000ms ease forwards",
        animationDelay: isFirstLoad ? "calc(2200ms + 300ms)" : "300ms",
      }}
    >
      <h2 className="text-3xl font-semibold sm:text-4xl">{t("work.title")}</h2>
      <div className="flex flex-col gap-8">
        {jobs.map((job) => (
          <div key={job.key} className="grid grid-cols-[auto_1fr] gap-4">
            <img
              src={job.image}
              alt={job.alt}
              className="cover size-10 sm:size-14"
            />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-xl leading-5 font-medium sm:text-2xl sm:leading-7">
                    {t(`work.jobs.${job.key}.company`)}
                  </h3>
                  <p className="text-foreground-muted text-sm sm:text-base">
                    {t(`work.jobs.${job.key}.position`)}
                  </p>
                  <p className="text-foreground-muted/75 text-xs">
                    {t(`work.jobs.${job.key}.location`)}
                  </p>
                </div>
                <p className="text-sm sm:text-base">
                  {t(`work.jobs.${job.key}.dates`)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(
                  t(`work.jobs.${job.key}.skills`, {
                    returnObjects: true,
                  }) as string[]
                ).map((skill, index) => (
                  <span
                    key={index}
                    className="border-border/75 border px-2 py-1 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-surface-text/75">
                {t(`work.jobs.${job.key}.desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
