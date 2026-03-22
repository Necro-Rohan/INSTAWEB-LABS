import { Queue } from 'bullmq';
import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();


const renderRedisUrl = process.env.RENDER_REDIS_URL;

const redisOptions = {
  maxRetriesPerRequest: null,
};

if (renderRedisUrl.startsWith("rediss://")) {
  redisOptions.tls = { rejectUnauthorized: false };
}

const redisConnection = new Redis(renderRedisUrl, redisOptions);

// const redisConnection = new Redis(process.env.RENDER_REDIS_URL, {
//   maxRetriesPerRequest: null
// });

// the Queue
export const blogQueue = new Queue('blog-generation-queue', { 
  connection: redisConnection 
});

// add jobs to the queue
export async function addBlogJob(blogData, uniqueBlogId) {
  const job = await blogQueue.add("generate-blog", blogData, {
    jobId: uniqueBlogId, // Ensure uniqueness to prevent duplicates
    removeOnComplete: true, // Keep Redis clean
    removeOnFail: 100, // Keeps only the last 100 failed jobs for debugging
    attempts: 3, 
    backoff: {
      type: "exponential",
      delay: 30000, // Wait 30 seconds before retrying
    },
    removeOnComplete: true,
  });
  
  console.log(`Job added to queue! Job ID: ${job.id}`);
  return job;
}