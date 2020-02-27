import dotenv from 'dotenv/config';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
