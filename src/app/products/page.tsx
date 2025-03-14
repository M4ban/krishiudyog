import { Metadata } from 'next';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import ProductsClient from './products-client.tsx';

export const metadata: Metadata = {
  title: 'Products | KrishiUdyog',
  description: 'Browse our selection of high-quality agricultural products directly from farmers',
};

// Function to fetch products from the database
async function getProducts() {
  try {
    await connectDB();
    const products = await Product.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();
  
  return <ProductsClient products={products} />;
} 