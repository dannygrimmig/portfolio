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
