# Royal Medicinal Plants - Corporate Website

A professional corporate website frontend for Royal Medicinal Plants, built with React and Vite.

## Features

- 🏠 **Home Page** - Hero section, about preview, services, products preview, and call-to-action
- 📖 **About Us** - Company story, mission, values, and why choose us
- 🛠️ **Services** - Comprehensive service offerings with detailed descriptions
- 🌿 **Products** - Full product catalog with images and descriptions
- 📸 **Gallery** - Responsive image gallery with hover effects
- 📧 **Contact** - Contact information and contact form (frontend only)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with Grid & Flexbox

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
royal-medicinal-plants/
├── src/
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── pages/           # Page components (Home, About, Services, etc.)
│   ├── data/            # Data files (products, services)
│   ├── styles/          # CSS files
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # Entry point
├── image/               # Image assets
├── public/              # Public assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fixed navigation bar with mobile menu
- ✅ Modern, clean UI with professional color palette
- ✅ Smooth hover effects and animations
- ✅ SEO-friendly structure
- ✅ Accessible components

## Customization

### Colors

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #2d5016;
  --primary-dark: #1a3009;
  --primary-light: #4a7c2a;
  --secondary-color: #8b6914;
  --accent-color: #d4a574;
  /* ... */
}
```

### Products & Services

Update the data files:
- `src/data/products.js` - Product catalog
- `src/data/services.js` - Service offerings

## Image Setup

For Vite to serve images correctly, they need to be in the `public` folder:

1. Create a `public` folder in the root directory
2. Copy the `image` folder into `public/` so the structure is:
   ```
   public/
     image/
       Product/
         (all product images)
       royal-med-logo.jpg
   ```

The images will then be accessible at `/image/Product/...` paths.

## Notes

- This is a **frontend-only** application
- No backend, authentication, or payment logic included
- Contact form is for display purposes only
- Images must be in the `public/image/` directory for proper serving

## License

This project is for corporate use.

