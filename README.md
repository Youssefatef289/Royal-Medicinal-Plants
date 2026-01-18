# Royal Medicinal Plants - Corporate Website

A professional corporate website frontend for Royal Medicinal Plants, built with React and Vite. Features bilingual support (English/Arabic), modern animations, and a fully responsive design.

## Features

- 🏠 **Home Page** - Video hero section, features showcase, who we are, why choose us, about preview, services carousel, products carousel, and call-to-action
- 📖 **About Us** - Company information, story, mission, values, and why choose us
- 🛠️ **Services** - Comprehensive service offerings with detailed descriptions and icons
- 🌿 **Products** - Full product catalog with images, descriptions, and available forms dropdown
- 📸 **Gallery** - Responsive image gallery with hover effects
- 📧 **Contact** - Contact information and contact form (frontend only)
- 🌐 **Bilingual Support** - Full English/Arabic language toggle with RTL support
- ⚡ **Loading Screen** - Beautiful loading animation on page refresh
- 🎨 **Modern UI** - Glassmorphism effects, smooth animations, and professional design

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
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx        # Navigation bar with language toggle
│   │   ├── Footer.jsx         # Footer with company info
│   │   ├── Loading.jsx        # Loading screen component
│   │   ├── ProductCard.jsx   # Product card with dropdown
│   │   ├── ProductCarousel.jsx # Product carousel component
│   │   └── Icons.jsx         # SVG icon components
│   ├── pages/                 # Page components
│   │   ├── Home.jsx           # Home page with all sections
│   │   ├── About.jsx          # About us page
│   │   ├── Services.jsx       # Services page
│   │   ├── Products.jsx       # Products page
│   │   ├── Gallery.jsx        # Gallery page
│   │   └── Contact.jsx        # Contact page
│   ├── contexts/             # React contexts
│   │   └── LanguageContext.jsx # Language state management
│   ├── data/                  # Data files
│   │   ├── products.js        # Product catalog
│   │   ├── services.js        # Service offerings
│   │   └── translations.js    # Bilingual translations
│   ├── hooks/                 # Custom React hooks
│   │   └── useIntersectionObserver.js # Scroll animation hook
│   ├── styles/                # CSS files
│   │   ├── index.css          # Global styles and variables
│   │   ├── App.css            # App-level styles
│   │   ├── Navbar.css         # Navigation styles
│   │   ├── Home.css           # Home page styles
│   │   └── ...                # Other page styles
│   ├── App.jsx                # Main app component with routing
│   └── main.jsx               # Entry point
├── fonts/                     # Custom fonts
│   ├── CoconNextArabic-Regular.otf
│   └── CoconNextArabic-Bold.otf
├── image/                     # Image assets
│   ├── Product/               # Product images
│   └── ...                    # Other images
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
└── package.json                # Dependencies and scripts
```

## Key Features

- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Bilingual Support** - English/Arabic language toggle with RTL support
- ✅ **Custom Fonts** - CoconNextArabic for Arabic, Josefin Sans for English
- ✅ **Fixed Navigation** - Transparent navbar on home page, white on scroll
- ✅ **Loading Screen** - Beautiful loading animation on page refresh
- ✅ **Hero Sections** - Image backgrounds on all pages with overlay effects
- ✅ **Product Carousel** - Auto-scrolling product showcase with navigation
- ✅ **Smooth Animations** - Scroll-triggered animations using Intersection Observer
- ✅ **Glassmorphism** - Modern card designs with transparent backgrounds
- ✅ **Modern UI** - Professional color palette suitable for food/agriculture brand
- ✅ **SEO-friendly** - Semantic HTML structure
- ✅ **Accessible** - ARIA labels and keyboard navigation support

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

