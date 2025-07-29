import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Size = "sm" | "md" | "xl" | "2xl";
type Variant = "primary" | "inverted" | "ghost";

interface CommonProps {
  label: ReactNode; // 👈 ahora puede ser texto, imagen, ícono, etc.
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
  className?: string;
}

type ButtonProps = CommonProps &
  (
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  xl: "px-6 py-3 text-lg",
  "2xl": "px-8 py-4 text-xl",
};

const CustomButton = ({
  label,
  size = "md",
  variant = "primary",
  disabled = false,
  href,
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "rounded font-medium transition-colors duration-200 inline-flex items-center justify-center text-center cursor-pointer";

  const variants: Record<Variant, string> = {
    primary: "bg-[#053158] text-white hover:bg-[#053158]/90",
    inverted: "bg-white text-[#053158] border border-[#053158] hover:bg-[#053158] hover:text-white",
    ghost: "bg-transparent text-[#053158] hover:text-[#053158]/70",
  };

  const disabledClass = "opacity-50 cursor-not-allowed pointer-events-none";

  const combinedClass = `${base} ${sizeClasses[size]} ${variants[variant]} ${
    disabled ? disabledClass : ""
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className={combinedClass}
      disabled={disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {label}
    </button>
  );
};

export default CustomButton;
