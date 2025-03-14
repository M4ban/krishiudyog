# KrishiUdyog - Agricultural E-Commerce Platform

![KrishiUdyog Logo](public/images/LOGO.jpeg)

## 📝 Description

KrishiUdyog is a modern e-commerce platform designed to connect farmers directly with consumers. The platform aims to eliminate middlemen, ensuring farmers receive fair prices for their produce while consumers get access to fresh, high-quality agricultural products.

## 🌟 Features

- **User Authentication**: Secure sign-up and login functionality
- **Product Browsing**: Browse through a variety of agricultural products
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add products to cart and manage quantities
- **Checkout Process**: Seamless checkout experience
- **User Dashboard**: Track orders and manage account information
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Local Farmer Support**: Platform designed to support local farmers

## 🛠️ Technologies Used

- **Frontend**:
  - Next.js 14.1.0
  - React
  - Tailwind CSS
  - TypeScript

- **Backend**:
  - Next.js API Routes
  - MongoDB
  - NextAuth.js for authentication

- **Deployment**:
  - Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/M4ban/krishiudyog.git
   cd krishiudyog
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Database Setup

The application includes a seed script to populate your database with initial product data:

```bash
# Access the API route to seed the database
http://localhost:3000/api/seed
```

## 📂 Project Structure

```
krishiudyog/
├── public/             # Static files
│   └── images/         # Product and UI images
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── api/        # API routes
│   │   ├── auth/       # Authentication pages
│   │   ├── cart/       # Shopping cart page
│   │   ├── checkout/   # Checkout pages
│   │   ├── dashboard/  # User dashboard
│   │   ├── products/   # Product listing and details
│   │   ├── signin/     # Sign in page
│   │   ├── signup/     # Sign up page
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable components
│   ├── data/           # Static data
│   ├── lib/            # Utility functions
│   ├── models/         # MongoDB models
│   └── providers/      # Context providers
├── .env.local          # Environment variables (create this)
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🔒 Authentication

The application uses NextAuth.js for authentication. Users can:
- Register with email and password
- Sign in with existing credentials
- Access protected routes (dashboard, checkout)

## 🛒 Shopping Experience

1. Browse products on the home page or products page
2. View detailed information about a product
3. Add products to your shopping cart
4. Adjust quantities or remove items from the cart
5. Proceed to checkout
6. Complete the purchase

## 🎨 Customization

The application uses Tailwind CSS for styling. The main color scheme can be customized in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#4D7C0F',    // Main brand color
      secondary: '#84CC16',  // Secondary brand color
      accent: '#F59E0B',     // Accent color
      dark: '#3F3F46',       // Dark elements
      light: '#F3F4F6',      // Light elements
    },
  },
},
```

## 🔄 Continuous Deployment

The project is set up for continuous deployment with Vercel. Any changes pushed to the main branch will automatically be deployed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or suggestions, please reach out to the project maintainers.

---

Built with ❤️ for supporting local farmers and sustainable agriculture. 