import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionList({ items, idPrefix = "item" }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={`${idPrefix}-${index}`}
          value={`${idPrefix}-${index}`}
          className="border-b border-gold-light/70"
        >
          <AccordionTrigger className="py-5 text-left font-body text-[0.92rem] font-medium text-navy hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-[0.875rem] leading-relaxed text-mutedink">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}