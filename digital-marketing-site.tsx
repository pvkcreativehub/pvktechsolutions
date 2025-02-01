import React, { useState } from 'react';
import { ArrowRight, Bot, Palette, Code, BarChart, Phone, Mail, PenTool, Monitor, Megaphone, CheckCircle } from 'lucide-react';

const DigitalMarketingWebsite = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    e.target.reset();
    
    // Clear success message after 3 seconds
    setTimeout(() => setSubmitStatus(''), 3000);
  };

  const workExamples = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description: "Custom-built marketplace with AI-powered product recommendations",
      technologies: "React, Node.js, AI Integration"
    },
    {
      title: "Marketing Analytics Dashboard",
      category: "Data Visualization",
      description: "Real-time metrics tracking and AI-driven insights",
      technologies: "React, Data Analytics, Machine Learning"
    },
    {
      title: "Corporate Brand Package",
      category: "Content Creation",
      description: "AI-generated content strategy with brand guidelines",
      technologies: "AI Writing, Design Tools"
    },
    {
      title: "Digital Ad Campaign",
      category: "Advertising",
      description: "Multi-platform campaign with AI-optimized targeting",
      technologies: "Social Media, AI Analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">PVK Creative Hub</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-white hover:text-pink-200 transition-colors">Services</a>
              <a href="#portfolio" className="text-white hover:text-pink-200 transition-colors">Portfolio</a>
              <a href="#contact" className="text-white hover:text-pink-200 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Transform Your Business with AI-Powered Marketing
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Leverage cutting-edge AI tools and creative solutions to grow your digital presence
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <a href="tel:8886002748" 
               className="flex items-center justify-center text-white hover:text-pink-200 transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              +91 888-600-2748
            </a>
            <a href="mailto:padamuthuprathyusharani@gmail.com" 
               className="flex items-center justify-center text-white hover:text-pink-200 transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold 
                           hover:bg-purple-100 transition-colors flex items-center mx-auto">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white/5 backdrop-blur-md py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 mb-4" />,
                title: "Full Stack Development",
                description: "Custom web applications, responsive designs, and scalable solutions"
              },
              {
                icon: <Bot className="h-8 w-8 mb-4" />,
                title: "AI-Powered Solutions",
                description: "Smart automation and AI integration for your business needs"
              },
              {
                icon: <Monitor className="h-8 w-8 mb-4" />,
                title: "Professional Presentations",
                description: "Engaging presentations that capture your audience's attention"
              },
              {
                icon: <Megaphone className="h-8 w-8 mb-4" />,
                title: "Digital Advertising",
                description: "Strategic ad campaigns optimized for maximum ROI"
              },
              {
                icon: <PenTool className="h-8 w-8 mb-4" />,
                title: "AI Content Creation",
                description: "High-quality content generated with cutting-edge AI tools"
              },
              {
                icon: <Palette className="h-8 w-8 mb-4" />,
                title: "Creative Design",
                description: "Eye-catching visuals and branding that makes you stand out"
              }
            ].map((service, index) => (
              <div key={index} 
                   className="bg-white/10 p-6 rounded-lg text-white hover:bg-white/20 
                             transition-colors cursor-pointer">
                {service.icon}
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {workExamples.map((work, index) => (
              <div key={index} 
                   className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 
                             transition-colors cursor-pointer">
                <h4 className="text-xl font-semibold text-white mb-2">{work.title}</h4>
                <p className="text-pink-200 mb-3">{work.category}</p>
                <p className="text-white/80 mb-4">{work.description}</p>
                <p className="text-white/60 text-sm">{work.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 
                           border border-white/20 focus:outline-none focus:border-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 
                           border border-white/20 focus:outline-none focus:border-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 
                           border border-white/20 focus:outline-none focus:border-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 
                           border border-white/20 focus:outline-none focus:border-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold 
                         hover:bg-purple-100 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {submitStatus === 'success' && <CheckCircle className="ml-2 h-5 w-5 text-green-600" />}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <footer className="bg-white/10 backdrop-blur-md py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-white/80 space-y-4">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="tel:8886002748" className="flex items-center justify-center hover:text-white transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              +91 888-600-2748
            </a>
            <a href="mailto:padamuthuprathyusharani@gmail.com" className="flex items-center justify-center hover:text-white transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              padamuthuprathyusharani@gmail.com
            </a>
          </div>
          <p>© 2025 PVK Creative Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DigitalMarketingWebsite;
