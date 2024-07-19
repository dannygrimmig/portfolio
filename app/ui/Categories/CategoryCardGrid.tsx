import { Category } from "../../lib/definitions";
import { CategoryCard } from "./CategoryCard";

type CategoryGridProps = {
  activeCategory?: Category;
  categories: Category[];
  onCategoryChange: (project: Category) => void;
  className?: string;
  cardType?: "primary" | "secondary";
};

export function CategoryGrid(props: CategoryGridProps) {
  const {
    activeCategory,
    categories,
    onCategoryChange,
    className = "",
    cardType,
  } = props;

  return (
    <div className={`w-full min-h-[calc(100vh-74px)] ${className}`}>
      {categories.map((category) => (
        <CategoryCard
          key={category.key}
          isActive={category.key === activeCategory?.key}
          className={category.className}
          onClick={() => onCategoryChange(category)}
          category={category}
          cardType={cardType}
        />
      ))}
    </div>
  );
}
