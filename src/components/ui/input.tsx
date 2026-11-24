import * as React from "react"
import { cn } from "@/lib/utils"

const field = "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:outline-none focus-visible:border-green-deep focus-visible:ring-3 focus-visible:ring-primary/30 aria-[invalid=true]:border-red-600"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(field, "h-12", className)} {...props} />,
)
Input.displayName = "Input"

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => <textarea ref={ref} className={cn(field, "min-h-32 py-3", className)} {...props} />,
)
Textarea.displayName = "Textarea"

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => <select ref={ref} className={cn(field, "h-12 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%235a5550%22 stroke-width=%222%22><path d=%22m4 6 4 4 4-4%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10", className)} {...props} />,
)
Select.displayName = "Select"
