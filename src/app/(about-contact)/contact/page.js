import {LottieAnimation} from "@/components/Elements";
import {ContactForm} from "@/components/forms";

const Page = () => {
    return (
        <section className="w-full h-[75vh] flex justify-center items-center border-b-2 border-dark text-dark">
            <div className="w-2/5 h-full inline-block border-r-2 border-dark">
                <LottieAnimation/>
            </div>
            <div className="w-3/5 flex flex-col justify-center px-16 pb-8">
                <h2 className='font-bold text-4xl'>Let's Connect</h2>
                <ContactForm/>
            </div>
        </section>
    );
};

export default Page;