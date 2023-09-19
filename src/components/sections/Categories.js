import {Tag} from "@/components/Elements";
import {cx} from "@/utils";

const Categories = ({categories, activeCat}) => {
    return (
        <div className="flex flex-wrap py-4 md:px-10 sxl:px-20 mt-10 mx-5 md:mx-10 border-y-2 border-dark dark:border-light gap-3">
            {
                categories.map(cat => (
                    <Tag
                        name={`#${cat}`}
                        link={`/categories/${cat}`}
                        key={cat}
                        className={cx(
                            "!py-2 !lowercase !font-normal whitespace-nowrap",
                            cat === activeCat ?
                                "dark:bg-light dark:border-light dark:text-dark"
                                : "bg-light dark:bg-dark !text-dark dark:!text-light !border-dark dark:!border-light"
                        )}
                    />
                ))
            }
        </div>
    );
};

export default Categories;