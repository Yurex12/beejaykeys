import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFaqs } from "@/features/AdminFaqs/hooks/useFaqs";
import FaqsContainer from "./FaqsContainer";
import FaqsSkeleton from "./FaqsSkeleton";

function Faqs() {
  const { faqs, isLoading, error } = useFaqs();

  if (isLoading)
    return (
      <FaqsContainer>
        <FaqsSkeleton />
      </FaqsContainer>
    );
  if (error) return null;
  if (!faqs?.length) return null;

  return (
    <FaqsContainer>
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-2 max-w-3xl rounded-md border border-gray-200 p-4 shadow-sm"
      >
        {faqs.map((faq) => (
          <AccordionItem value={faq._id} key={faq._id}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FaqsContainer>
  );
}

export default Faqs;
