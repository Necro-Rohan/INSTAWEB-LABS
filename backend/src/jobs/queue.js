import { Queue } from 'bullmq';
import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

const redisConnection = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null, 
  tls: { rejectUnauthorized: false } 
});

// the Queue
export const blogQueue = new Queue('blog-generation-queue', { 
  connection: redisConnection 
});

// add jobs to the queue
export async function addBlogJob(blogData) {
  const job = await blogQueue.add('generate-blog', blogData, {
    removeOnComplete: true, // Keep Redis clean
    attempts: 3, // If DeepSeek or Unsplash fails, try again up to 3 times
    backoff: {
      type: 'exponential',
      delay: 5000 // Wait 5 seconds before retrying
    }
  });
  
  console.log(`Job added to queue! Job ID: ${job.id}`);
  return job;
}