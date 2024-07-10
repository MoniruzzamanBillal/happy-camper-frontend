import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsection = () => {
  return (
    <div className="FAQsectionContainer py-8 bg-gray-100 ">
      <div className="FAQsectionWrapper  w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-8  md:mb-10 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-xl xsm:text-2xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue ">
          FAQ
        </h1>

        <Accordion
          type="single"
          collapsible
          className="  w-[96%] xsm:w-[90%] sm:w-[80%] md:w-[70%] xmd:w-[60%] lg:w-[50%] m-auto text-base sm:text-lg  "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/*  */}
      </div>
    </div>
  );
};

export default FAQsection;
