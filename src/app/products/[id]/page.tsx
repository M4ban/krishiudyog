import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import ProductDetailClient from './product-detail-client';

// Define dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found | KrishiUdyog',
    };
  }
  
  return {
    title: `${product.name} | KrishiUdyog`,
    description: product.description,
  };
}

// Function to fetch a single product by ID
async function getProduct(id: string) {
  try {
    await connectDB();
    const product = await Product.findById(id).lean();
    if (!product) return null;
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Function to fetch related products
async function getRelatedProducts(category: string, currentId: string) {
  try {
    await connectDB();
    const products = await Product.find({ 
      category, 
      _id: { $ne: currentId } 
    })
    .limit(4)
    .lean();
    
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = await getRelatedProducts(product.category, params.id);
  
  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
} 