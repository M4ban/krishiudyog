export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Wheat',
    description: 'High-quality organic wheat from local farms, perfect for baking and cooking.',
    price: 29.99,
    image: '/images/wheat.jpg',
    category: 'Grains',
    stock: 100,
  },
  {
    id: '2',
    name: 'Fresh Tomatoes',
    description: 'Ripe, juicy tomatoes grown in greenhouses, ideal for salads and cooking.',
    price: 4.99,
    image: '/images/tomatoes.jpg',
    category: 'Vegetables',
    stock: 50,
  },
  {
    id: '3',
    name: 'Premium Coffee Beans',
    description: 'Arabica coffee beans from sustainable farms, perfect for brewing.',
    price: 19.99,
    image: '/images/coffee.jpg',
    category: 'Beverages',
    stock: 75,
  },
  {
    id: '4',
    name: 'Organic Honey',
    description: 'Pure, natural honey from local beekeepers, great for sweetening and cooking.',
    price: 12.99,
    image: '/images/honey.jpg',
    category: 'Sweeteners',
    stock: 30,
  },
  {
    id: '5',
    name: 'Fresh Apples',
    description: 'Crisp, fresh apples from local orchards, perfect for snacking and baking.',
    price: 3.99,
    image: '/images/apples.jpg',
    category: 'Fruits',
    stock: 200,
  },
]; 