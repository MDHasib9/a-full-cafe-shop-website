import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const locations = [
    {
      id: 1,
      name: "Downtown Main Cafe",
      address: "123 Coffee Street, Downtown",
      city: "New York, NY 10001",
      phone: "(555) 123-4567",
      hours: {
        weekdays: "6:00 AM - 10:00 PM",
        weekends: "7:00 AM - 11:00 PM"
      },
      features: ["Free WiFi", "Outdoor Seating", "Meeting Room"],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Riverside Branch",
      address: "456 River View Drive",
      city: "New York, NY 10002",
      phone: "(555) 123-4568",
      hours: {
        weekdays: "6:30 AM - 9:00 PM",
        weekends: "7:30 AM - 10:00 PM"
      },
      features: ["Waterfront View", "Art Gallery", "Live Music"],
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-lg">Visit Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-2 mb-4">
            Come Say Hello
          </h2>
          <p className="text-amber-700 text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Visit our cafes or get in touch – let's talk coffee!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Form */}
          <div className="bg-amber-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-amber-800 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-amber-800 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-amber-800 font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="catering">Catering & Events</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-amber-800 font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Locations */}
          <div className="space-y-8">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-100">
                <div className="h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">{location.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-amber-600 mt-1">📍</span>
                      <div>
                        <div className="font-semibold text-amber-800">{location.address}</div>
                        <div className="text-amber-600 text-sm">{location.city}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-amber-600 mt-1">📞</span>
                      <div className="text-amber-800 font-semibold">{location.phone}</div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-amber-600 mt-1">🕒</span>
                      <div>
                        <div className="font-semibold text-amber-800">Hours:</div>
                        <div className="text-amber-600 text-sm">
                          Mon-Fri: {location.hours.weekdays}
                        </div>
                        <div className="text-amber-600 text-sm">
                          Sat-Sun: {location.hours.weekends}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-amber-600 mt-1">⭐</span>
                      <div>
                        <div className="font-semibold text-amber-800">Features:</div>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {location.features.map((feature, index) => (
                            <span
                              key={index}
                              className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center">
                      Get Directions
                    </button>
                    <button className="flex-1 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map & Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Quick Contact */}
          <div className="bg-amber-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-700 p-3 rounded-full">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-amber-200">(555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-amber-700 p-3 rounded-full">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-amber-200">hello@hasibscoffee.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-amber-700 p-3 rounded-full">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-amber-200">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-amber-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Business Hours</h3>
            <div className="space-y-3">
              {[
                { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
                { day: "Saturday", hours: "7:00 AM - 11:00 PM" },
                { day: "Sunday", hours: "7:00 AM - 11:00 PM" },
                { day: "Holidays", hours: "8:00 AM - 8:00 PM" }
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="font-semibold text-amber-800">{schedule.day}</span>
                  <span className="text-amber-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-amber-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Follow Us</h3>
            <p className="text-amber-700 mb-6">
              Stay updated with our latest offers, events, and coffee adventures.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Instagram", icon: "📷", handle: "@hasibscoffee" },
                { name: "Facebook", icon: "👥", handle: "/hasibscoffee" },
                { name: "Twitter", icon: "🐦", handle: "@hasibscoffee" },
                { name: "TikTok", icon: "🎵", handle: "@hasibscoffee" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white hover:bg-amber-200 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <div className="text-2xl mb-2">{social.icon}</div>
                  <div className="font-semibold text-amber-800 text-sm">{social.name}</div>
                  <div className="text-amber-600 text-xs">{social.handle}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;