import Image from "next/image";
import emptyimage from "../../../public/images/elementor-placeholder-image.webp";
import { Badge } from "../Badges/Badge";
import { Category } from "../../lib/definitions";

type CategoryCardProps = {
  isActive: boolean;
  className?: string;
  onClick: () => void;
  category: Category;
  cardType?: "primary" | "secondary";
};

export function CategoryCard(props: CategoryCardProps) {
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
      className={`relative p-4 text-left ${className} 
         transition-all duration-300 hover:shadow-black hover:shadow-[4px_4px]
          ${isPrimaryCard ? "min-h-60" : "min-h-80 nav-item"} 
          ${isActive && "outline outline-black shadow-black shadow-[4px_4px]"}`}
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
