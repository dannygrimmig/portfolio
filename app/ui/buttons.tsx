type ButtonProps = {
  type: "primary" | "secondary";
  text: string;
};

export function Button(props: ButtonProps) {
  const { type, text } = props;

  return (
    <h3
      className={`px-6 py-3 rounded-md border border-black w-max ${
        type === "primary" && "bg-sky-600 text-white"
      }`}
    >
      {text}
    </h3>
  );
}

type CategoryButtonProps = {
  key: string;
  image: string;
  onClick: () => void;
};

export function CategoryButton(props: CategoryButtonProps) {
  const { key, image, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      key={key}
      className="rounded-md p-4 bg-sky-50 h-24 w-24 flex justify-center items-center"
    >
      <img src={image} className="rounded-md" />
    </button>
  );
}
