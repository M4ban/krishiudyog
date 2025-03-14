'use client';

import Link from 'next/link';
import ProductImage from '@/components/ProductImage';
import AddToCartButton from '@/components/AddToCartButton';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-primary">Home</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/products" className="hover:text-primary">Products</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 font-medium truncate">{product.name}</li>
        </ol>
      </nav>
      
      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
            {product.image ? (
              <ProductImage 
                src={product.image} 
                alt={product.name} 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold font-display text-dark">{product.name}</h1>
              <span className="bg-primary bg-opacity-10 text-primary text-sm px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>
          
          <div className="border-t border-b border-gray-200 py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Price</p>
                <p className="text-3xl font-bold text-primary">₹{product.price.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Availability</p>
                <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="text-gray-700 font-medium">Quantity:</label>
              <select 
                id="quantity" 
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="1"
              >
                {[...Array(Math.min(10, product.stock))].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            
            <div className="flex gap-4">
              <AddToCartButton productId={product._id} />
              <button className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-white transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-bold text-dark mb-2">Product Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex">
                <span className="w-32 font-medium">Category:</span>
                <span>{product.category}</span>
              </li>
              <li className="flex">
                <span className="w-32 font-medium">Stock:</span>
                <span>{product.stock} units</span>
              </li>
              <li className="flex">
                <span className="w-32 font-medium">Added on:</span>
                <span>{new Date(product.createdAt).toLocaleDateString()}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold font-display text-dark mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {relatedProduct.image ? (
                      <ProductImage 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-dark">{relatedProduct.name}</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{relatedProduct.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-primary">₹{relatedProduct.price.toFixed(2)}</span>
                    <Link 
                      href={`/products/${relatedProduct._id}`}
                      className="text-xs px-3 py-1 bg-primary text-white rounded-md hover:bg-opacity-90"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 