import { useState } from 'react';

const CustomCoffee = () => {
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState(false);

  const CustomOrderModal = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [customOrder, setCustomOrder] = useState({
      base: '',
      milk: '',
      sweetness: 'medium',
      temperature: 'hot',
      extras: [],
      specialInstructions: '',
      size: 'medium'
    });

    const coffeeBases = [
      { name: 'Espresso', description: 'Strong and bold', price: '+$0.00' },
      { name: 'Cold Brew', description: 'Smooth and refreshing', price: '+$0.50' },
      { name: 'Pour Over', description: 'Artisanal and clean', price: '+$1.00' },
      { name: 'French Press', description: 'Rich and full-bodied', price: '+$1.50' },
      { name: 'AeroPress', description: 'Clean and intense', price: '+$1.25' }
    ];

    const milkOptions = [
      { name: 'Whole Milk', description: 'Creamy and rich', price: '+$0.00' },
      { name: 'Oat Milk', description: 'Creamy and nutty', price: '+$0.75' },
      { name: 'Almond Milk', description: 'Light and nutty', price: '+$0.75' },
      { name: 'Soy Milk', description: 'Creamy and smooth', price: '+$0.75' },
      { name: 'Coconut Milk', description: 'Tropical and light', price: '+$0.75' },
      { name: 'No Milk', description: 'Black coffee', price: '+$0.00' }
    ];

    const extraOptions = [
      { name: 'Extra Shot', price: '+$1.00' },
      { name: 'Vanilla Syrup', price: '+$0.50' },
      { name: 'Caramel Drizzle', price: '+$0.75' },
      { name: 'Whipped Cream', price: '+$0.50' },
      { name: 'Cinnamon Dust', price: '+$0.25' },
      { name: 'Chocolate Shavings', price: '+$0.75' },
      { name: 'Honey', price: '+$0.50' },
      { name: 'Protein Boost', price: '+$1.50' }
    ];

    const sizes = [
      { name: 'Small', description: '12oz', price: '+$0.00' },
      { name: 'Medium', description: '16oz', price: '+$1.00' },
      { name: 'Large', description: '20oz', price: '+$2.00' }
    ];

    const calculateTotal = () => {
      let total = 4.00; // Base price
      
      // Add base price adjustments
      const base = coffeeBases.find(b => b.name === customOrder.base);
      if (base) total += parseFloat(base.price.replace('+$', ''));
      
      // Add milk price adjustments
      const milk = milkOptions.find(m => m.name === customOrder.milk);
      if (milk) total += parseFloat(milk.price.replace('+$', ''));
      
      // Add extras
      customOrder.extras.forEach(extraName => {
        const extra = extraOptions.find(e => e.name === extraName);
        if (extra) total += parseFloat(extra.price.replace('+$', ''));
      });
      
      // Add size adjustments
      const size = sizes.find(s => s.name === customOrder.size);
      if (size) total += parseFloat(size.price.replace('+$', ''));
      
      return total.toFixed(2);
    };

    const handleExtraToggle = (extraName) => {
      setCustomOrder(prev => ({
        ...prev,
        extras: prev.extras.includes(extraName)
          ? prev.extras.filter(e => e !== extraName)
          : [...prev.extras, extraName]
      }));
    };

    const handleSubmit = () => {
      // Here you would typically send the order to your backend
      console.log('Custom Order Submitted:', customOrder);
      alert(`🎉 Your custom coffee order has been placed! Total: $${calculateTotal()}`);
      onClose();
      setCurrentStep(1);
      setCustomOrder({
        base: '',
        milk: '',
        sweetness: 'medium',
        temperature: 'hot',
        extras: [],
        specialInstructions: '',
        size: 'medium'
      });
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Create Your Perfect Coffee</h2>
              <button
                onClick={onClose}
                className="text-amber-100 hover:text-white text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Progress Steps */}
            <div className="flex justify-center mt-4 space-x-4">
              {[1, 2, 3, 4].map(step => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step === currentStep 
                      ? 'bg-white text-amber-600' 
                      : step < currentStep 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-amber-400 text-amber-100'
                  }`}>
                    {step < currentStep ? '✓' : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-8 h-1 mx-2 ${
                      step < currentStep ? 'bg-amber-500' : 'bg-amber-400'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {/* Step 1: Coffee Base */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-900">Choose Your Coffee Base</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coffeeBases.map(base => (
                    <button
                      key={base.name}
                      onClick={() => setCustomOrder(prev => ({ ...prev, base: base.name }))}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        customOrder.base === base.name
                          ? 'border-amber-500 bg-amber-50 shadow-lg'
                          : 'border-amber-200 hover:border-amber-300 hover:bg-amber-50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-amber-900">{base.name}</span>
                        <span className="text-amber-600 font-bold text-sm">{base.price}</span>
                      </div>
                      <p className="text-amber-600 text-sm">{base.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Milk & Temperature */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-900">Milk & Temperature</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Milk Type</h4>
                    <div className="space-y-2">
                      {milkOptions.map(milk => (
                        <button
                          key={milk.name}
                          onClick={() => setCustomOrder(prev => ({ ...prev, milk: milk.name }))}
                          className={`w-full p-3 rounded-lg border text-left transition-all ${
                            customOrder.milk === milk.name
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-amber-200 hover:border-amber-300'
                          }`}
                        >
                          <div className="flex justify-between">
                            <span>{milk.name}</span>
                            <span className="text-amber-600 font-bold text-sm">{milk.price}</span>
                          </div>
                          <p className="text-amber-600 text-xs">{milk.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Temperature</h4>
                    <div className="space-y-2">
                      {['Hot', 'Iced', 'Blended'].map(temp => (
                        <button
                          key={temp}
                          onClick={() => setCustomOrder(prev => ({ ...prev, temperature: temp.toLowerCase() }))}
                          className={`w-full p-3 rounded-lg border text-left transition-all ${
                            customOrder.temperature === temp.toLowerCase()
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-amber-200 hover:border-amber-300'
                          }`}
                        >
                          {temp}
                        </button>
                      ))}
                    </div>

                    <h4 className="font-semibold text-amber-800 mt-4 mb-3">Sweetness Level</h4>
                    <div className="space-y-2">
                      {['No Sugar', 'Light', 'Medium', 'Sweet', 'Very Sweet'].map(level => (
                        <button
                          key={level}
                          onClick={() => setCustomOrder(prev => ({ ...prev, sweetness: level.toLowerCase() }))}
                          className={`w-full p-3 rounded-lg border text-left transition-all ${
                            customOrder.sweetness === level.toLowerCase()
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-amber-200 hover:border-amber-300'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Extras & Size */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-900">Extras & Size</h3>
                
                <div>
                  <h4 className="font-semibold text-amber-800 mb-3">Add Extras</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {extraOptions.map(extra => (
                      <button
                        key={extra.name}
                        onClick={() => handleExtraToggle(extra.name)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          customOrder.extras.includes(extra.name)
                            ? 'border-amber-500 bg-amber-50 text-amber-900'
                            : 'border-amber-200 hover:border-amber-300'
                        }`}
                      >
                        <div className="text-sm font-medium">{extra.name}</div>
                        <div className="text-xs text-amber-600 font-bold">{extra.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-800 mb-3">Size</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {sizes.map(size => (
                      <button
                        key={size.name}
                        onClick={() => setCustomOrder(prev => ({ ...prev, size: size.name }))}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          customOrder.size === size.name
                            ? 'border-amber-500 bg-amber-50 shadow-lg'
                            : 'border-amber-200 hover:border-amber-300'
                        }`}
                      >
                        <div className="font-semibold text-amber-900">{size.name}</div>
                        <div className="text-sm text-amber-600">{size.description}</div>
                        <div className="text-amber-600 font-bold text-sm mt-1">{size.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-800 mb-3">Special Instructions</h4>
                  <textarea
                    value={customOrder.specialInstructions}
                    onChange={(e) => setCustomOrder(prev => ({ ...prev, specialInstructions: e.target.value }))}
                    placeholder="Any special requests for our baristas?"
                    className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 resize-none"
                    rows="3"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-900">Review Your Order</h3>
                
                <div className="bg-amber-50 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Base:</span>
                    <span>{customOrder.base || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Milk:</span>
                    <span>{customOrder.milk || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Temperature:</span>
                    <span className="capitalize">{customOrder.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sweetness:</span>
                    <span className="capitalize">{customOrder.sweetness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Size:</span>
                    <span>{customOrder.size}</span>
                  </div>
                  {customOrder.extras.length > 0 && (
                    <div className="flex justify-between">
                      <span className="font-semibold">Extras:</span>
                      <span>{customOrder.extras.join(', ')}</span>
                    </div>
                  )}
                  {customOrder.specialInstructions && (
                    <div>
                      <span className="font-semibold">Special Instructions:</span>
                      <p className="text-amber-700 mt-1">{customOrder.specialInstructions}</p>
                    </div>
                  )}
                  
                  <div className="border-t border-amber-200 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-amber-600">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-amber-200 p-6 bg-amber-50">
            <div className="flex justify-between">
              <button
                onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentStep > 1
                    ? 'bg-amber-200 text-amber-900 hover:bg-amber-300'
                    : 'bg-amber-100 text-amber-400 cursor-not-allowed'
                }`}
                disabled={currentStep === 1}
              >
                Back
              </button>
              
              {currentStep < 4 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  🎉 Place Order - ${calculateTotal()}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Custom Order CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-center text-white relative overflow-hidden">
        {/* Animated coffee beans */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 text-4xl">☕</div>
          <div className="absolute top-12 right-16 text-3xl">🌰</div>
          <div className="absolute bottom-8 left-20 text-2xl">☕</div>
          <div className="absolute bottom-16 right-10 text-3xl">🌰</div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
          Want Something Special?
        </h3>
        <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto relative z-10">
          Create your dream coffee with our custom builder! Choose every detail exactly how you like it.
        </p>
        <button 
          onClick={() => setIsCustomOrderOpen(true)}
          className="bg-white text-amber-900 hover:bg-amber-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative z-10"
        >
          🎨 Build Custom Coffee
        </button>
      </div>

      {/* Custom Order Modal */}
      <CustomOrderModal 
        isOpen={isCustomOrderOpen} 
        onClose={() => setIsCustomOrderOpen(false)} 
      />
    </>
  );
};

export default CustomCoffee;