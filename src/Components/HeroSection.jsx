
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-block bg-amber-600 text-amber-100 px-4 py-2 rounded-full text-sm font-semibold">
                Since 2015
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Start Your Day With
                <span className="block text-amber-200">Perfect Coffee</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-100 max-w-lg mx-auto lg:mx-0">
                Experience the rich aroma and authentic taste of freshly brewed coffee at Hasib's Coffee. Where every cup tells a story.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-amber-500 hover:bg-amber-400 text-amber-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Order Now
              </button>


              {/* ------------------------- */}
              <button 
              onClick={toggleMenu}
              className="border-2 border-amber-300 hover:bg-amber-300 hover:text-amber-900 text-amber-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                View Menu
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-200">50+</div>
                <div className="text-amber-100 text-sm">Coffee Variants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-200">5K+</div>
                <div className="text-amber-100 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-200">15+</div>
                <div className="text-amber-100 text-sm">Expert Baristas</div>
              </div>
            </div>
          </div>

          {/* Right Content - Coffee Image */}
          <div className="relative">
            <div className="relative z-10 bg-amber-100 rounded-2xl p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Specialty Coffee from Hasib's Coffee"
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-amber-500 text-amber-900 px-6 py-3 rounded-lg shadow-lg transform -rotate-6">
              <div className="font-bold text-sm">Most Popular</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-amber-200 text-amber-900 px-6 py-3 rounded-lg shadow-lg transform rotate-6">
              <div className="font-bold text-sm">Fresh Daily</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-auto text-amber-50"
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;