const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-lg">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-2 mb-4">
            More Than Just Coffee
          </h2>
          <p className="text-amber-700 text-xl max-w-3xl mx-auto">
            We're a community hub where stories are shared, connections are made, and every cup is crafted with passion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Content - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-amber-800">
                From a Small Dream to Your Daily Ritual
              </h3>
              <p className="text-amber-700 text-lg leading-relaxed">
                Founded in 2015 by Hasib Ahmed, what started as a humble corner shop has blossomed into the heart of our community. 
                Our mission was simple: serve exceptional coffee while creating a space where everyone feels at home.
              </p>
              <p className="text-amber-700 text-lg leading-relaxed">
                We travel the world to source the finest single-origin beans, then roast them in small batches to ensure 
                every cup delivers the rich, complex flavors our customers deserve.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 text-xl">🌱</span>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Sustainable Sourcing</h4>
                  <p className="text-amber-600 text-sm">Ethically sourced beans from partner farms</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 text-xl">👨‍🍳</span>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Expert Baristas</h4>
                  <p className="text-amber-600 text-sm">Trained professionals passionate about coffee</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 text-xl">❤️</span>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Community First</h4>
                  <p className="text-amber-600 text-sm">Supporting local artists and events</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 text-xl">✨</span>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Quality Promise</h4>
                  <p className="text-amber-600 text-sm">Every cup meets our high standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Hasib's Coffee Shop Interior"
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-amber-100">Years Serving</div>
              </div>
            </div>
            
            {/* Small Image */}
            <div className="absolute -top-6 -right-6 bg-white p-2 rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Coffee Art"
                className="w-32 h-32 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-amber-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Meet Our Master Baristas
            </h3>
            <p className="text-amber-700 text-lg max-w-2xl mx-auto">
              Our passionate team of coffee experts who turn simple beans into extraordinary experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Hasib Ahmed",
                role: "Founder & Head Barista",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                specialty: "Espresso Art & Roasting",
                experience: "10+ years"
              },
              {
                name: "Sarah Chen",
                role: "Coffee Roaster",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                specialty: "Bean Selection & Blending",
                experience: "8 years"
              },
              {
                name: "Marcus Rodriguez",
                role: "Barista Trainer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                specialty: "Latte Art & Training",
                experience: "6 years"
              },
              {
                name: "Aisha Khan",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                specialty: "Creating Memorable Moments",
                experience: "5 years"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-amber-900 text-lg">{member.name}</h4>
                <p className="text-amber-600 text-sm mb-2">{member.role}</p>
                <p className="text-amber-700 text-xs mb-1">{member.specialty}</p>
                <div className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full inline-block">
                  {member.experience}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-4xl">☕</div>
            <div className="absolute bottom-10 right-10 text-4xl">🌰</div>
            <div className="absolute top-1/2 left-1/4 text-3xl">❤️</div>
            <div className="absolute top-1/3 right-1/4 text-3xl">✨</div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Promise to You
            </h3>
            <p className="text-amber-100 text-xl max-w-3xl mx-auto leading-relaxed">
              "At Hasib's Coffee, we believe that great coffee is more than just a drink—it's a catalyst for connection, 
              creativity, and community. Every bean is chosen with care, every cup is crafted with passion, and every 
              customer is treated like family."
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-xl">✍️</span>
              </div>
              <div className="text-left">
                <div className="font-bold">Hasib Ahmed</div>
                <div className="text-amber-200 text-sm">Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;