import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";
import "../about/about.css";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Amol Soans",
      role: "Co-Founder & CEO",
      image: "/team/Amol%20Photo.jpg",
      bio: "Amol is a 2x founder who leads Monade's vision and strategic direction, bringing 3 years of leadership experience from Bajaj where he led offshore teams and managed complex technical projects. As CEO, he later specialized in voice AI technologies and combines his proven leadership skills with deep AI expertise to drive Monade's growth and deliver transformative customer experiences.",
      expertise: ["Team Leadership", "Voice AI Technology", "Executive Strategy"],
      linkedin: "https://www.linkedin.com/in/amoldericksoans/",
      twitter: "https://x.com/AmolSoans"
    },
    {
      name: "Narayan Thakur",
      role: "Co-Founder & COO",
      image: "/team/Narayan%20Photo.jpg",
      bio: "Narayan brings exceptional entrepreneurial drive as Joint Secretary of E-Cell at IIIT Ranchi and achieved his first major business milestone by closing his first sale at just 19 years old. As COO, he leverages his early entrepreneurial success and leadership experience to oversee operations, drive business strategy, and ensure Monade's rapid market expansion.",
      expertise: ["Entrepreneurship", "Operations Management", "Business Development"],
      linkedin: "https://www.linkedin.com/in/narayan-thakur-b63b55281/",
      twitter: "https://x.com/thakurnarayan49"
    },
    {
      name: "Aaditya Rangarajan",
      role: "Co-Founder & CTO",
      image: "/team/Screenshot%202025-08-18%20141219.png",
      bio: "Aaditya brings robust technical expertise with 2 years of experience at Philips and current role as Software Engineer at Helios. As CTO, he combines his enterprise software development background with cutting-edge AI engineering to build Monade's scalable platform architecture that handles enterprise-level deployments with exceptional reliability and performance.",
      expertise: ["Enterprise Software", "Technical Leadership", "Platform Engineering"],
      linkedin: "https://www.linkedin.com/in/aaditya2200/",
      twitter: "https://x.com/ADR_ad22"
    },
    {
      name: "Shashwat Yashasvi",
      role: "Co-Founder & Head of AI",
      image: "/team/shashwat.jpg",
      bio: "Shashwat leads the ML Wing at IIIT Ranchi and drives AI innovation at Monade, focusing on advancing our conversational AI capabilities and natural language processing. As Head of AI, he combines his academic ML leadership with cutting-edge research to ensure our voice agents deliver increasingly human-like interactions, pushing the boundaries of conversational AI technology.",
      expertise: ["ML Research Leadership", "Natural Language Processing", "Conversational AI"],
      linkedin: "https://www.linkedin.com/in/shashwat-yashasvi-4082562a1/",
      twitter: "https://x.com/shashwatya71079"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar variant="black" />
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 bg-gradient-to-br from-orange-900/50 via-black to-orange-900/50">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-orange-900/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The driving force behind Monade.ai is our talented team of founders, each bringing unique expertise in AI, engineering, and product development to create world-class conversational AI solutions.
          </p>
        </div>
      </section>



      {/* Team Members */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="sr-only">Team members</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-orange-500/30">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        width={128} 
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <div className="inline-block px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-4">
                      {member.role}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gray-700/50 border border-gray-600/30 rounded-full text-gray-300 text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We're building the future of business communication where AI agents are indistinguishable from human representatives, enabling companies to provide exceptional customer experiences at scale while reducing operational costs.
          </p>
          <div className="bg-gradient-to-r from-orange-900/30 via-orange-800/20 to-orange-900/30 rounded-2xl p-6 border border-orange-500/30">
            <p className="text-lg text-orange-200 italic">
              "Our mission is to democratize access to intelligent customer service through human-like AI voice agents that work 24/7 across multiple languages and industries."
            </p>
          </div>
        </div>
      </section>
      <FooterCTA />
    </div>
  );
}
