import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resources = () => {
  const resources = [
    {
      title: 'Free Math AI SL Revision Sheet',
      bullets: [
        'Covers every concept in the syllabus',
        'Includes personal study tracker',
        'Completely free to use'
      ],
      price: 'FREE',
      isFree: true,
      buttons: [
        {
          text: 'Get Revision Sheet',
          url: 'https://docs.google.com/spreadsheets/d/1FadAtXk0JX2NJECDc-aEWgIlnx0OqOkMhuCxSXU49Bo/template/preview',
          variant: 'primary' as const
        }
      ]
    },
    {
      title: 'Math AI SL Revision Videos',
      bullets: [
        '26 videos (~9 hours total)',
        'Tailored to the full syllabus',
        'Explains what IB expects',
        '€39 for all, €3 per single video',
        'FREE demo available'
      ],
      price: '€39',
      buttons: [
        {
          text: 'Get All Videos',
          url: 'https://buy.stripe.com/7sY8wP4OW146gBK4gm9sk0j',
          variant: 'primary' as const
        },
        {
          text: 'Get Access to One Video',
          url: 'https://buy.stripe.com/fZe7vCdZY726cPC7sH',
          variant: 'secondary' as const
        },
        {
          text: 'Get FREE Demo!',
          url: 'https://forms.gle/AFtZh2kuE52CwUdSA',
          variant: 'outline' as const,
          isFree: true
        }
      ]
    },
    {
      title: 'Math AI SL Exam-Style Questions',
      bullets: [
        '125 questions + 2 full mock exam sets',
        'Focus on tricky areas',
        '€39',
        'FREE demo available'
      ],
      price: '€39',
      buttons: [
        {
          text: 'Get Exam-Style Questions',
          url: 'https://buy.stripe.com/eVq6oHa9gdQS71a0069sk0h',
          variant: 'primary' as const
        },
        {
          text: 'Get FREE Demo!',
          url: 'https://forms.gle/AFtZh2kuE52CwUdSA',
          variant: 'outline' as const,
          isFree: true
        }
      ]
    },
    {
      title: 'Complete Study Set',
      bullets: [
        'ALL videos + ALL questions',
        'Special €69 (save 28%)',
        'PASSING GUARANTEE: if you do not pass your final, we refund the full cost.'
      ],
      price: '€69',
      isSpecial: true,
      buttons: [
        {
          text: 'Get Complete Study Set',
          url: 'https://buy.stripe.com/5kQcN52GOfZ0fxG7sy9sk0i',
          variant: 'primary' as const
        }
      ]
    }
  ];

  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="resources" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to excel in IB Math AI SL, created by experts who understand the curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className={`card-hover relative ${
                resource.isSpecial ? 'ring-2 ring-primary' : ''
              }`}
            >
              {resource.isFree && (
                <div className="absolute -top-3 -right-3">
                  <span className="free-badge px-3 py-1 rounded-full shadow-md">
                    FREE
                  </span>
                </div>
              )}
              {resource.isSpecial && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    SAVE 28%
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {resource.title}
                </CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {resource.price}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {resource.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center mt-1">
                        <svg className="w-2.5 h-2.5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  {resource.buttons.map((button, buttonIndex) => (
                    <Button
                      key={buttonIndex}
                      onClick={() => handleButtonClick(button.url)}
                      variant={button.variant}
                      className={`w-full font-medium focus-ring ${
                        button.variant === 'primary'
                          ? 'bg-primary hover:bg-primary-dark text-primary-foreground'
                          : button.variant === 'outline'
                          ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                          : ''
                      }`}
                    >
                      {button.isFree && (
                        <span className="free-badge mr-2 px-2 py-1 rounded-full">FREE</span>
                      )}
                      {button.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal Links */}
        <div className="text-center space-x-6 text-sm text-muted-foreground">
          <a
            href="https://drive.google.com/file/d/11sNyNx4URC0iaPCP2-7LAnogyVaqr7v5/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors focus-ring"
          >
            Terms & Conditions
          </a>
          <a
            href="https://drive.google.com/file/d/1UXKHCBEadbgW2dtMV30e3PJQk445nFuQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors focus-ring"
          >
            Passing Guarantee (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;
