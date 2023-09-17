"use client"
import {useForm} from 'react-hook-form';
import {cx} from "@/utils";

export default function ContactForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const inputClass = "p-0 mx-2 text-center placeholder:text-lg outline-none border-0 border-b border-gray border-dashed focus:ring-0 focus:border-gray bg-transparent"

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 text-xl font-medium font-inter leading-relaxed">
            Hello! My name is <input type="text" placeholder="your name" {...register("name", {required: true})}
                                     className={inputClass}/>
            and i want to discuss a potential. You can email me at <input type="email" placeholder="your @email" {...register}
                                                                          className={inputClass}/>
            or reach out to me on <input type="tel" placeholder="your phone number" {...register("phone number", {})}
                                         className={inputClass}/>
            Here are some details about my project: <br/>
            <textarea
                {...register("project details", {})}
                placeholder="My project is about..."
                rows={3}
                className={cx(inputClass, "w-full inline-block !text-start mt-2")}
            />

            <input
                className="inline-block mt-8 px-8 py-3 font-medium text-xl border-2 border-dark rounded"
                type="submit"
                value="send request"
            />
        </form>
    );
}