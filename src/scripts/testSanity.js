import { createClient } from '@sanity/client';

const sanity = createClient({
  projectId: 'm67e1588',  // Replace with your actual Sanity Project ID
  dataset: 'production',         
  useCdn: false,                 
  apiVersion: '2023-01-01'       
});

async function testConnection() {
  try {
    const query = '*[_type == "packages"][0]'; // Fetch one package
    const result = await sanity.fetch(query);
    console.log("Sanity Data:", result);
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
  }
}

testConnection();