type Skill = {
    name: string;
    logoSrc: string;
    logoColor?: string;
}

type SkillsProps = {
    skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {skills.map((skill) => (
                <div 
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 bg-dark-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <img 
                        src={skill.logoSrc} 
                        alt={`${skill.name} logo`}
                        className="w-16 h-16 object-contain mb-3"
                        style={skill.logoColor ? { filter: `drop-shadow(0 0 0 ${skill.logoColor})` } : undefined}
                    />
                    <p className="text-fall-white font-medium text-center">{skill.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Skills;
export type { Skill };
