"use client"
import { useForm } from 'react-hook-form';

const FooterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-[384px] flex items-stretch p-1 sm:p-2 mx-4 bg-light dark:bg-dark rounded gap-2"
        >
            <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {required: true})}
                className="w-full bg-transparent pb-1 sm:pl-2 pl-0 text-dark dark:text-light border-0 border-b focus:border-dark focus:ring-0"
            />
            <input
                type="submit"
                className="bg-dark dark:bg-light text-light dark:text-dark cursor-pointer rounded font-medium px-3 sm:px-5 py-1"
            />
        </form>
    );
};

export default FooterForm;