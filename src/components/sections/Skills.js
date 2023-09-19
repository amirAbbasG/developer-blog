
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
        <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-dark text-dark dark:text-light">
            <p className="text-xl sm:text-3xl md:text-4xl font-semibold text-accent dark:text-accentDark">i'm comfortable in...</p>
            <ul className="flex flex-wrap mt-8 gap-3 xs:gap-4 md:gap-6 max-xs:justify-center">
                {
                    skillList.map(skill => (
                        <li key={skill} className="inline-block py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12
                         font-semibold dark:font-normal capitalize text-base xs:text-lg sm:text-xl md:text-2xl
                        border-2 border-dark dark:border-light rounded hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">


                            {skill}
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Skills;