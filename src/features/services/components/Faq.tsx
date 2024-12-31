import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Question = {
  id: string;
  ques: string;
  ans: string;
};

type Questions = Question[];

const questions: Questions = [
  {
    id: "20205166",
    ques: "Lorem ipsum dolor sit amet",
    ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, impedit dignissimos neque minima corporis, eum accusantium quaerat repudiandae molestiae porro expedita autem. Sunt laudantium rerum ipsum, sint saepe debitis perspiciatis.",
  },
  {
    id: "20205167",
    ques: "Lorem ipsum dolor sit amet",
    ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, impedit dignissimos neque minima corporis, eum accusantium quaerat repudiandae molestiae porro expedita autem. Sunt laudantium rerum ipsum, sint saepe debitis perspiciatis.",
  },
  {
    id: "20205168",
    ques: "Lorem ipsum dolor sit amet",
    ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, impedit dignissimos neque minima corporis, eum accusantium quaerat repudiandae molestiae porro expedita autem. Sunt laudantium rerum ipsum, sint saepe debitis perspiciatis.",
  },
];

function Faq() {
  if (!questions.length) return null;
  return (
    <section>
      <div className="container mx-auto my-4 px-6 md:mt-10">
        <h1 className="text-center text-xl font-extrabold text-gray-600">
          Frequently asked questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-2 max-w-3xl rounded-md border border-gray-200 p-4 shadow-sm"
        >
          {questions.map((question) => (
            <AccordionItem value={String(question.id)} key={question.id}>
              <AccordionTrigger>{question.ques}</AccordionTrigger>
              <AccordionContent>{question.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
