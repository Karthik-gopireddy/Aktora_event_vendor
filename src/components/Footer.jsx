import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const services = [
    "Premium Venues", "Photography & Videography", "Event Planning", 
    "Decor & Styling", "Catering Services", "Entertainment"
  ];

  const quickLinks = [
    "About Us", "Our Services", "Portfolio", 
    "Testimonials", "Contact", "Privacy Policy"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Premium <span className="text-primary">Events</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating extraordinary celebrations and unforgettable experiences with luxury event services.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 border-border hover:border-primary hover:bg-primary/10 transition-smooth"
                    asChild
                  >
                    <a 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+91 7093556581</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@events.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  123 Luxury Avenue<br />
                  Hyderabad
                </span>
              </div>
            </div>
          </div>
        </div>

      

        {/* Bottom Bar */}
       
      </div>
    </footer>
  );
};

export default Footer;