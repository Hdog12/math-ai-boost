import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    subject: '',
    message: '',
    agreedToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert('Please agree to the Terms & Conditions before submitting.');
      return;
    }
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        title: '',
        subject: '',
        message: '',
        agreedToTerms: false
      });
    }, 5000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'info@mentoringcph.com',
      href: 'mailto:info@mentoringcph.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: 'Phone',
      value: '+45 22 22 83 14',
      href: 'tel:+4522228314',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      type: 'Phone',
      value: '+45 52 11 96 92',
      href: 'tel:+4552119692',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      type: 'Address',
      value: 'Ringvej 52\n2970 Hørsholm\nDenmark',
      href: 'https://maps.google.com/?q=Ringvej+52,+2970+Hørsholm,+Denmark',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mentoringcph',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.562-.711-.898-1.597-.898-2.562 0-2.24 1.86-4.053 4.152-4.053s4.152 1.813 4.152 4.053c0 .965-.336 1.851-.898 2.562-.749.948-1.9 1.559-3.197 1.559zm7.718 0c-1.297 0-2.448-.611-3.197-1.559-.562-.711-.898-1.597-.898-2.562 0-2.24 1.86-4.053 4.152-4.053s4.152 1.813 4.152 4.053c0 .965-.336 1.851-.898 2.562-.749.948-1.9 1.559-3.197 1.559z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/mentoringcph',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our resources or need personalized tutoring? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{info.type}</div>
                      <a
                        href={info.href}
                        target={info.type === 'Address' ? '_blank' : undefined}
                        rel={info.type === 'Address' ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors focus-ring whitespace-pre-line"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
                    aria-label={`Follow us on ${link.name}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send Us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                We'll get back to you within 24 hours.
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll respond to your message within 24 hours.
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

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Select onValueChange={(value) => handleInputChange('title', value)}>
                        <SelectTrigger className="focus-ring">
                          <SelectValue placeholder="Select your title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="teacher">Teacher/Educator</SelectItem>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="focus-ring">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="resources">Question about resources</SelectItem>
                          <SelectItem value="partnership">School partnership</SelectItem>
                          <SelectItem value="tutoring">Private tutoring</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      className="focus-ring"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                      I have read and agree to the{' '}
                      <a
                        href="https://drive.google.com/file/d/11sNyNx4URC0iaPCP2-7LAnogyVaqr7v5/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline focus-ring"
                      >
                        Terms & Conditions
                      </a>
                      . *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 focus-ring"
                  >
                    Send Message
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

export default Contact;