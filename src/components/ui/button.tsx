import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Pill buttons with a small uppercase label.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full text-[0.72rem] font-medium uppercase tracking-[0.1em] transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-out-expo)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5",
  {
    variants: {
      variant: {
        default: "bg-ink text-background hover:bg-primary hover:text-ink",
        green: "bg-primary text-ink hover:bg-ink hover:text-background",
        light: "bg-card text-ink hover:bg-ink hover:text-background",
        ink: "bg-ink text-background hover:bg-primary hover:text-ink",
        outline: "border border-line-strong bg-transparent text-foreground hover:border-ink hover:bg-ink hover:text-background",
        outlineLight: "border border-background/40 bg-transparent text-background hover:border-primary hover:bg-primary hover:text-ink",
        link: "px-0 text-green-deep underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4",
        lg: "h-14 px-8",
        icon: "size-12",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  },
)
Button.displayName = "Button"
export { buttonVariants }
