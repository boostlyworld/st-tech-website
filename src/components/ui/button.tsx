import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white shadow-button hover:bg-primary-700 hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-white text-navy-900 border border-navy-200 shadow-card hover:border-primary-300 hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-primary-600 text-primary-600 hover:bg-primary-50 hover:-translate-y-0.5",
        ghost:
          "text-navy-600 hover:bg-navy-50 hover:text-navy-900",
        white:
          "bg-white text-primary-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
        "white-outline":
          "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 py-3.5 text-base",
        xl: "h-14 px-10 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
