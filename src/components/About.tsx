import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: 'Javier',
      title: 'Co-Founder & IB Math Specialist',
      description: 'Electrical engineering student and IB graduate with extensive experience in Math AI and AA. Passionate about helping students understand complex mathematical concepts through clear, structured teaching methods.',
      experience: '100+ tutoring hours',
      specialty: 'Math AA SL/HL'
    },
    {
      name: 'Frederik',
      title: 'Co-Founder & Curriculum Expert',
      description: 'Energy technology engineering student and IB graduate specializing in exam preparation and curriculum design. Expert in creating study materials that align perfectly with IB assessment criteria.',
      experience: '100+ tutoring hours',
      specialty: 'Math AI SL/HL'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the team behind Mentoring CPH - experienced IB graduates and DTU engineering students dedicated to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-8">
                {/* Photo Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>

                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  <div className="flex justify-center space-x-8 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-muted-foreground">Total Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">IB</div>
                      <div className="text-sm text-muted-foreground">Graduate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">DTU</div>
                      <div className="text-sm text-muted-foreground">Student</div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm font-semibold text-foreground mb-1">
                      Specialty
                    </div>
                    <div className="text-primary font-medium">
                      {member.specialty}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center mt-16 space-y-6">
          <div className="bg-background rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As recent IB graduates who successfully navigated the challenging Math AI and AA courses, we understand firsthand the struggles students face. Now studying engineering at DTU (Technical University of Denmark), we've combined our academic success with over 200 hours of tutoring experience to create comprehensive resources that truly work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We believe that every student can excel in IB Mathematics with the right guidance and materials. That's why we've created Mentoring CPH - to provide the support we wish we had during our own IB journey.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Tutoring Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">26</div>
              <div className="text-muted-foreground">Video Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">125+</div>
              <div className="text-muted-foreground">Practice Questions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
