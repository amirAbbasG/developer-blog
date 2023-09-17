import {Tag} from "@/components/Elements";
import {cx} from "@/utils";

const Categories = ({categories, activeCat}) => {
    return (
        <div className="flex py-4 px-10 mt-10 mx-10 border-y-2 border-dark gap-3">
            {
                categories.map(cat => (
                    <Tag
                        name={`#${cat}`}
                        link={`/categories/${cat}`}
                        key={cat}
                        className={cx("!py-2 !lowercase !font-normal", cat !== activeCat ? "bg-light !text-dark !border-dark " : "")}
                    />
                ))
            }
        </div>
    );
};

export default Categories;