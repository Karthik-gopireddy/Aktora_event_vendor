import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-[Poppins]">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FFD700] drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have questions or need support? We're here to help you with VendorHub.
        </p>
      </section>

      <div className="container mx-auto px-4">
        {/* Contact Info Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail className="w-6 h-6 text-[#FFD700]" />,
                title: "Email",
                desc: "support@vendorhub.com",
              },
              {
                icon: <Phone className="w-6 h-6 text-[#FFD700]" />,
                title: "Phone",
                desc: "+1 (555) 123-4567",
              },
              {
                icon: <MapPin className="w-6 h-6 text-[#FFD700]" />,
                title: "Address",
                desc: "123 Business Ave, Suite 100, SF 94105",
              },
              {
                icon: <Clock className="w-6 h-6 text-[#FFD700]" />,
                title: "Hours",
                desc: "Mon-Fri: 9AM-6PM | Sat-Sun: 10AM-4PM",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-black border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/40"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-[#FFD700]">{item.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#FFD700]">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Fill out the form and our team will respond within 24 hours.
          </p>
          <Card className="bg-black border border-[#FFD700]/30 max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-black border-[#FFD700]/30 text-white focus:border-[#FFD700] focus:ring-[#FFD700]"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-black border-[#FFD700]/30 text-white focus:border-[#FFD700] focus:ring-[#FFD700]"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-black border-[#FFD700]/30 text-white focus:border-[#FFD700] focus:ring-[#FFD700]"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-black border-[#FFD700]/30 text-white focus:border-[#FFD700] focus:ring-[#FFD700] min-h-[120px]"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#FFD700] text-black font-semibold hover:bg-white transition-all"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-black border border-[#FFD700]/30 rounded-lg p-4 cursor-pointer hover:border-[#FFD700]">
              <summary className="text-lg font-semibold text-white">
                How quickly do you respond to messages?
              </summary>
              <p className="text-gray-400 mt-2">
                We aim to respond within 24 hours on business days.
              </p>
            </details>
            <details className="bg-black border border-[#FFD700]/30 rounded-lg p-4 cursor-pointer hover:border-[#FFD700]">
              <summary className="text-lg font-semibold text-white">
                Can I schedule a consultation call?
              </summary>
              <p className="text-gray-400 mt-2">
                Yes! Use the form above or call us directly to schedule.
              </p>
            </details>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#FFD700]">
            Find Us Here
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden border border-[#FFD700]/30">
            <iframe
              title="VendorHub Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="text-center pb-20">
          <h2 className="text-4xl font-bold mb-8 text-[#FFD700]">
            Connect with Us
          </h2>
          <div className="flex justify-center space-x-6">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-full border border-[#FFD700]/40 hover:border-[#FFD700] transition-all"
              >
                <Icon className="w-6 h-6 text-[#FFD700]" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;