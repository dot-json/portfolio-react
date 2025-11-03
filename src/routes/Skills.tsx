import { useTranslation } from "react-i18next";
import Skill from "../components/Skill";
import { useReveal } from "../components/reveal";

const Skills = () => {
  const { t } = useTranslation();
  const { isFirstLoad } = useReveal();

  const skills = t("skills", { returnObjects: true }) as Array<{
    name: string;
    name2?: string;
    desc: string;
    icon: string;
    icon2?: string;
  }>;

  return (
    <div className="flex w-full flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <section className="flex flex-col gap-8">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            name2={skill.name2}
            desc={skill.desc}
            icon={skill.icon}
            icon2={skill.icon2}
            style={{
              animation: "sectionIn 800ms ease forwards",
              animationDelay: isFirstLoad
                ? `calc(2200ms + ${index * 200}ms)`
                : `${index * 200}ms`,
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default Skills;
