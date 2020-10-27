import * as dotenv from 'dotenv';
dotenv.config();

const env = process.env;
export default {
  hosts: env.HOSTS?.split(',') || []
}