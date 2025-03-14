import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';

// Sample products data
const products = [
  {
    name: 'Organic Wheat',
    description: 'High-quality organic wheat grown without pesticides. Perfect for making chapatis, bread, and other wheat-based products.',
    price: 29.99,
    image: '/images/Organic Wheat.jpg',
    category: 'grains',
    stock: 50
  },
  {
    name: 'Fresh Tomatoes',
    description: 'Ripe, juicy tomatoes grown in our greenhouse. Rich in lycopene and perfect for salads, curries, and sauces.',
    price: 4.99,
    image: '/images/Fresh Tomatos.jpg',
    category: 'vegetables',
    stock: 100
  },
  {
    name: 'Premium Coffee Beans',
    description: 'Arabica coffee beans from sustainable farms in the hills of South India. Medium roast with notes of chocolate and caramel.',
    price: 19.99,
    image: '/images/Premium Coffee Beans.jpg',
    category: 'beverages',
    stock: 30
  },
  {
    name: 'Organic Honey',
    description: 'Pure, natural honey collected from beehives located in pristine forests. No additives or preservatives.',
    price: 12.99,
    image: '/images/Organic Honey.jpg',
    category: 'condiments',
    stock: 25
  },
  {
    name: 'Fresh Apples',
    description: 'Crisp, sweet apples from Himalayan orchards. Rich in fiber and antioxidants.',
    price: 3.99,
    image: '/images/Fresh Apples.jpg',
    category: 'fruits',
    stock: 75
  },
  {
    name: 'Basmati Rice',
    description: 'Premium long-grain basmati rice with a delightful aroma. Perfect for biryanis and pulao.',
    price: 15.99,
    image: '/images/Basmati Rice.jpg',
    category: 'grains',
    stock: 60
  },
  {
    name: 'Fresh Spinach',
    description: 'Nutrient-rich spinach leaves, freshly harvested from our farms. High in iron and vitamins.',
    price: 2.49,
    image: '/images/Fresh Spinach.jpg',
    category: 'vegetables',
    stock: 80
  },
  {
    name: 'Organic Turmeric Powder',
    description: 'Organically grown turmeric, ground into fine powder. Known for its anti-inflammatory properties.',
    price: 5.99,
    image: '/images/Organic Turmeric Powder.jpg',
    category: 'spices',
    stock: 40
  },
  {
    name: 'Fresh Oranges',
    description: 'Juicy, sweet oranges rich in Vitamin C. Perfect for juicing or eating fresh.',
    price: 4.49,
    image: '/images/Fresh Oranges.jpg',
    category: 'fruits',
    stock: 65
  },
  {
    name: 'Organic Milk',
    description: 'Fresh, organic milk from grass-fed cows. No hormones or antibiotics.',
    price: 3.29,
    image: '/images/Organic Milk.jpg',
    category: 'dairy',
    stock: 30
  }
];

export async function GET() {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert new products
    await Product.insertMany(products);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully with 10 products',
      count: products.length
    });
  } catch (error: any) {
    console.error('Error seeding database:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to seed database' 
    }, { status: 500 });
  }
} 