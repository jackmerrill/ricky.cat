export type ButtonType = "button" | "submit" | "reset" | "link";

export type ButtonStyle = {
  type:
    | "primary"
    | "glass"
    | "secondary"
    | "destructive"
    | "link"
    | "warning"
    | "success"
    | "disabled";
  color: string;
  text: string;
  border: string;
  hover: string;
};

export interface ButtonProps {
  type: ButtonType;
  style: ButtonStyle["type"];
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;

  // If type is "link", href is required
  href?: string;

  // If type is "link", target is optional
  target?: string;

  // If type is "link", rel is optional
  rel?: string;
}

const buttonStyles: ButtonStyle[] = [
  {
    type: "primary",
    color: "bg-gray-900",
    text: "text-white",
    border:
      "bg-gradient-to-br from-teal-300 via-blue-500 to-indigo-600 bg-clip-border bg-clip-padding bg-origin-border bg-origin-padding",
    hover: "hover:shadow-xl hover:scale-105 transition-all duration-300",
  },
  {
    type: "glass",
    color: "bg-gray-50 dark:bg-black-800 bg-opacity-50 shadow-lg",
    text: "text-black-900 dark:text-white",
    border: "border-gray-900",
    hover: "hover:shadow-xl hover:scale-105 transition-all duration-300",
  },
];

export default function Button(props: ButtonProps) {
  const style = buttonStyles.find((s) => s.type === props.style);
  const defaultStyles = "px-4 py-2 rounded-md font-semibold";
  if (!style) {
    throw new Error(`Button style "${props.style}" not found`);
  }

  if (props.type === "link") {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={`${defaultStyles} border- ${style.color} ${style.text} ${style.border} ${style.hover} ${props.className}`}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${defaultStyles} ${style.color} ${style.text} ${style.border} ${style.hover} ${props.className}`}
    >
      {props.children}
    </button>
  );
}
