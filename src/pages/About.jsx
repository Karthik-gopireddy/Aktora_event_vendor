import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-black text-white font-[Poppins]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-[#FFD700]">
            About <span className="text-white">Aktora Events</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We bring together wedding vendors and customers on a single elegant
            platform — making it simple to plan, book, and celebrate your
            special moments.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Card className="bg-[#1a1a1a] border border-gray-700 shadow-lg hover:border-[#FFD700] transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-[#FFD700]">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base md:text-lg text-gray-300 space-y-4">
              <p>
                Aktora Events was born out of the frustration couples face while
                searching for the right vendors. Endless calls, scattered
                options, and no central place to compare made wedding planning
                stressful.
              </p>
              <p>
                We envisioned a single platform where vendors — from convention
                halls to photographers — could showcase their services, and
                couples could easily browse, compare, and book.
              </p>
              <p>
                Today, we proudly connect thousands of vendors with customers,
                creating unforgettable weddings with elegance and simplicity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-[#FFD700] mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1a1a1a] border border-gray-700 hover:border-[#FFD700] transition-all shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#FFD700]" />
                </div>
                <CardTitle className="text-white">Mission</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  To simplify wedding vendor management and empower couples to
                  plan stress-free celebrations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#1a1a1a] border border-gray-700 hover:border-[#FFD700] transition-all shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#FFD700]" />
                </div>
                <CardTitle className="text-white">Vision</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  To become the most trusted global wedding services platform,
                  connecting dreams with the right vendors.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#1a1a1a] border border-gray-700 hover:border-[#FFD700] transition-all shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#FFD700]" />
                </div>
                <CardTitle className="text-white">Excellence</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Delivering exceptional experiences with innovation, reliability,
                  and premium service quality.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-8">Our Team</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Behind Aktora Events is a diverse team of passionate professionals
            working tirelessly to bring elegance and ease to wedding planning.
          </p>

          <Card className="bg-[#1a1a1a] border border-gray-700 shadow-lg max-w-2xl mx-auto hover:border-[#FFD700] transition-all">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-[#FFD700]">50+</h3>
                  <p className="text-gray-400">Team Members</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#FFD700]">10+</h3>
                  <p className="text-gray-400">Countries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-[#FFD700] py-12 px-6 text-center rounded-xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Join the Aktora Family
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            Whether you’re a vendor looking to grow or a couple planning your
            dream wedding, Aktora Events is here for you.
          </p>
          <button className="bg-black text-[#FFD700] px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;