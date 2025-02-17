import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="border-secondary flex rounded-md border-b-2">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "hover:text-secondary [&[data-state=open]]:text-secondary flex flex-1 items-center justify-start gap-5 py-5 pl-5 text-left text-[26px] font-[900] tracking-tight text-white transition-all lg:py-[22px] lg:pl-6 [&[data-state=open]>svg]:rotate-90",
        className
      )}
      {...props}
    >
      <svg
        width="13"
        className="transition-all"
        height="20"
        viewBox="0 0 13 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.44873 0L12.4487 10L0.44873 20L0.44873 0Z" fill="#8CFF6D" />
      </svg>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
    {...props}
  >
    <div className={cn("pt-8 pr-4 pb-5 pl-6 text-lg md:text-xl lg:pl-[60px]", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
