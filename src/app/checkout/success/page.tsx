'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OrderSuccessPage() {
  const router = useRouter();
  
  // Generate a random order ID
  const orderId = `KU${Math.floor(100000 + Math.random() * 900000)}`;
  
  // If someone navigates directly to this page without placing an order, redirect them
  useEffect(() => {
    const checkOrderStatus = () => {
      // In a real app, we would check if there was a recent order
      // For now, we'll just check if they came from checkout
      const referrer = document.referrer;
      if (!referrer.includes('/checkout')) {
        router.push('/');
      }
    };
    
    checkOrderStatus();
  }, [router]);

  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold font-display text-dark mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you for your order. We've received your order and will begin processing it right away.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm">Order ID</p>
            <p className="text-xl font-bold text-dark">{orderId}</p>
          </div>
          
          <div className="w-full max-w-sm border-t border-b border-gray-200 py-4 my-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Order Date</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Delivery</span>
              <span className="font-medium">
                {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              We've sent a confirmation email with order details to your email address.
            </p>
            <p className="text-gray-600">
              You can track your order status in your account dashboard.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/dashboard/orders" className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90">
          Track Your Order
        </Link>
        <Link href="/products" className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-white transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
} 