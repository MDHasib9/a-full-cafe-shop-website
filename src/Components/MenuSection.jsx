import { useState } from 'react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      description: "Strong and bold, our signature espresso shot",
      price: "$3.50",
      category: "hot",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: true
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Perfect blend of espresso, steamed milk, and foam",
      price: "$4.25",
      category: "hot",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: true
    },
    {
      id: 3,
      name: "Iced Americano",
      description: "Chilled espresso with ice cold water",
      price: "$4.00",
      category: "cold",
      image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Caramel Macchiato",
      description: "Vanilla syrup, espresso, milk and caramel drizzle",
      price: "$5.50",
      category: "hot",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Cold Brew",
      description: "Smooth, slow-steeped cold coffee",
      price: "$4.75",
      category: "cold",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: true
    },
    {
      id: 6,
      name: "Mocha Latte",
      description: "Espresso with chocolate and steamed milk",
      price: "$5.25",
      category: "hot",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Iced Matcha Latte",
      description: "Premium matcha green tea with milk over ice",
      price: "$5.75",
      category: "cold",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Turkish Coffee",
      description: "Traditional finely ground coffee brewed slowly",
      price: "$4.50",
      category: "hot",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Coffee' },
    { id: 'hot', name: 'Hot Coffee' },
    { id: 'cold', name: 'Cold Coffee' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-lg">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-2 mb-4">
            Handcrafted Coffee
          </h2>
          <p className="text-amber-700 text-xl max-w-2xl mx-auto">
            Each cup is carefully prepared by our expert baristas using the finest beans from around the world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                {/* Price */}
                <div className="absolute top-4 right-4 bg-white text-amber-900 px-3 py-1 rounded-full text-lg font-bold shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    item.category === 'hot' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.category === 'hot' ? 'HOT' : 'COLD'}
                  </span>
                </div>
                
                <p className="text-amber-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-amber-900 hover:text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want Something Special?
          </h3>
          <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
            Our baristas can create custom drinks tailored to your taste. Don't see what you're looking for? Just ask!
          </p>
          <button className="bg-white text-amber-900 hover:bg-amber-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Custom Order
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default MenuSection;