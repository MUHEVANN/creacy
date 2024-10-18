"use client";
import { category } from "@/public/data";
import useCategoryStore from "@/store/categoryStore";
function ExpertiseCategory() {
  const { setCategory, category: cat } = useCategoryStore();
  console.log(cat);
  return (
    <ul className="flex flex-row flex-wrap md:flex-col gap-6 ">
      {category.map((item, i) => (
        <li
          key={i}
          className={`text-2xl  capitalize hover:cursor-pointer ${
            cat === item.name ? "text-white" : "text-white/60"
          } hover:text-white transition-300`}
          onClick={() => setCategory(item.name)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ExpertiseCategory;
