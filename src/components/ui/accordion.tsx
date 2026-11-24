import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn("border-b border-line-strong", className)} {...props} />
}

export function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn("group flex flex-1 items-center justify-between gap-6 py-5 text-left text-lg font-medium tracking-tight transition-colors hover:text-green-deep sm:text-xl", className)}
        {...props}
      >
        {children}
        <Plus aria-hidden className="size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content className="overflow-hidden text-muted-foreground" {...props}>
      <div className={cn("pb-5 pr-10", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
