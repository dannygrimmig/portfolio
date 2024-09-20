export function Button({
  type = "primary",
  text,
  className = "",
  disabled = false,
  onClick,
}: {
  type: "primary" | "secondary";
  text: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`border border-black p-4
        ${className}
        ${type === "primary" && "bg-black text-white hover:bg-sky-800"}
        ${type === "secondary" && "bg-white hover:bg-sky-200"}
        `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
