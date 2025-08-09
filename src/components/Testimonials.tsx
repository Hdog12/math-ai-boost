import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah M.',
      grade: 'IB Student',
      text: 'The revision videos helped me understand concepts I struggled with all year. Got a 6 in Math AI SL!',
      rating: 5
    },
    {
      name: 'Alex K.',
      grade: 'IB Graduate',
      text: 'The exam-style questions were exactly what I needed. The mock exams prepared me perfectly for the real thing.',
      rating: 5
    },
    {
      name: 'Emma L.',
      grade: 'IB Student',
      text: 'Amazing resources! The revision sheet alone saved me so much time organizing my studies.',
      rating: 5
    },
    {
      name: 'David P.',
      grade: 'IB Graduate',
      text: 'The tutoring was excellent. Javier and Frederik really know how to explain complex topics simply.',
      rating: 5
    },
    {
      name: 'Maya S.',
      grade: 'IB Student',
      text: 'Best investment for IB Math! The complete study set gave me confidence going into my exams.',
      rating: 5
    },
    {
      name: 'Tom R.',
      grade: 'IB Graduate',
      text: 'The passing guarantee shows how confident they are in their materials. Highly recommend!',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-accent-yellow' : 'text-muted'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from IB students who have successfully used our resources to excel in Math AI SL.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.grade}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic text-lg">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                <div className="text-muted-foreground">{testimonials[currentTestimonial].grade}</div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors focus-ring ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;