import {LottieAnimation} from "@/components/Elements";
import {ContactForm} from "@/components/forms";
import siteMetadata from "@/utils/siteMetaData";

export const metadata = {
    title: "Contact me",
    description: `Contact me through the form in this page or email me at ${siteMetadata.email}.`
}


const Contact = () => {
    return (
        <section className="w-full md:h-[75vh] flex flex-col md:flex-row justify-center items-center border-b-2 border-dark dark:border-light text-dark dark:text-light">
            <div className="w-full md:w-2/5 h-full inline-block md:border-r-2 border-dark dark:border-light">
                <LottieAnimation/>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center px-5 sm:px-10 lg:px-16 pb-8">
                <h2 className='font-bold text-2xl xs:text-3xl sm:text-4xl'>Let's Connect</h2>
                <ContactForm/>
            </div>
        </section>
    );
};

export default Contact;