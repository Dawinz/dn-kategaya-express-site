# DNKategaya Express - Bus Booking Website

A modern React-based bus booking website for DNKategaya Express, providing premium bus transportation services across Tanzania.

## 🚌 About

DNKategaya Express offers safe, comfortable, and reliable bus transportation services in the Lake Victoria region of Tanzania. This website allows customers to search for bus routes, book tickets, and manage their travel plans with an integrated SafariYetu booking system.

## ✨ Features

- **Modern Design**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Multi-language Support**: English and Swahili
- **Search Functionality**: Search for bus routes by departure/destination, date, and passengers
- **SafariYetu Integration**: Integrated booking system for seat selection and payments
- **Gallery**: Showcase of our modern fleet
- **Contact Form**: Easy communication with customers
- **WhatsApp Integration**: Direct customer support

## 🎨 Brand Colors

- **Primary Red**: #E10600
- **Primary Yellow**: #FFD700  
- **Primary Blue**: #0057FF
- **Navy**: #1a365d
- **Silver**: #e2e8f0

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Vercel (configured)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── Gallery.jsx     # Image gallery
│   ├── Footer.jsx      # Footer component
│   └── SearchForm.js   # Booking form
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Routes.jsx      # Routes page
│   ├── Contact.jsx     # Contact page
│   ├── Book.jsx        # Booking page
│   └── Gallery.jsx     # Gallery page
├── context/            # React context
│   └── LanguageContext.js # Multi-language support
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dn-kategaya-express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)

The project is configured for Vercel deployment with a `vercel.json` file:

1. **Connect your GitHub repository** to Vercel
2. **Framework preset**: Create React App (auto-detected)
3. **Build command**: `npm run build`
4. **Output directory**: `build`
5. **Install command**: `npm install`

The `vercel.json` file handles routing for the single-page application.

### Other Platforms

The project can also be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📱 Pages

### Home (`/`)
- Hero section with DNKategaya Express branding
- Search form for bus tickets
- Features and gallery showcase

### Routes (`/routes`)
- Available bus routes in the Lake Victoria region
- Routes: Mwanza ↔ Bukoba, Mwanza ↔ Karagwe, Bukoba ↔ Karagwe
- Pricing and schedule information

### Gallery (`/gallery`)
- Photo gallery of our modern fleet
- Interactive image viewer

### Contact (`/contact`)
- Contact information and form
- Customer support details

### Book (`/book`)
- Integrated SafariYetu booking system
- Seat selection and payment processing

## 🌐 SafariYetu Integration

The website integrates with SafariYetu for:
- Real-time seat availability
- Secure payment processing
- Booking management
- Customer support

## 📞 Contact Information

- **Phone**: +255 755 478 744
- **Email**: support@dnkategaya.com
- **Headquarters**: Dar es Salaam, Tanzania
- **WhatsApp**: Available 24/7

## 🚀 Deployment

The project can be deployed to any platform that supports React applications:

- Vercel (recommended)
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is proprietary software owned by DNKategaya Express.

---

**Built with ❤️ for DNKategaya Express**
# dn-kategaya-express-site
