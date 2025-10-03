import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Camera,
  Building2,
  Music,
  Gift,
  CheckCircle2,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen font-[Poppins] bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#1a1a1a] text-white py-24 lg:px-4 px-0">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            All Services in <span className="text-[#FFD700]">One Platform.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Discover and book everything you need for your big day – from
            convention halls to photography, all in one elegant platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/service">
              <Button
                size="lg"
                 variant="outline"
                className="bg-[#FFD700] text-black font-semibold hover:bg-[#FFD700]/20  rounded-2xl"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/Login">
              <Button
                size="lg"
                variant="outline"
                className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/20 rounded-2xl"
              >
                Become a Vendor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">
              Why Choose AKTORA EVENTS?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A premium platform where vendors showcase their services and users
              find everything for their dream wedding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1a1a1a] border border-gray-700 hover:border-[#FFD700] transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#FFD700]" />
                </div>
                <CardTitle className="text-white">Secure & Reliable</CardTitle>
                <CardDescription className="text-gray-400">
                  Safe transactions and trusted vendors with enterprise-grade
                  reliability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#1a1a1a] border border-gray-700 hover:border-[#FFD700] transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#FFD700]" />
                </div>
                <CardTitle className="text-white">Fast & Easy</CardTitle>
                <CardDescription className="text-gray-400">
                  Book services in minutes with our lightning-fast dashboard.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#1a1a1a] border border-gray-700 hover:border-[#FFD700] transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#FFD700]" />
                </div>
                <CardTitle className="text-white">
                  Customer Focused
                </CardTitle>
                <CardDescription className="text-gray-400">
                  24/7 support and curated vendor listings tailored for you.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">
              Popular Services
            </h2>
            <p className="text-lg text-gray-400">
              Everything you need for a wedding – all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "Convention Halls" },
              { icon: Camera, title: "Photography" },
              { icon: Music, title: "Music & DJs" },
              { icon: Gift, title: "Decor & Gifts" },
            ].map((service, i) => (
              <Card
                key={i}
                className="bg-[#1a1a1a] text-center border border-gray-700 hover:border-[#FFD700] transition-all"
              >
                <CardHeader className="flex flex-col items-center">
                  <service.icon className="w-10 h-10 text-[#FFD700] mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "1", title: "Browse Services" },
              { step: "2", title: "Compare & Choose" },
              { step: "3", title: "Book Instantly" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-[#1a1a1a] p-8 rounded-xl border border-gray-700 hover:border-[#FFD700] transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFD700] text-black font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
     
    </div>
  );
};

export default Home;