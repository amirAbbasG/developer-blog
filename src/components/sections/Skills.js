
const skillList = [
    "next.js",
    "tailwind css",
    "material ui",
    "javaScript",
    "web design",
    "typeScript",
    "react",
    "react native",
    "native base",
    "redux",
    "react query",
    "framer motion",
    "axios",
];

const Skills = () => {
    return (
        <section className="w-full flex flex-col p-20 border-b-2 border-dark text-dark">
            <p className="text-4xl font-semibold text-accent">i'm comfortable in...</p>
            <ul className="flex flex-wrap mt-8 gap-6">
                {
                    skillList.map(skill => (
                        <li key={skill} className="inline-block py-5 px-12 font-semibold capitalize text-2xl border-2 border-dark rounded
                        hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                            {skill}
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Skills;