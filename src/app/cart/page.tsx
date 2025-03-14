'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProductImage from '@/components/ProductImage';

interface CartItem {
  productId: string;
  quantity: number;
  addedAt: string;
  product?: {
    _id: string;
    name: string;
    price: number;
    image?: string;
    category: string;
    stock: number;
  };
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.product?.price || 0) * item.quantity;
  }, 0);
  
  const shippingCost = subtotal > 500 ? 0 : 50; // Free shipping for orders over ₹500
  const total = subtotal + shippingCost;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setIsLoading(true);
        
        // Get cart items from localStorage
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        if (cart.length === 0) {
          setCartItems([]);
          setIsLoading(false);
          return;
        }
        
        // In a real implementation, we would fetch product details from the API
        // For now, we'll simulate with dummy data
        const itemsWithProducts = await Promise.all(
          cart.map(async (item: CartItem) => {
            try {
              // In a real app, fetch from API: const response = await fetch(`/api/products/${item.productId}`);
              // Simulate API response with dummy data based on productId
              const dummyProducts = [
                { _id: '1', name: 'Organic Wheat', price: 29.99, category: 'grains', stock: 50 },
                { _id: '2', name: 'Fresh Tomatoes', price: 4.99, category: 'vegetables', stock: 100 },
                { _id: '3', name: 'Premium Coffee Beans', price: 19.99, category: 'beverages', stock: 30 },
                { _id: '4', name: 'Organic Honey', price: 12.99, category: 'condiments', stock: 25 },
                { _id: '5', name: 'Fresh Apples', price: 3.99, category: 'fruits', stock: 75 }
              ];
              
              const product = dummyProducts.find(p => p._id === item.productId) || {
                _id: item.productId,
                name: 'Unknown Product',
                price: 0,
                category: 'unknown',
                stock: 0
              };
              
              return {
                ...item,
                product
              };
            } catch (error) {
              console.error(`Error fetching product ${item.productId}:`, error);
              return item;
            }
          })
        );
        
        setCartItems(itemsWithProducts);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Failed to load cart items. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCartItems();
  }, []);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => {
      if (item.productId === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    
    setCartItems(updatedCart);
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart.map(({ product, ...item }) => item)));
  };

  const removeItem = (productId: string) => {
    const updatedCart = cartItems.filter(item => item.productId !== productId);
    setCartItems(updatedCart);
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart.map(({ product, ...item }) => item)));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const proceedToCheckout = () => {
    // In a real app, redirect to checkout page
    router.push('/checkout');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 className="text-2xl font-bold mt-4">Your cart is empty</h2>
        <p className="text-gray-600 mt-2">Looks like you haven't added any products to your cart yet.</p>
        <Link href="/products" className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-display text-dark">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.productId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          {item.product?.image ? (
                            <ProductImage 
                              src={item.product.image} 
                              alt={item.product?.name || 'Product'} 
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <Link href={`/products/${item.productId}`} className="text-sm font-medium text-gray-900 hover:text-primary">
                            {item.product?.name || 'Unknown Product'}
                          </Link>
                          <div className="text-xs text-gray-500">{item.product?.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₹{item.product?.price.toFixed(2) || '0.00'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="p-1 rounded-md border border-gray-300 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="p-1 rounded-md border border-gray-300 hover:bg-gray-100"
                          disabled={item.quantity >= (item.product?.stock || 0)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₹{((item.product?.price || 0) * item.quantity).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => removeItem(item.productId)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={clearCart}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Clear Cart
            </button>
            <Link href="/products" className="px-4 py-2 text-primary hover:underline">
              Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-dark mb-4">Order Summary</h2>
            <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-dark">Total</span>
              <span className="text-xl font-bold text-primary">₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={proceedToCheckout}
              className="w-full px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Taxes and shipping calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 