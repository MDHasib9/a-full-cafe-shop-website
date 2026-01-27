import { useState } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emily Chen",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "Hasib's Coffee has become my daily ritual! The caramel macchiato is perfection, and the atmosphere makes it the perfect spot to work or relax. Best coffee in town!",
      featured: true,
      drink: "Caramel Macchiato"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Remote Worker",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "As someone who works remotely, I've tried every coffee shop in the city. Hasib's has the best WiFi, amazing coffee, and the most comfortable seating. My productivity has doubled!",
      featured: false,
      drink: "Cold Brew"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "The attention to detail here is incredible. From the latte art to the perfectly balanced flavors, every visit feels special. The baristas are true artists!",
      featured: true,
      drink: "Pour Over"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Local Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "I host all my business meetings here. The professional atmosphere combined with exceptional coffee makes it the perfect spot. The custom order feature is a game-changer!",
      featured: false,
      drink: "Custom Americano"
    },
    {
      id: 5,
      name: "Aisha Patel",
      role: "Student",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "The study-friendly environment and amazing coffee got me through finals! The oat milk latte is my favorite, and the staff remembers my name. Feels like home.",
      featured: true,
      drink: "Oat Milk Latte"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "I've reviewed over 50 coffee shops, and Hasib's is in my top 3. The bean quality, brewing techniques, and customer service are exceptional. Highly recommend!",
      featured: false,
      drink: "Espresso"
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const allTestimonials = testimonials;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={i < rating ? "text-amber-400" : "text-amber-200"}
      >
        ★
      </span>
    ));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? featuredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-300 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-amber-100 text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our coffee lovers have to say about their experience.
          </p>
        </div>

        {/* Featured Testimonials Carousel */}
        <div className="mb-20">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10"
            >
              ←
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10"
            >
              →
            </button>

            {/* Testimonial Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {renderStars(featuredTestimonials[activeTestimonial].rating)}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-light text-amber-900 leading-relaxed mb-8">
                "{featuredTestimonials[activeTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-amber-200">
                  <img
                    src={featuredTestimonials[activeTestimonial].image}
                    alt={featuredTestimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-amber-900 text-lg">
                    {featuredTestimonials[activeTestimonial].name}
                  </div>
                  <div className="text-amber-600 text-sm">
                    {featuredTestimonials[activeTestimonial].role}
                  </div>
                  <div className="text-amber-500 text-xs font-semibold mt-1">
                    Favorite: {featuredTestimonials[activeTestimonial].drink}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-amber-600 w-8' 
                      : 'bg-amber-200 hover:bg-amber-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-amber-800 rounded-2xl p-6 text-white hover:bg-amber-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-amber-100 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-amber-200 text-sm">{testimonial.role}</div>
                  <div className="text-amber-300 text-xs font-semibold mt-1">
                    {testimonial.drink}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-10 text-4xl">⭐</div>
            <div className="absolute top-12 right-16 text-3xl">❤️</div>
            <div className="absolute bottom-8 left-20 text-2xl">🌟</div>
            <div className="absolute bottom-16 right-10 text-3xl">💫</div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Community of Coffee Lovers
            </h3>
            <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
              Experience the Hasib's Coffee difference yourself. Come for the coffee, stay for the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-900 hover:bg-amber-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Visit Us Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-amber-900 font-bold px-8 py-4 rounded-lg transition-all duration-300">
                Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          {[
            { number: "2,500+", label: "5-Star Reviews" },
            { number: "15,000+", label: "Happy Customers" },
            { number: "98%", label: "Would Recommend" },
            { number: "#1", label: "Local Coffee Shop" }
          ].map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">
                {stat.number}
              </div>
              <div className="text-amber-100 text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;