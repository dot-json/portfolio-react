import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-border focus-visible:ring-border/50 focus-visible:ring-[3px] cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        outline:
          "border bg-transparent hover:bg-foreground hover:text-background hover:border-foreground",
        ghost: "hover:bg-foreground hover:text-background",
        nav: "tracking-[0.4em] font-light",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        nav: "h-fit py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ComponentProps<"button">, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.ComponentProps<"a">, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const button = ({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) => {
  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        href={href}
        target="_blank"
        className={cn(buttonVariants({ variant, size, className }))}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { onClick, ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default button;
