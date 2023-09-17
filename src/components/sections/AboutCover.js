import Image from "next/image";

import characterImg from "@public/images/character.png"

const AboutCover = () => {
    return (
        <section className="w-full h-[75vh] flex items-center justify-center border-b-2 border-dark text-dark">
            <div className="w-1/2 h-full flex justify-center border-r-2 border-dark">
                <Image
                    src={characterImg}
                    alt="about page"
                    className="w-full h-full object-center object-contain"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center px-16">
                <h2 className="font-bold text-6xl">
                    Dream Big, Work Hard, Achieve More!
                </h2>
                <p className="text-base font-medium mt-4">
                    This Mantra Drives My Work As A Passionate Freelancer. I Blend Innovative Technology With Timeless
                    Design For Captivating Digital Experiences. Inspired By Nature And Literature, I'm A Perpetual
                    Learner Embracing Challenges. With Each Project, I Aim To Leave A Lasting Impact—One Pixel At A
                    Time.
                </p>
            </div>
        </section>
    );
};

export default AboutCover;