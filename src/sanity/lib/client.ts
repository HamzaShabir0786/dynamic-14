import { createClient } from "next-sanity";
import { deflate } from "zlib";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_API_VERSION,
  token: process.env.NEXT_MY_TOKEN,
  useCdn: true,
});
export default client;
