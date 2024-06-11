import Image from "next/image";
import { Badge } from "./badges";
import { Category } from "../lib/definitions";
import emptyimage from "../../public/images/elementor-placeholder-image.webp";

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

type CategoryCardProps = {
  isActive: boolean;
  className?: string;
  onClick: () => void;
  category: Category;
  cardType?: "primary" | "secondary";
};

function CategoryCard(props: CategoryCardProps) {
  // imported
  const {
    isActive,
    className = "",
    onClick,
    category,
    cardType = "primary",
  } = props;

  // derived
  const isPrimaryCard = cardType === "primary";

  return (
    <button
      onClick={onClick}
      className={`relative p-4 text-left ${
        isPrimaryCard ? "min-h-60" : "min-h-80"
      } ${className} ${
        isActive && "border border-black shadow-black shadow-[2px_2px]"
      }`}
    >
      <div className={`${!isPrimaryCard && "relative h-3/4 mb-2"}`}>
        <Image
          src={category.image ?? emptyimage}
          alt=""
          fill
          className="object-cover sm:object-bottom"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          placeholder="blur"
        />
      </div>

      {!!category && (
        <>
          {!!category.imageBadge && (
            <Badge
              text={category.imageBadge.text}
              color={category.imageBadge.color}
              className={`${category.imageBadge.className} absolute top-2 right-2`}
            />
          )}

          <div
            className={`${
              isPrimaryCard && "absolute bottom-2 left-2"
            } px-2 py-1 backdrop-blur-[2px] border border-black shadow-black shadow-[2px_2px]`}
          >
            <h2 className="text-xl font-bold">{category.title}</h2>
            <p>{category.subhead}</p>
          </div>
        </>
      )}
    </button>
  );
}
