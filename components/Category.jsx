import { category } from "@/public/data";
import { Button } from "@/components/ui/button";

function Category() {
  return (
    <div className="">
      <div className="max-w-[300px] flex gap-2 flex-wrap">
        {category.map((item, i) => (
          <Button
            variant="outline"
            key={i}
            className="bg-transparent  backdrop-blur-[2px]"
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Category;
