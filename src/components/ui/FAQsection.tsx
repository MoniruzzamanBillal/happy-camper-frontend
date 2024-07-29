import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TFaqItem = {
  question: string;
  answer: string;
  value: string;
};

const faqsItem: TFaqItem[] = [
  {
    question: "What types of camping equipment do you sell?",
    answer:
      "We sell a wide range of camping equipment including tents, sleeping bags, backpacks, cooking gear, and more.",
    value: "item-1",
  },

  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be in original condition and packaging. Please contact our support team for more details.",
    value: "item-2",
  },
  {
    question: "Are there any discounts for bulk purchases?",
    answer:
      "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.",
    value: "item-3",
  },
  {
    question: "Do you provide warranty on your products?",
    answer:
      "Yes, we provide a one-year warranty on all our products. If you encounter any issues, please contact our support team for assistance.",
    value: "item-4",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support via email at support@campershop.com or call us at (123) 456-7890.",
    value: "item-5",
  },
];

const FAQsection = () => {
  return (
    <div className="FAQsectionContainer py-10 bg-gray-100 ">
      <div className="FAQsectionWrapper  w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-8  md:mb-10 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-xl xsm:text-2xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue ">
          FAQ
        </h1>

        <Accordion
          type="single"
          collapsible
          className="  w-[96%] xsm:w-[90%] sm:w-[80%] md:w-[70%] xmd:w-[60%] lg:w-[50%] m-auto text-base sm:text-lg  "
        >
          {faqsItem &&
            faqsItem?.map((item: TFaqItem) => (
              <AccordionItem key={item?.value} value={item?.value}>
                <AccordionTrigger> {item?.question} </AccordionTrigger>
                <AccordionContent>{item?.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>

        {/*  */}
      </div>
    </div>
  );
};

export default FAQsection;
