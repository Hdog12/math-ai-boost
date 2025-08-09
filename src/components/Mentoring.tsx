import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Mentoring = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    helpfulInfo: '',
    timezone: '',
    weeklyHours: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        helpfulInfo: '',
        timezone: '',
        weeklyHours: ''
      });
    }, 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="mentoring" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            1-to-1 Online Tutoring
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized support from experienced IB graduates who understand your challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our 1-to-1 online tutoring sessions are led by DTU engineering students who have successfully completed the IB program themselves. With over 200 hours of combined tutoring experience specifically in IB Mathematics, we understand the unique challenges students face and know exactly how to help you overcome them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus on student-centered approaches, adapting our teaching methods to your learning style and pace. Whether you're struggling with specific concepts, need help with exam preparation, or want to achieve the highest possible grades, our tutors provide the personalized support you need to succeed in Math AI or Math AA.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Our Tutoring?</h3>
              <div className="space-y-3">
                {[
                  '200+ hours of IB Math tutoring experience',
                  'DTU engineering students with proven academic excellence',
                  'IB graduates who understand the curriculum inside-out',
                  'Flexible scheduling to fit your timezone',
                  'Personalized lesson plans based on your needs',
                  'Both Math AI SL/HL and Math AA SL/HL covered'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tutoring Interest Form */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Tutoring Interest Form
              </CardTitle>
              <p className="text-muted-foreground">
                Tell us about your needs and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Request Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest in our tutoring services. We'll contact you within 24 hours to discuss your needs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="focus-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="focus-ring"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="helpfulInfo">Helpful Information</Label>
                    <Textarea
                      id="helpfulInfo"
                      placeholder="Tell us about your current level, specific topics you need help with, or any other relevant information..."
                      value={formData.helpfulInfo}
                      onChange={(e) => handleInputChange('helpfulInfo', e.target.value)}
                      rows={4}
                      className="focus-ring"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Input
                        id="timezone"
                        type="text"
                        placeholder="e.g., UTC+1, EST, etc."
                        value={formData.timezone}
                        onChange={(e) => handleInputChange('timezone', e.target.value)}
                        className="focus-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weeklyHours">Weekly Hours Needed</Label>
                      <Select onValueChange={(value) => handleInputChange('weeklyHours', value)}>
                        <SelectTrigger className="focus-ring">
                          <SelectValue placeholder="Select hours" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hour</SelectItem>
                          <SelectItem value="2">2 hours</SelectItem>
                          <SelectItem value="3-5">3-5 hours</SelectItem>
                          <SelectItem value="5+">5+ hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 focus-ring"
                  >
                    Request Mentoring
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mentoring;