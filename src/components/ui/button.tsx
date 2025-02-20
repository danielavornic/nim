import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center select-none justify-center cursor-pointer gap-2 font-bold uppercase  whitespace-nowrap text-[26px] duration-500 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-white hover:bg-transparent font-[900] tracking-[-0.04em] rounded-[7px] max-w-md:bg-transparent active:bg-transparent text-background relative before:absolute before:-z-10 before:inset-0 before:bg-radial before:from-go-neon-green before:rounded-[7px] before:from-40% before:to-accent before:opacity-0 hover:before:opacity-100 max-w-md:before:opacity-100 active:before:opacity-100 before:transition-opacity before:duration-300 [&>*]:relative",
        outline:
          "border border-secondary bg-gradient-to-r font-bold tracking-[-0.06em] from-go-neon-green to-secondary bg-clip-text bg-background hover:bg-clip-padding max-w-md:max-w-md:bg-clip-padding active:bg-clip-padding hover:bg-gradient-to-r hover:from-go-neon-green hover:to-secondary hover:text-background max-w-md:bg-gradient-to-r max-w-md:from-go-neon-green max-w-md:to-secondary max-w-md:text-background active:bg-gradient-to-r active:from-go-neon-green active:to-secondary active:text-background",

        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-[52px] leading-[26px] pt-1 md:pt-0 leading-tight px-[30px] px-7 text-[22px]",
        lg: "1.5xl:h-[70px] 1.5xl:px-20 1.5xl:text-[33px] pt-2 lg:pt-0 px-16 h-[60px] text-[30px]",

        sm: "h-8 px-3 text-xs",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
