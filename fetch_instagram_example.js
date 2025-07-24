/**
 * Example script to fetch Instagram posts for Minz's Aesthetics website
 * 
 * This script demonstrates how to:
 * 1. Connect to the Instagram Basic Display API
 * 2. Fetch recent posts from a connected Instagram account
 * 3. Save the data to both JSON (for the website) and TXT (for reference) formats
 * 
 * Prerequisites:
 * - Node.js installed
 * - Facebook Developer account with an app that has Instagram Basic Display API enabled
 * - Long-lived access token for the Instagram account
 * 
 * Installation:
 * npm install axios
 */

const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Configuration - Replace these values with your own
const CONFIG = {
  // Your Instagram access token (keep this secure!)
  ACCESS_TOKEN: 'YOUR_LONG_LIVED_ACCESS_TOKEN',
  
  // Number of posts to fetch (max 25 per request with Basic Display API)
  POST_LIMIT: 9,
  
  // Output file paths
  OUTPUT_JSON: path.join(__dirname, 'src', 'data', 'instagram_posts.json'),
  OUTPUT_TXT: path.join(__dirname, 'instagram_posts.txt'),
  
  // Create data directory if it doesn't exist
  DATA_DIR: path.join(__dirname, 'src', 'data')
};

/**
 * Ensures the data directory exists
 */
function ensureDirectoryExists() {
  if (!fs.existsSync(CONFIG.DATA_DIR)) {
    console.log(`Creating directory: ${CONFIG.DATA_DIR}`);
    fs.mkdirSync(CONFIG.DATA_DIR, { recursive: true });
  }
}

/**
 * Formats a date string to a more readable format
 * @param {string} dateString - ISO date string from Instagram API
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Truncates a string to a specified length with ellipsis
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated string
 */
function truncateString(str, maxLength = 100) {
  if (!str || str.length <= maxLength) return str;
  return str.substring(0, maxLength - 3) + '...';
}

/**
 * Fetches Instagram posts using the Instagram Basic Display API
 */
async function fetchInstagramPosts() {
  try {
    console.log('Fetching Instagram posts...');
    
    // Instagram API endpoint for user's media
    const API_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=${CONFIG.POST_LIMIT}&access_token=${CONFIG.ACCESS_TOKEN}`;
    
    // Make the API request
    const response = await axios.get(API_URL);
    const posts = response.data.data;
    
    console.log(`Fetched ${posts.length} posts from Instagram`);
    
    // Format the data for our website
    const formattedData = posts.map(post => ({
      id: post.id,
      caption: post.caption || '',
      mediaUrl: post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
      mediaType: post.media_type,
      thumbnailUrl: post.thumbnail_url || post.media_url
    }));
    
    // Ensure the data directory exists
    ensureDirectoryExists();
    
    // Save to a JSON file for the website
    fs.writeFileSync(
      CONFIG.OUTPUT_JSON, 
      JSON.stringify(formattedData, null, 2)
    );
    console.log(`Saved JSON data to ${CONFIG.OUTPUT_JSON}`);
    
    // Create a more human-readable text file
    const textContent = [
      '# Minz\'s Aesthetics Instagram Posts',
      `# Generated on ${new Date().toLocaleString()}`,
      '# This file contains information about recent Instagram posts',
      '# for reference purposes.',
      '',
    ].join('\n');
    
    const postsText = formattedData.map(post => [
      '---',
      '',
      `Post ID: ${post.id}`,
      `Date: ${formatDate(post.timestamp)}`,
      `Caption: "${post.caption}"`,
      `Link: ${post.permalink}`,
      '',
    ].join('\n')).join('\n');
    
    fs.writeFileSync(CONFIG.OUTPUT_TXT, textContent + postsText);
    console.log(`Saved text data to ${CONFIG.OUTPUT_TXT}`);
    
    console.log('Instagram data fetch completed successfully!');
    
    return formattedData;
  } catch (error) {
    console.error('Error fetching Instagram data:');
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(`Status: ${error.response.status}`);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from Instagram API');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    
    console.error('Full error:', error);
    
    // Create an error log file
    const errorLog = [
      '# Instagram API Error Log',
      `# Generated on ${new Date().toLocaleString()}`,
      '',
      `Error: ${error.message}`,
      '',
      'Please check your:',
      '1. Internet connection',
      '2. Access token validity',
      '3. API endpoint URL',
      '4. Facebook Developer App settings',
      '',
      'For more help, visit: https://developers.facebook.com/docs/instagram-basic-display-api/troubleshooting'
    ].join('\n');
    
    fs.writeFileSync('instagram_error_log.txt', errorLog);
    console.log('Error details saved to instagram_error_log.txt');
    
    return null;
  }
}

/**
 * Main function to run the script
 */
async function main() {
  console.log('=== Instagram Content Fetcher for Minz\'s Aesthetics ===');
  console.log('Starting fetch process...');
  
  const posts = await fetchInstagramPosts();
  
  if (posts) {
    console.log('\nNext steps:');
    console.log('1. Review the generated instagram_posts.txt file');
    console.log('2. The website will automatically use the new data from instagram_posts.json');
    console.log('3. To keep content fresh, run this script periodically or set up a scheduled task');
  } else {
    console.log('\nFetch failed. Please check the error log and try again.');
  }
  
  console.log('\nProcess complete!');
}

// Run the script
main();