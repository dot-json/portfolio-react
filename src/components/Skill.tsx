interface SkillProps {
  name: string;
  name2?: string;
  desc: string;
  icon: string;
  icon2?: string;
  style?: React.CSSProperties;
}

const Skill = ({ name, name2, desc, icon, icon2, style }: SkillProps) => {
  return (
    <div className="flex flex-col opacity-0" style={style}>
      <h2 className="z-10 flex w-fit items-center gap-1.5 border border-b-0 px-3 py-2 font-medium">
        <img
          src={icon}
          alt={name}
          className="size-5 object-cover object-center"
        />
        <span>{name}</span>
        {name2 && (
          <>
            <span>&</span>
            <img src={icon2} alt={name2} className="size-5" />
            <span>{name2}</span>
          </>
        )}
      </h2>
      <p className="border p-4">{desc}</p>
    </div>
  );
};

export default Skill;
