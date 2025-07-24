# Minzs Aesthetics

A React-based website for Minzs Aesthetics, a beauty salon located in Kharghar, Navi Mumbai.

## Features

- Responsive design using TailwindCSS
- Navigation between pages using React Router
- Smooth animations and transitions using Framer Motion
- SEO optimized with meta tags
- Lazy loading of images for better performance
- Mobile-friendly with hamburger menu and sticky WhatsApp button
- Showcase of beauty services including facials, laser treatments, waxing, and nail extensions
- Client testimonials section
- Instagram content integration with Instagram Basic Display API
- WhatsApp booking integration

## Pages

- **Home**: Landing page with hero section, featured services, testimonials, and Instagram feed
- **Services**: Detailed information about all services offered
- **About**: Information about the salon, its story, and team
- **Gallery**: Before/after photos and salon images
- **Contact**: Contact information, form, and map

## Tech Stack

- React
- React Router
- TailwindCSS
- Framer Motion (animations)
- React Helmet (SEO)
- Vite
- Axios (for API requests)

## Color Theme

- Primary: #fce4ec (light blush pink)
- Accent: #ad1457 (deep mauve)
- Background: #fffafc
- Text: #333333 (dark grey)
- Secondary Text: #757575
- WhatsApp CTA: #8bc34a

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
/src
├── /components → Navbar.jsx, Footer.jsx, ServiceCard.jsx, TestimonialCard.jsx
├── /pages → Home.jsx, Services.jsx, About.jsx, Gallery.jsx, Contact.jsx
├── /assets → logo.svg, placeholder images
├── /data → servicesData.js, testimonialsData.js, instagram_posts.json
```

## Instagram Integration

The website integrates with Instagram using the Instagram Basic Display API to showcase the latest posts from the salon's Instagram account. This is implemented through:

1. **InstagramGallery Component**: Displays Instagram posts in a responsive grid
2. **Instagram Data Fetching Script**: A Node.js script (`fetch_instagram_example.js`) that:
   - Connects to the Instagram Basic Display API
   - Fetches recent posts from the connected Instagram account
   - Saves the data to JSON format for the website to use
   - Creates a human-readable text file for reference

### Setting up Instagram Integration:

1. Create a Facebook Developer account and set up an app with Instagram Basic Display API
2. Generate a long-lived access token for the Instagram account
3. Update the ACCESS_TOKEN in the fetch script
4. Run the script to fetch Instagram data:
   ```
   node fetch_instagram_example.js
   ```
5. The script will create/update `src/data/instagram_posts.json` which is used by the InstagramGallery component

## Future Enhancements

- Dynamic service cards
- Booking system integration
- Testimonials carousel

## Deployment Options

### Netlify

1. Create a Netlify account
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

### Vercel

1. Create a Vercel account
2. Import your GitHub repository
3. Configure build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy

### Firebase Hosting

1. Install Firebase CLI:
   ```
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```
   firebase login
   ```
3. Initialize Firebase:
   ```
   firebase init
   ```
4. Build the project:
   ```
   npm run build
   ```
5. Deploy to Firebase:
   ```
   firebase deploy
   ```

## Custom Domain Setup

To set up a custom domain (e.g., minzsaesthetics.in):

1. Purchase a domain from GoDaddy, Namecheap, or another domain registrar
2. Configure DNS settings to point to your hosting provider
3. Set up SSL certificate for secure HTTPS connection
