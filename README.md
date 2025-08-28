# DN Kategaya Express - Bus Booking Website

A production-ready Next.js 14 + TypeScript website for DN Kategaya Express, a bus transportation company in Uganda.

## 🚌 About

DN Kategaya Express provides safe, comfortable, and reliable bus transportation services across Tanzania. This website allows customers to search for bus routes, book tickets, and manage their travel plans.

**Operator ID:** 2898390482

## ✨ Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Search Functionality**: Search for bus routes by departure/destination, date, and passengers
- **SafariPlus Integration**: Ready for seat selection and payment processing
- **SEO Optimized**: Built-in SEO with sitemap, robots.txt, and meta tags
- **PWA Ready**: Progressive Web App features for mobile users
- **Accessibility**: WCAG compliant design with proper ARIA labels

## 🎨 Brand Colors

- **Primary Red**: #E10600
- **Primary Yellow**: #FFD700  
- **Primary Blue**: #0057FF
- **Black**: #000000
- **White**: #FFFFFF

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **SEO**: next-seo
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── search/            # Search results page
│   ├── trip/[id]/         # Trip details with SafariPlus widget
│   ├── tickets/[reference]/ # Printable ticket view
│   ├── support/           # Support and FAQ page
│   ├── policy/            # Legal pages (terms, privacy, refund)
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header and Footer components
│   └── forms/             # Form components
└── lib/                   # Utility functions
    └── utils.ts           # Class name utilities
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
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://dnkategaya.com
NEXT_PUBLIC_OPERATOR_ID=2898390482
```

### Tailwind CSS

The project uses Tailwind CSS with custom DN Kategaya brand colors. Configuration is in `tailwind.config.ts`.

### SafariPlus Integration

The SafariPlus widget is currently a placeholder in the trip details page (`/trip/[id]`). To integrate the actual widget:

1. Replace the placeholder content in `src/app/trip/[id]/page.tsx`
2. Add SafariPlus JavaScript and CSS assets
3. Configure the widget with your operator ID and settings

## 📱 Pages

### Home (`/`)
- Hero section with DN Kategaya branding
- Search form for bus tickets
- Features and popular routes

### Search Results (`/search`)
- Displays available bus trips
- Filtered by search criteria
- Links to trip details

### Trip Details (`/trip/[id]`)
- Trip information and pricing
- SafariPlus widget for seat selection
- Payment processing

### Tickets (`/tickets/[reference]`)
- Printable ticket view
- Trip and passenger details
- Print-friendly styling

### Support (`/support`)
- Contact information
- FAQ section
- Support options

### Policy Pages
- **Terms of Service** (`/policy/terms`)
- **Privacy Policy** (`/policy/privacy`)
- **Refund Policy** (`/policy/refund`)

## 🎯 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling rules
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Ready for rich snippets

## 📱 PWA Features

- **Responsive Design**: Mobile-first approach
- **Offline Ready**: Service worker ready
- **Installable**: Can be added to home screen
- **Fast Loading**: Optimized performance

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 🔒 Security

- **HTTPS**: Enforced in production
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Built-in Next.js security features
- **CSRF Protection**: API route protection

## 📊 Performance

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Built-in bundle analyzer
- **Lighthouse**: Optimized for Core Web Vitals

## 🧪 Testing

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests (when implemented)
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by DN Kategaya Express.

## 📞 Support

For technical support or questions:
- **Email**: tech@dnkategaya.com
- **Phone**: +255 XXX XXX XXX
- **Address**: Plot 123, Main Street, Dar es Salaam, Tanzania

## 🔄 Updates

This website is actively maintained and updated. Check the repository regularly for:
- Security updates
- Feature additions
- Bug fixes
- Performance improvements

---

**Built with ❤️ for DN Kategaya Express**
# DNkategayaexpress-website
