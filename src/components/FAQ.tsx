import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Mentoring CPH and who is it for?',
      answer: 'Mentoring CPH is an educational platform created by DTU engineering students who are IB graduates. We specialize in Math AI SL resources and tutoring, designed specifically for IB students who want to excel in their mathematics studies. Our materials are perfect for students at any level, from those struggling with concepts to those aiming for top grades.'
    },
    {
      question: "What's included in each package?",
      answer: 'Videos: 26 comprehensive videos covering all sub-topics in the Math AI SL syllabus (~9 hours total). Questions: 125 exam-style questions plus 2 complete mock exam sets focusing on tricky areas. Complete Set: Both the video course and all exam-style questions at a discounted price with our passing guarantee.'
    },
    {
      question: 'Do the resources cover the full syllabus?',
      answer: 'Yes, absolutely! Our resources are meticulously designed to cover every topic and sub-topic in the IB Math AI SL syllabus. We understand exactly what the IB expects because we\'ve been through the program ourselves and have 200+ hours of tutoring experience.'
    },
    {
      question: 'Can schools use this for all students?',
      answer: 'Yes, we offer institutional packages for schools. If you\'re a teacher or school administrator interested in using our resources for multiple students, please contact us at info@mentoringcph.com to discuss bulk pricing and school licenses.'
    },
    {
      question: 'How do I get access after payment?',
      answer: 'After payment, you\'ll be redirected to a short Google form where you\'ll provide your email and other details. Access to your purchased resources will be granted through our revision sheet system, and you\'ll receive detailed instructions via email within 24 hours.'
    },
    {
      question: 'What is the "passing guarantee"?',
      answer: 'Our passing guarantee applies to the Complete Study Set (€99). If you complete all our materials and still don\'t pass your final IB Math AI SL exam, we will refund the full cost. See our Passing Guarantee PDF for complete terms and conditions.'
    },
    {
      question: 'Can I share the resources?',
      answer: 'Only the free revision sheet is designed to be shareable. All paid resources (videos and exam questions) are for individual use only and sharing is prohibited under our terms and conditions. Each purchase grants access to one student only.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our resources and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-card-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;