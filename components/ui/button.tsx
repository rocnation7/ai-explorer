import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#1a1f36] text-white hover:bg-[#252b47] shadow-sm",
        primary:
          "bg-[#b8945f] text-[#1a1f36] hover:bg-[#a37f4a] font-semibold shadow-md hover:shadow-lg",
        outline:
          "border-2 border-[#1a1f36] bg-transparent hover:bg-[#1a1f36] hover:text-white",
        ghost: "hover:bg-[#f5f5f0] hover:text-[#1a1f36]",
        link: "text-[#1a1f36] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-[15px]",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
