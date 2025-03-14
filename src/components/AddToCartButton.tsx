'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AddToCartButtonProps {
  productId: string;
  quantity?: number;
}

export default function AddToCartButton({ productId, quantity = 1 }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const addToCart = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would call an API endpoint to add the item to the cart
      // For now, we'll simulate adding to cart by storing in localStorage
      
      // Get existing cart from localStorage or initialize empty array
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Check if product already exists in cart
      const existingItemIndex = existingCart.findIndex((item: any) => item.productId === productId);
      
      if (existingItemIndex >= 0) {
        // Update quantity if product already in cart
        existingCart[existingItemIndex].quantity += quantity;
      } else {
        // Add new item to cart
        existingCart.push({
          productId,
          quantity,
          addedAt: new Date().toISOString()
        });
      }
      
      // Save updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(existingCart));
      
      // Show success message or redirect to cart
      alert('Product added to cart!');
      
      // Refresh the page to update any cart indicators
      router.refresh();
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product to cart. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={addToCart}
      disabled={isLoading}
      className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Adding...' : 'Add to Cart'}
    </button>
  );
} 