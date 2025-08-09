const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cookie-free analytics placeholder comment */}
        {/* Analytics code would go here for cookie-free tracking */}
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted">
              © {currentYear} Mentoring CPH. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6 text-sm">
            <a
              href="https://drive.google.com/file/d/11sNyNx4URC0iaPCP2-7LAnogyVaqr7v5/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-background transition-colors focus-ring"
            >
              Terms & Conditions
            </a>
            <a
              href="https://drive.google.com/file/d/1UXKHCBEadbgW2dtMV30e3PJQk445nFuQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-background transition-colors focus-ring"
            >
              Passing Guarantee
            </a>
          </div>
        </div>

        {/* Additional Footer Content */}
        <div className="mt-8 pt-8 border-t border-muted/20">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Mentoring CPH</h3>
              <p className="text-muted text-sm leading-relaxed">
                Expert IB Math AI SL resources and tutoring by DTU engineering students. 
                Helping students excel in their IB Mathematics journey.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted hover:text-background transition-colors focus-ring"
                >
                  Resources
                </button>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted hover:text-background transition-colors focus-ring"
                >
                  FAQ
                </button>
                <button
                  onClick={() => document.getElementById('mentoring')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted hover:text-background transition-colors focus-ring"
                >
                  Mentoring
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted hover:text-background transition-colors focus-ring"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted">
                <p>info@mentoringcph.com</p>
                <p>+45 22 22 83 14</p>
                <p>+45 52 11 96 92</p>
                <p className="text-xs">
                  Ringvej 52<br />
                  2970 Hørsholm<br />
                  Denmark
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-6 border-t border-muted/20 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/mentoringcph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-background transition-colors focus-ring"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM12 5.351c2.22 0 2.481.01 3.356.048.81.037 1.25.166 1.542.276.388.151.665.331.956.622.291.291.471.568.622.956.11.292.24.732.276 1.542.038.875.047 1.137.047 3.356s-.009 2.481-.047 3.356c-.036.81-.166 1.25-.276 1.542-.151.388-.331.665-.622.956-.291.291-.568.471-.956.622-.292.11-.732.24-1.542.276-.875.038-1.137.047-3.356.047s-2.481-.009-3.356-.047c-.81-.036-1.25-.166-1.542-.276a2.578 2.578 0 01-.956-.622 2.578 2.578 0 01-.622-.956c-.11-.292-.24-.732-.276-1.542C5.361 14.481 5.351 14.22 5.351 12s.01-2.481.048-3.356c.036-.81.166-1.25.276-1.542.151-.388.331-.665.622-.956.291-.291.568-.471.956-.622.292-.11.732-.24 1.542-.276.875-.038 1.137-.047 3.356-.047zm0 1.802a4.847 4.847 0 100 9.694 4.847 4.847 0 000-9.694zm0 7.991a3.144 3.144 0 110-6.288 3.144 3.144 0 010 6.288zm6.406-8.845a1.134 1.134 0 11-2.268 0 1.134 1.134 0 012.268 0z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/mentoringcph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-background transition-colors focus-ring"
              aria-label="Connect with us on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;