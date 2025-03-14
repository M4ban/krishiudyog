require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

async function testConnection() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(uri);
    console.log('Successfully connected to MongoDB!');
    
    // Test creating a simple document
    const TestSchema = new mongoose.Schema({
      test: String,
      createdAt: { type: Date, default: Date.now }
    });
    
    // Use try-catch to handle model creation
    let TestModel;
    try {
      // Try to get the existing model
      TestModel = mongoose.model('TestModel');
    } catch (e) {
      // Model doesn't exist, create it
      TestModel = mongoose.model('TestModel', TestSchema);
    }
    
    console.log('Creating test document...');
    const testDoc = await TestModel.create({ test: 'Connection test successful' });
    console.log('Successfully created test document:', testDoc);
    
    // Clean up
    console.log('Cleaning up...');
    await TestModel.deleteMany({});
    await mongoose.disconnect();
    console.log('Successfully disconnected from MongoDB!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

testConnection(); 