import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'm67e1588',  // ✅ Use the correct Project ID from `sanity project list`
  dataset: 'production',  // ✅ Ensure it's "production" unless you use a different dataset
  useCdn: false,          // ✅ Set to false for fresh data
  apiVersion: '2023-01-01' // ✅ Use the latest API version
});