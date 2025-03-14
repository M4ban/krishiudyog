require('dotenv').config({ path: '.env.local' });
import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the test document
interface TestDocument extends Document {
  test?: string | null;
  createdAt: Date;
}

async function testConnection() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(uri);
    console.log('Successfully connected to MongoDB!');
    
    // Define the schema with proper typing
    const TestSchema = new Schema<TestDocument>({
      test: { type: String, default: null },
      createdAt: { type: Date, default: Date.now }
    });
    
    // Use try-catch to handle model creation
    let TestModel;
    try {
      // Try to get the existing model
      TestModel = mongoose.model<TestDocument>('TestModel');
    } catch (e) {
      // Model doesn't exist, create it
      TestModel = mongoose.model<TestDocument>('TestModel', TestSchema);
    }
    
    console.log('Creating test document...');
    // Use an array for create method to avoid type issues
    const testDoc = await TestModel.create([{ test: 'Connection test successful' }]);
    console.log('Successfully created test document:', testDoc[0]);
    
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