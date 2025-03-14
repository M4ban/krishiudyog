'use client';

import Link from 'next/link';
import ProductImage from '@/components/ProductImage';

export default function HomeClient() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white rounded-xl overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex flex-col items-center md:items-start gap-4">
                <img 
                  src="/images/LOGO.jpeg" 
                  alt="KrishiUdyog Logo" 
                  className="h-24 w-24 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-center md:text-left">
                  Fresh Agricultural Products Direct from Farmers
                </h1>
              </div>
              <p className="text-lg opacity-90">
                KrishiUdyog connects you directly with farmers for the freshest, highest-quality agricultural products at fair prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  Browse Products
                </Link>
                <Link href="/about" className="px-6 py-3 bg-white text-primary rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/Fresh Apples.jpg" 
                      alt="Fresh Apples" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/Organic Wheat.jpg" 
                      alt="Organic Wheat" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/Fresh Spinach.jpg" 
                      alt="Fresh Spinach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/Organic Honey.jpg" 
                      alt="Organic Honey" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose KrishiUdyog?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-100 text-lime-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                All our products are carefully selected and quality-checked to ensure you receive only the best agricultural products.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-100 text-lime-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                We eliminate middlemen to ensure farmers get fair compensation while keeping prices reasonable for consumers.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-100 text-lime-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Support Local Farmers</h3>
              <p className="text-gray-600">
                By purchasing from KrishiUdyog, you directly support local farming communities and sustainable agricultural practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link href="/products" className="text-lime-600 hover:text-lime-700 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/Organic Wheat.jpg" 
                  alt="Organic Wheat" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Organic Wheat</h3>
                <p className="text-gray-600 mb-4 text-sm">Premium quality wheat grown without pesticides</p>
                <div className="flex justify-between items-center">
                  <span className="text-lime-600 font-bold">₹120/kg</span>
                  <button className="bg-lime-600 hover:bg-lime-700 text-white px-3 py-1 rounded-md text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/Fresh Tomatos.jpg" 
                  alt="Fresh Tomatoes" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fresh Tomatoes</h3>
                <p className="text-gray-600 mb-4 text-sm">Locally grown, vine-ripened tomatoes</p>
                <div className="flex justify-between items-center">
                  <span className="text-lime-600 font-bold">₹80/kg</span>
                  <button className="bg-lime-600 hover:bg-lime-700 text-white px-3 py-1 rounded-md text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/Organic Honey.jpg" 
                  alt="Organic Honey" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Organic Honey</h3>
                <p className="text-gray-600 mb-4 text-sm">Pure, raw honey from local beekeepers</p>
                <div className="flex justify-between items-center">
                  <span className="text-lime-600 font-bold">₹250/500g</span>
                  <button className="bg-lime-600 hover:bg-lime-700 text-white px-3 py-1 rounded-md text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/Fresh Apples.jpg" 
                  alt="Fresh Apples" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fresh Apples</h3>
                <p className="text-gray-600 mb-4 text-sm">Crisp and juicy apples from Himalayan orchards</p>
                <div className="flex justify-between items-center">
                  <span className="text-lime-600 font-bold">₹160/kg</span>
                  <button className="bg-lime-600 hover:bg-lime-700 text-white px-3 py-1 rounded-md text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-lime-700 to-lime-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Support Local Farmers</h2>
              <p className="text-white text-opacity-90 mb-6 max-w-lg">
                Join our mission to create a sustainable agricultural ecosystem. 
                By purchasing directly from farmers, you're helping rural communities thrive 
                while getting access to the freshest produce.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products" 
                  className="bg-white text-lime-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium shadow-md transition-colors duration-300"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/about" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-lime-700 px-6 py-3 rounded-md font-medium transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/images/Local Farmer.webp" 
                    alt="Local Farmer" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/Organic Wheat.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 